import { Links, Meta, Scripts, ScrollRestoration } from '@remix-run/react'
import type { LinksFunction } from '@remix-run/node'
import stylesheet from '~/tailwind.css?url'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }]

export default function App() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
