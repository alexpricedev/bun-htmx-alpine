export const CreateTodo = () => (
  <div x-data>
    <form
      className="flex items-end space-x-3"
      hx-post="/api/todos"
      hx-target="#todo-list"
      hx-swap="beforeend"
      hx-ext="json-enc"
      id="newTodoForm"
      x-on:submit="$nextTick(() => $el.reset())"
    >
      <div className="flex-grow">
        <label
          className="block mb-2 text-sm font-medium text-gray-900"
          for="content"
        >
          Add a new todo
        </label>
        <input
          autofocus
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          id="content"
          name="content"
          required
          type="text"
        />
      </div>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        type="submit"
      >
        Add
      </button>
    </form>
  </div>
);
