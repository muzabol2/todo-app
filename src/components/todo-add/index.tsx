import { useLanguageStore, useTodoStore } from "store";

const TodoAdd = () => {
  const { newTodo, setNewTodo, addTodo } = useTodoStore();
  const { dictionary: D } = useLanguageStore();

  return (
    <div className="grid grid-cols-8 gap-2 pt-2 w-full">
      <div className="col-span-1" />
      <input
        className="col-span-5 p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
        placeholder={D.NEW_TODO}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        className="col-span-2 bg-blue-500 dark:bg-blue-400 text-white p-2 rounded-md"
        onClick={() => addTodo()}
      >
        {D.ADD_TODO}
      </button>
    </div>
  );
};

export default TodoAdd;
