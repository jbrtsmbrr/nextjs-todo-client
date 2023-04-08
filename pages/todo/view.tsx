import React from 'react'
import TodoLayout from '@/components/Layout/TodoLayout';
import TodoList from '@/components/Todo/TodoList/TodoList';
import { Todo } from '@/components/Todo/todo.type';
import { getAllTodos } from '@/lib/todos';

type Props = {
  todos: Todo[]
}

// export async function getServerSideProps() {

//   }
export async function getServerSideProps() {
  const todos = await getAllTodos();

  return {
    props: {
      todos: todos
    }
  }
}

const Todos = ({ todos }: Props) => {
  return (
    <TodoLayout>
      <TodoList todos={todos} />
    </TodoLayout>
  )
}

// export default Todos;