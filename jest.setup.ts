import '@testing-library/jest-dom'

window.CSSStyleSheet.prototype.insertRule = function (rule, index) {
  const styleElement = document.createElement('style')
  const textNode = document.createTextNode(rule)
  styleElement.appendChild(textNode)
  document.head.appendChild(styleElement)
  return 0
}
