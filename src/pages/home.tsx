import { Core } from "@/layouts/core";
import { CreateTodo } from "@/components/CreateTodo";
import { H1 } from "@/components/H1";
import { ListTodos } from "@/components/ListTodos";

import type { Todo } from "@/types/Todo";

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
