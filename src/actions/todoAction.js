const todoConstant = "todoList";

export async function handleTodo(data) {
  await localStorage.setItem(todoConstant, JSON.stringify(data));
}

export async function queryTodo(data) {
  const result = await localStorage.getItem(todoConstant);
  return result ? JSON.parse(result) : [];
}
