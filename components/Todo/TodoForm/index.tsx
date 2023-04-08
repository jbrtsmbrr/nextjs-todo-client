import React, { useState } from 'react'
import styles from "./styles.module.css";

type Status = 'completed' | 'pending'

const TodoForm = () => {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<Status>("pending");
  const [error, setError] = useState(false);
  const onSubmit = async (event: any) => {
    event.preventDefault();

    if (description === "") {
      setError(true);
      return;
    };

    const response = await fetch('http://localhost:4000/todos/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description,
        status,
      })
    });
    const data = await response.json();
    if (data?.todo) {
      alert(description + " added successfully.")
      setDescription("");
      setStatus('pending');
      setError(false);
    } else {
      setError(true);
    }
  }

  const onDescriptionChanged = (e: any) => {
    setError(e.target.value === "")
    setDescription(e.target.value)
  }

  const onStatusChanged = (e: any) => {
    setStatus(e.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className={styles['form-container']}>
        <div className={styles['input-wrapper']}>
          <label htmlFor="description" className={styles.label}>Description</label>
          <input
            type="text"
            id="description"
            className={`${styles.input} ${error ? styles.error : ''}`}
            placeholder='Enter Description'
            value={description}
            onChange={onDescriptionChanged}
          />
        </div>
        <div className={styles['input-wrapper']}>
          <label htmlFor="completed" className={styles.label}>Status</label>
          <select className={styles.select} value={status} onChange={onStatusChanged}>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button type="submit" className={styles['save-button']}>Save</button>
      </div>
    </form>
  )
}

export default TodoForm