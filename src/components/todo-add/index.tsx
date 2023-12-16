import useStore from "store";

const TodoAdd = () => {
  const { newTodo, setNewTodo, addTodo } = useStore();

  return (
    <div className="grid grid-cols-8 gap-2 pt-2 w-full">
      <div className="col-span-1"></div>
      <input
        className="col-span-5 p-2 border border-gray-300 rounded-md"
        placeholder="New todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        className="col-span-2 bg-blue-500 text-white p-2 rounded-md"
        onClick={() => addTodo()}
      >
        Add
      </button>
    </div>
  );
};

export default TodoAdd;
