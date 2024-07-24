import { $ } from "bun";

await Promise.all([
  $`bunx tailwindcss -i ./src/styles/root.css -o ./static/root.css --watch`,
  $`bun build ./src/scripts/index.js --outdir ./static --watch`,
  $`cp ./src/scripts/deps/htmx.min.js ./static/htmx.min.js`,
  $`cp ./src/scripts/deps/alpine.min.js ./static/alpine.min.js`,
  $`bun run --hot src/index.tsx`,
]);
