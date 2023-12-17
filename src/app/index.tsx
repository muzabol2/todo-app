import { TopBar, TodoList, TodoAdd } from "components";

const App = () => (
  <div className="max-w-8xl mx-auto p-5">
    <TopBar />
    <div className="flex flex-col items-center space-y-4 mt-4">
      <TodoList />
      <TodoAdd />
    </div>
  </div>
);

export default App;
