export function base(icon) {
  let encoded = Buffer.from(icon).toString('base64')
  return `url(data:image/svg+xml;base64,${encoded})`
}
