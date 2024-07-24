import { $ } from "bun";

await Promise.all([
  $`bunx tailwindcss -i ./src/styles/root.css -o ./public/root.css --watch`,
  $`bun build ./src/scripts/index.js --outdir ./public --watch`,
  $`cp ./src/scripts/deps/htmx.min.js ./public/htmx.min.js`,
  $`cp ./src/scripts/deps/alpine.min.js ./public/alpine.min.js`,
  $`bun run --hot src/index.tsx`,
]);
