function ToDoListComponent({ list, handleAction }) {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Todo</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.todo}</td>
                <td>{item.isComplete ? "Completed" : "Incomplete"}</td>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      handleAction(
                        { id: index, isComplete: !item.isComplete },
                        "complete"
                      )
                    }
                    class="btn btn-primary"
                  >
                    Mark as {item.isComplete ? "Incomplete" : "Complete"}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAction({ ...item, id: index }, "edit")}
                    class="btn btn-secondary"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAction({ id: index }, "delete")}
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ToDoListComponent;
