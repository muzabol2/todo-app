const TodoAdd = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "5fr 1fr",
      columnGap: "16px",
      paddingTop: "8px",
    }}
  >
    <input placeholder="New todo" />
    <button>Add Todo</button>
  </div>
);

export default TodoAdd;
