import { H1 } from "@/components/H1";
import { Core } from "@/layouts/core";

export const AboutPage = () => (
  <Core>
    <H1 content="About this project" />
    <p className="mb-4">
      This project uses HTMX with a little bit of Alpine to create a <i>rich</i>{" "}
      user experience in a fully server rendered architecture.
    </p>
    <p className="mb-4">
      Everything is rendered on the server and live-updated using HTMX's AJAX
      flow.
    </p>
    <p className="mb-4">
      Even the page transitions are hot-reloaded via "boost".
    </p>
    <p>
      Oh, and the templating is all Bun's native JSX engine. So no new
      templating language to learn!
    </p>
  </Core>
);
