import React from 'react'
import TodoLayout from '@/components/Layout/TodoLayout';
import TodoList from '@/components/Todo/TodoList/TodoList';
import { Todo } from '@/components/Todo/todo.type';

type Props = {
  todos: Todo[]
}

// export async function getServerSideProps() {

//   }
export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/todos");
  const result = await response.json();

  return {
    props: {
      todos: result.todos
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

export default Todos;