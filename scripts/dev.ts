import { $ } from "bun";

await Promise.all([
  $`bunx tailwindcss -i ./src/styles/root.css -o ./static/root.css --watch`,
  $`bun run --hot src/index.tsx`,
]);
