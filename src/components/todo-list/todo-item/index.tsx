import { Todo } from "types";

type Props = {
  todo: Todo;
};

const TodoItem = ({ todo }: Props) => (
  <div className="flex p-2">
    <input type="checkbox" className="mr-2" />
    <input className="mr-2" value={todo.text} />
    <button className="bg-red-500 text-white px-2 py-1">Delete</button>
  </div>
);

export default TodoItem;