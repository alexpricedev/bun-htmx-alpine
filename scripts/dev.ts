import { $ } from "bun";

await Promise.all([
  $`bunx tailwindcss -i ./src/styles/root.css -o ./static/root.css --watch`,
  $`bun build ./src/scripts/index.ts --outdir ./static --watch`,
  $`cp ./src/scripts/htmx.min.js ./static`,
  $`bun run --hot src/index.tsx`,
]);
