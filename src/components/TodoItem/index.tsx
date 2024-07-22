import type { Todo } from "@/types/Todo";

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItemProps) => (
  <li
    className="flex items-center space-x-3 border-2 border-gray-400 p-3 rounded"
    key={`todo-${todo.id}`}
    x-data
  >
    <button
      className="border-2 border-green-500 p-1 rounded"
      hx-post={`/api/todos/${todo.id}/${todo.isComplete ? "un" : ""}complete`}
      hx-target="closest li"
      hx-swap="outerHTML"
    >
      <svg
        className={`w-3.5 h-3.5 text-green-500 hover:opacity-40 ${
          todo.isComplete ? "!opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 12"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5.917 5.724 10.5 15 1.5"
        />
      </svg>
    </button>
    <form
      className={`flex-grow m-0 ${todo.isComplete ? "line-through" : ""}`}
      hx-post={`/api/todos/${todo.id}/update-content`}
      hx-target="closest li"
      hx-swap="outerHTML"
      hx-ext="json-enc"
      x-on:submit="document.getElementById('newTodoForm').focus()"
    >
      <input
        className="w-full bg-transparent outline-none"
        id="content"
        name="content"
        required
        type="text"
        value={todo.content}
        x-on:focus="$el.select()"
        x-on:blur="$el.submit()"
      />
    </form>
    <button
      className="border-2 border-red-500 rounded text-red-500 w-6 h-6"
      hx-delete={`/api/todos/${todo.id}`}
      hx-target="closest li"
      hx-swap="outerHTML"
    >
      <span className="relative -top-[3px]">x</span>
    </button>
  </li>
);
