import { TopBar, TodoList, TodoAdd } from "components";

const App = () => (
  <div className="max-w-6xl mx-auto p-5">
    <TopBar />
    <TodoList />
    <TodoAdd />
  </div>
);

export default App;
