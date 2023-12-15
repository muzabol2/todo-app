const TodoListItems = () => (
  <>
    {[].map((todo: { id: number; text: string }) => (
      <div style={{ display: "flex", paddingTop: "8px" }} key={todo.id}>
        <input type="checkbox" />
        <input style={{ margin: "0 8px" }} value={todo.text} />
        <button>Delete</button>
      </div>
    ))}
  </>
);

const TodoList = () => (
  <>
    <h1>Todo List</h1>
    <TodoListItems />
  </>
);

export default TodoList;
