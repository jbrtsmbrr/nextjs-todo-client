import React from 'react'
import styles from "./todo_list.module.css";
import { Todo } from '../todo.type';

type Props = {
  todos: Todo[]
}

const TodoList = ({ todos }: Props) => {
  return (
    <div className={styles['todo-container']}>
      {todos.map((todo, index) => <div key={`todo-${index}-${todo.description}`} className={styles[`todo-item`]}>
        <label htmlFor="chkbx-1">{todo.description}</label>
        <input type="checkbox" id="chkbx-1" checked={todo.completed} />
      </div>)}
    </div>
  )
}

export default TodoList