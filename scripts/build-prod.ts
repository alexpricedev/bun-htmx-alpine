import { $ } from "bun";

await Promise.all([
  $`bun install`,
  $`bunx tailwindcss -i ./src/styles/root.css -o ./static/root.css`,
  $`bun build ./src/scripts/index.ts --outdir ./static --watch`,
  $`cp ./src/scripts/htmx.min.js ./static`,
]);
