import { Attributes, Content } from "./types"

export const html = (tagname: string, content?: Content, attributes?: Attributes) => ({
  type: tagname,
  content: Array.isArray(content) ? content : content ? [content] : [],
  attributes: attributes ?? {},
})

export const renderHtml = (
  html: { type: string; attributes: Attributes; content: Content },
  // @ts-ignore
): Promise<string> => jsonToHtml(html, true)
