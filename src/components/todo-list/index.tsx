import { useLanguageStore, useTodoStore } from "store";

import TodoItem from "./todo-item";

const TodoList = () => {
  const { todos, toggle, update, remove } = useTodoStore();
  const { dictionary: D } = useLanguageStore();

  return (
    <>
      <h1 className="text-2xl font-bold text-black dark:text-white">
        {D.TODO_LIST}
      </h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteButton={D.DELETE}
          toggle={toggle}
          remove={remove}
          update={update}
        />
      ))}
    </>
  );
};

export default TodoList;
