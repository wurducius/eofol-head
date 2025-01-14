import { html, renderHtml } from "./html"
import { HeadData } from "./types"

const relativizePath = (path: string | undefined) => path

const script = (scriptName: string) =>
  html("script", [], {
    src: relativizePath(`./assets/js/${scriptName}.js`),
    async: "async",
    defer: "defer",
  })

export const helmet = (data: HeadData, viewStyles?: string) =>
  html("head", [
    html("meta", [], { charset: "UTF-8" }),
    html("meta", [], {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    }),
    html("meta", [], { name: "theme-color", content: data.themeColor }),
    html("meta", [], { name: "description", content: data.description }),
    html("meta", [], { property: "og:description", content: data.descriptionOg }),
    html("meta", [], { name: "keywords", content: data.keywords }),
    html("meta", [], { name: "author", content: data.author }),
    html("meta", [], { property: "og:image", content: relativizePath(data.imageOg) }),
    html("meta", [], { property: "og:image:type", content: data.imageTypeOg }),
    html("meta", [], { property: "og:image:width", content: data.imageWidthOg }),
    html("meta", [], { property: "og:image:height", content: data.imageHeightOg }),
    html("link", [], { rel: "icon", href: relativizePath(data.favicon) }),
    html("link", [], { rel: "apple-touch-icon", href: relativizePath(data.appleTouchIcon) }),
    html("link", [], { rel: "manifest", href: relativizePath(data.manifest) }),
    html("title", [data.title], {}),
    html("style", [relativizePath(data.fontStyle), data.style, viewStyles].filter(Boolean) as string[], {}),
  ])

export const head = (headData: HeadData, content: string, viewScript?: string, styles?: string) =>
  renderHtml(
    html(
      "html",
      [
        helmet(headData, styles),
        html(
          "body",
          // @ts-ignore
          [
            content,
            script("runtime"),
            script("dependencies"),
            viewScript && script(viewScript),
            html("noscript", ["You need to enable JavaScript to run this app."], {}),
          ].filter(Boolean),
          {},
        ),
      ],
      { lang: headData.language ?? "en" },
    ),
  )
