import unorm from 'unorm'

export const compareText = (text = '', term = '') => {
  const accents = /[\u0300-\u036f]/g
  const textLC = <string>unorm.nfd(text.toLowerCase().replace(accents, ''))
  const termLC = <string>unorm.nfd(term.toLowerCase().replace(accents, ''))
  const index = textLC.indexOf(termLC)
  return index
}

export const separateText: (
  itemText: string,
  index: number,
  term: string
) => string[] = (itemText = '', index, term) => {
  const text = [
    itemText.substr(0, index),
    itemText.substr(index, term.length),
    itemText.substr(index + term.length, itemText.length)
  ]
  return text
}
