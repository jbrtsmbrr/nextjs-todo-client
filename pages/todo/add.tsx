import TodoLayout from '@/components/Layout/TodoLayout'
import TodoForm from '@/components/Todo/TodoForm'
import React from 'react'

const AddTodo = () => {
  return (
    <TodoLayout view='add'>
      <TodoForm />
    </TodoLayout>
  )
}

export default AddTodo