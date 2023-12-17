import { Todo } from "types";

type Props = {
  todo: Todo;
  deleteButton: string;
  toggle: (id: number) => void;
  remove: (id: number) => void;
  update: (id: number, text: string) => void;
};

const TodoItem = ({ todo, deleteButton, toggle, remove, update }: Props) => (
  <div className="grid grid-cols-8 gap-2 pt-2 w-full">
    <div className="col-span-1 flex items-center justify-center">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-600"
        checked={todo.done}
        onChange={() => toggle(todo.id)}
      />
    </div>
    <input
      className="col-span-5 p-2 border border-gray-300 rounded-md"
      value={todo.text}
      onChange={(e) => update(todo.id, e.target.value)}
    />
    <button
      className="col-span-2 bg-red-500 text-white p-2 rounded-md"
      onClick={() => remove(todo.id)}
    >
      {deleteButton}
    </button>
  </div>
);

export default TodoItem;
