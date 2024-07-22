import { Core } from "@/layouts/core";
import { ListTodos } from "@/components/ListTodos";
import { H1 } from "@/components/H1";

import type { Todo } from "@/types/Todo";
import { CreateTodo } from "@/components/CreateTodo";

type HomePageProps = {
  todos: Todo[];
};

export const HomePage = ({ todos }: HomePageProps) => (
  <Core>
    <H1 content="Your todos" />
    <CreateTodo />
    <ListTodos todos={todos} />
  </Core>
);
