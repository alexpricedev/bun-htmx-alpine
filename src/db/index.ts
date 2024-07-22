import { Database } from "bun:sqlite";

export const db = new Database(":memory:");

// Set up
db.run(
  "CREATE TABLE todos (id INTEGER PRIMARY KEY, content TEXT, isComplete BOOLEAN DEFAULT false);"
);

// ORM
export const insertTodo = db.prepare(
  "INSERT INTO todos (content) VALUES ($content)"
);
export const getTodo = db.prepare("SELECT * FROM todos WHERE id=?");
export const updateTodoContent = db.prepare(
  "UPDATE todos SET content=? WHERE id=?;"
);
export const updateTodoIsComplete = db.prepare(
  "UPDATE todos SET isComplete=? WHERE id=?;"
);
export const deleteTodo = db.prepare("DELETE FROM todos WHERE id=?;");

// Seed
const insertTodos = db.transaction((todos) => {
  for (const todo of todos) insertTodo.run(todo);
});
insertTodos([
  { $content: "Hello Bun" },
  { $content: "Hello HTMX" },
  { $content: "Hello Alpine" },
]);
