import { $ } from "bun";

await Promise.all([
  $`bun install`,
  $`bunx tailwindcss -i ./src/styles/root.css -o ./public/root.css`,
  $`bun build ./src/scripts/index.js --outdir ./public`,
  $`cp ./src/scripts/deps/htmx.min.js ./public/htmx.min.js`,
  $`cp ./src/scripts/deps/alpine.min.js ./public/alpine.min.js`,
]);
