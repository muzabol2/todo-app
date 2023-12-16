const TodoAdd = () => (
  <div className="grid gap-4 pt-2 grid-cols-6">
    <input className="col-span-5 placeholder-gray-500" placeholder="New todo" />
    <button className="col-span-1 bg-blue-500 text-white">Add Todo</button>
  </div>
);

export default TodoAdd;
