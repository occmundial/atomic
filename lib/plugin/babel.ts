import types from '@babel/types'

function error(msg) {
  throw new Error(`babel-plugin-atomic: ${msg}`)
}

function getImportsList(path) {
  return path.node.specifiers.filter(function (specifier) {
    if (specifier.type !== 'ImportSpecifier') {
      error(
        'Import entire module detected. Using this syntax means we cannot tree shake properly.'
      )
    } else return true
  })
}

function importDeclaration(specifier, path) {
  return types.importDeclaration([specifier], types.stringLiteral(path))
}

function replaceImport(path, statements) {
  if (statements.length > 0) {
    path.replaceWithMultiple(statements)
  }
  return path
}

function importComponents(path) {
  const importsList = getImportsList(path)
  const importStatements = importsList.map(function (specifier) {
    const importName = specifier.imported.name
    if (importName === 'toastLauncher') {
      return importDeclaration(
        specifier,
        '@occmundial/atomic/components/Toaster/helper'
      )
    } else {
      return importDeclaration(
        types.importDefaultSpecifier(types.identifier(importName)),
        `@occmundial/atomic/components/${importName}`
      )
    }
  })
  replaceImport(path, importStatements)
}

function importGeneric(path, dir) {
  const importsList = getImportsList(path)
  const importStatements = importsList.map(function (specifier) {
    const importName = specifier.imported.name
    return importDeclaration(
      types.importDefaultSpecifier(types.identifier(importName)),
      `@occmundial/atomic/${dir}/${importName}`
    )
  })
  replaceImport(path, importStatements)
}

module.exports = function () {
  return {
    visitor: {
      ImportDeclaration: function (path) {
        if (path.node.source.value === '@occmundial/atomic/components') {
          return importComponents(path)
        } else if (path.node.source.value === '@occmundial/atomic/hooks') {
          importGeneric(path, 'hooks')
        } else if (path.node.source.value === '@occmundial/atomic/tokens') {
          importGeneric(path, 'tokens')
        }
      }
    }
  }
}
