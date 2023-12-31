import { create } from "zustand";

import { addTodo, removeTodo, toggleTodo, updateTodo } from "./actions";

import { Todo } from "types";

export type Store = {
  todos: Todo[];
  newTodo: string;
  addTodo: () => void;
  setNewTodo: (text: string) => void;
  update: (id: number, text: string) => void;
  toggle: (id: number) => void;
  remove: (id: number) => void;
  load: (todos: Todo[]) => void;
};

const useTodoStore = create<Store>((set) => ({
  todos: [],
  newTodo: "",
  addTodo: () =>
    set((state) => ({
      todos: addTodo(state.todos, state.newTodo),
      newTodo: "",
    })),
  setNewTodo: (text) => set({ newTodo: text }),
  update: (id, text) =>
    set((state) => ({ todos: updateTodo(state.todos, id, text) })),
  toggle: (id) => set((state) => ({ todos: toggleTodo(state.todos, id) })),
  remove: (id) => set((state) => ({ todos: removeTodo(state.todos, id) })),
  load: (todos) => set({ todos }),
}));

export default useTodoStore;
