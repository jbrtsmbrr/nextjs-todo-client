export const getAllTodos = async () => {
  const response = await fetch("http://localhost:4000/todos");
  const result = await response.json();

  return result.todos;
}