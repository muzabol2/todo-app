import { Todo } from "types";

type Props = {
  todo: Todo;
  toggle: (id: number) => void;
  remove: (id: number) => void;
  update: (id: number, text: string) => void;
};

const TodoItem = ({ todo, toggle, remove, update }: Props) => (
  <div className="flex p-2">
    <input
      type="checkbox"
      className="mr-2"
      checked={todo.done}
      onChange={() => toggle(todo.id)}
    />
    <input
      className="mr-2"
      value={todo.text}
      onChange={(e) => update(todo.id, e.target.value)}
    />
    <button
      className="bg-red-500 text-white px-2 py-1"
      onClick={() => remove(todo.id)}
    >
      Delete
    </button>
  </div>
);

export default TodoItem;
