import { Todo } from "types";

import TodoItem from "./todo-item";


const TodoList = () => {
  const todos: Todo[] = [{id: 1, text: "Todo 1", done: false}, {id: 2, text: "Todo 2", done: true}];

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;