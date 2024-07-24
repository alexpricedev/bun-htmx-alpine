import { PropsWithChildren } from "hono/jsx";

export const Core = ({ children }: PropsWithChildren) => (
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="./static/htmx.min.js" />
      <script src="./static/index.js" />
      <script defer src="./static/alpine.min.js" />
      <link href="./static/root.css" rel="stylesheet" />

      <title>bun-htmx-alpine</title>
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
