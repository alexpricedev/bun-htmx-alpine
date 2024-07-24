import { PropsWithChildren } from "hono/jsx";

export const Core = ({ children }: PropsWithChildren) => (
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script
        src="https://unpkg.com/htmx.org@2.0.1"
        integrity="sha384-QWGpdj554B4ETpJJC9z+ZHJcA/i59TyjxEPXiiUgN2WmTyV5OEZWCD6gQhgkdpB/"
        crossorigin="anonymous"
      />
      <script src="https://unpkg.com/htmx.org@1.9.12/dist/ext/json-enc.js" />
      <script
        defer
        src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"
      />
      <link href="./static/root.css" rel="stylesheet" />
    </head>
    <body className="bg-gray-200 max-w-[800px] m-auto p-6">
      <div
        hx-boost="true"
        className="mb-4 pb-2 border-2 border-b-black space-x-4"
      >
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
      {children}
    </body>
  </html>
);
