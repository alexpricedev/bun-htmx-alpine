import { Context } from "hono";

import {
  deleteTodo,
  updateTodoIsComplete,
  updateTodoContent,
  insertTodo,
  getTodo,
} from "@/db";
import { TodoItem } from "@/components/TodoItem";

import type { Todo } from "@/types/Todo";

const updateIsComplete = (isComplete: boolean) => async (c: Context) => {
  const todoId = c.req.param("id");
  updateTodoIsComplete.run(isComplete, todoId);
  const todo = getTodo.get(todoId);
  return c.html(<TodoItem todo={todo as Todo} />);
};

export const todoController = {
  create: async (c: Context) => {
    const { content } = await c.req.json();
    const todo = insertTodo.get({ $content: content }) as Todo;
    return c.html(<TodoItem todo={todo} />);
  },
  updateContent: async (c: Context) => {
    const todoId = c.req.param("id");
    const { content } = await c.req.json();
    updateTodoContent.run(content, todoId);
    const todo = getTodo.get(todoId);
    return c.html(<TodoItem todo={todo as Todo} />);
  },
  complete: updateIsComplete(true),
  uncomplete: updateIsComplete(false),
  delete: (c: Context) => {
    const todoId = c.req.param("id");
    deleteTodo.run(todoId);
    return c.html("");
  },
};
