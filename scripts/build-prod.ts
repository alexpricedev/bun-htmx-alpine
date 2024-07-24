import { $ } from "bun";

await Promise.all([
  $`bun install`,
  $`bunx tailwindcss -i ./src/styles/root.css -o ./static/root.css`,
]);
