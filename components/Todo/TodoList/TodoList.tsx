import React, { useState } from 'react'
import styles from "./todo_list.module.css";
import { Todo } from '../todo.type';


type TodoItemProps = {
  todo: Todo,
  onDelete: (item: Todo) => void
}
const TodoItem = ({ todo, onDelete }: TodoItemProps) => {
  const [state, setState] = useState(() => todo);

  const handleChange = async () => {
    const response = await fetch('http://localhost:4000/todos/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
    })
    const data = await response.json();
    setState(data.updatedTodo);
  }

  return (
    <React.Fragment>
      {state.completed && <p className={styles.remove} onClick={() => onDelete(todo)}>x</p>}
      <label htmlFor={`chkbx-${todo._id}`} className={`${styles.label} ${state.completed ? styles.grey : ''}`}>{state.description}</label>
      <input type="checkbox" id={`chkbx-${todo._id}`} className={styles.input} checked={state.completed} onChange={handleChange} />
    </React.Fragment>
  )
}


type TodoListProps = {
  todos: Todo[]
}
const TodoList = ({ todos }: TodoListProps) => {

  const [currentTodos, setCurrentTodos] = useState<Todo[]>(() => todos);

  const onDelete = async (todo: Todo) => {
    const response = await fetch("http://localhost:4000/todos/delete", {
      method: "POST",
      body: JSON.stringify({ todo }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();

    if (data?.deleted) {
      setCurrentTodos(prev => prev.filter(t => t._id !== todo._id))
    }
  }

  return (
    <div className={styles['todo-container']}>
      {currentTodos.map((todo, index) =>
        <div key={`todo-${index}-${todo.description}`} className={styles[`todo-item`]}>
          <TodoItem todo={todo} onDelete={onDelete} />
        </div>)}
    </div>
  )
}

export default TodoList