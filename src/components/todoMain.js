import { useEffect, useState } from "react";

function ToDoMainComponent({ edit, handleTodo, handleReset }) {
  const [todo, setTodo] = useState("");
  useEffect(() => {
    if (edit) {
      setTodo(edit.todo);
    } else {
      setTodo("");
    }
  }, [edit]);
  return (
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Type Todo here"
        aria-label="Recipient's username"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        aria-describedby="button-addon2"
      />
      <button
        class="btn btn-outline-primary"
        type="button"
        id="button-addon2"
        onClick={() => handleTodo(todo)}
      >
        {!edit ? "Add Todo" : "Update Todo"}
      </button>
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}

export default ToDoMainComponent;
