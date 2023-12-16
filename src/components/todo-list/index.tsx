import useStore from "store";

import TodoItem from "./todo-item";

const TodoList = () => {
  const { todos, toggle, update, remove } = useStore();

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggle={toggle}
          remove={remove}
          update={update}
        />
      ))}
    </>
  );
};

export default TodoList;
