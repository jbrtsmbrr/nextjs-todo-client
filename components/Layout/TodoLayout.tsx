import React from 'react';
import styles from "./todoLayout.module.css";
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })


type ViewType = 'view' | 'add'

type Props = {
  children: React.ReactNode,
  view?: ViewType,
}

const TodoLayout = ({ children, view = 'view' }: Props) => {

  const current = useRouter();

  console.log(current)

  return (
    <div className={`${styles.wrapper} ${inter.className}`}>
      <div className={styles.header}>
        <h3>Todo</h3>
      </div>
      {children}
      {/* {view === 'view'
        ? <TodoList todos={todos} />
        : <TodoForm />
      } */}
      <Link href={view === 'view' ? 'add' : 'view'}>
        <button className={styles['todo-btn']} type='button'>
          <span style={{
            color: view === 'add' ? 'red' : 'inherit',
            rotate: view === 'add' ? '45deg' : '0deg'
          }}>+</span>
        </button>
      </Link>

    </div>
  )
}

export default TodoLayout