import { Hono } from "hono";

import { db } from "@/db";
import { HomePage } from "@/pages/home";
import { AboutPage } from "@/pages/about";
import { todoController } from "@/controllers/todos";

import type { Todo } from "@/types/Todo";

const app = new Hono();

app.get("/", (c) => {
  const todos = db.query("SELECT * FROM todos").all() as Todo[];
  return c.html(<HomePage todos={todos} />);
});

app.get("/about", (c) => c.html(<AboutPage />));

const apiRouter = new Hono();

// Todos API routes
apiRouter.post("/todos", todoController.create);
apiRouter.post("/todos/:id/update-content", todoController.updateContent);
apiRouter.post("/todos/:id/complete", todoController.complete);
apiRouter.post("/todos/:id/uncomplete", todoController.uncomplete);
apiRouter.delete("/todos/:id", todoController.delete);

app.route("/api", apiRouter);

export default {
  port: 8080,
  fetch: app.fetch,
};
