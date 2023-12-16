import useStore from "store";

const TodoAdd = () => {
  const { newTodo, setNewTodo, addTodo } = useStore();

  return (
    <div className="grid gap-4 pt-2 grid-cols-6">
      <input
        className="col-span-5 placeholder-gray-500"
        placeholder="New todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        className="col-span-1 bg-blue-500 text-white"
        onClick={() => addTodo()}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoAdd;
