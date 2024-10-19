import "./styles.css";
import ToDoMainComponent from "./components/todoMain";
import ToDoListComponent from "./components/todoList";
import { queryTodo, handleTodo } from "./actions/todoAction";
import { useEffect, useState } from "react";
export default function App() {
  const [edit, setEdit] = useState(null);
  const [todoList, setTodoList] = useState([]);

  async function handleTodoquery() {
    let result = await queryTodo();
    if (result) setTodoList(result);
  }
  useEffect(() => {
    handleTodoquery();
  }, []);
  async function handleTodoSubmit(todo) {
    let tempList = [...todoList];
    if (edit) {
      tempList[edit.id] = { ...tempList[todo.id], todo };
    } else {
      tempList.push({ todo, isComplete: false });
    }
    console.log(tempList);
    await handleTodo(tempList);

    await handleTodoquery();
  }
  async function handleAction(todo, action) {
    if (action == "edit") {
      setEdit(todo);
    } else if (action == "complete") {
      let tempList = [...todoList];
      tempList[todo.id] = { ...tempList[todo.id], isComplete: todo.isComplete };
      await handleTodo(tempList);
      await handleTodoquery();
    } else {
      let tempList = [...todoList];
      tempList.splice(todo.id, 1);

      await handleTodo(tempList);
      await handleTodoquery();
    }
  }
  return (
    <div className="App">
      <ToDoMainComponent
        edit={edit}
        handleTodo={handleTodoSubmit}
        handleReset={() => setEdit(null)}
      />
      <ToDoListComponent list={todoList} handleAction={handleAction} />
    </div>
  );
}
