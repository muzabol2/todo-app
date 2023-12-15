import { TopBar, TodoList, TodoAdd } from "components";

const App = () => (
  <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
    <h1 className="text-4xl font-bold underline">Hello world!</h1>
    <TopBar />
    <TodoList />
    <TodoAdd />
  </div>
);

export default App;
