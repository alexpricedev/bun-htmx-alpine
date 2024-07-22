import { TodoItem } from "@/components/TodoItem";

import type { Todo } from "@/types/Todo";

type ListTodosProps = {
  todos: Todo[];
};

export const ListTodos = ({ todos }: ListTodosProps) => (
  <ul
    className="space-y-4 text-left text-gray-900 bg-gray-300 rounded p-6"
    id="todo-list"
  >
    {todos.map((todo) => (
      <TodoItem todo={todo} />
    ))}
  </ul>
);
