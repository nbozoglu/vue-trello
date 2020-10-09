export class ContentBlock {
  constructor ({
    id = null,
    title = ``
  } = {}) {
    this.id = id
    this.title = title
  }
}

export function responseAdapter (response) {
  const { fields, sys } = response.sys.type === `Array`
    ? response.items[0]
    : response

  return new ContentBlock({ ...fields, ...sys })
}
