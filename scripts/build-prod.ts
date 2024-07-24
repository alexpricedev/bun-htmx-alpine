import { $ } from "bun";

await Promise.all([
  $`bun install`,
  $`bunx tailwindcss -i ./src/styles/root.css -o ./static/root.css`,
  $`bun build ./src/scripts/index.js --outdir ./static`,
  $`cp ./src/scripts/deps/htmx.min.js ./static`,
  $`cp ./src/scripts/deps/alpine.min.js ./static`,
]);
