import { create } from "zustand";

import { Todo } from "types";

export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => (todo.id === id ? { ...todo, text } : todo));

export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo));

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

export const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

type Store = {
  todos: Todo[];
  newTodo: string;
  addTodo: () => void;
  setNewTodo: (text: string) => void;
  update: (id: number, text: string) => void;
  toggle: (id: number) => void;
  remove: (id: number) => void;
};

const useStore = create<Store>((set) => ({
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
}));

export default useStore;
