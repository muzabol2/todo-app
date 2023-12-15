import { TopBar, TodoList, TodoAdd } from "components";

const App = () => (
  <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
    <TopBar />
    <TodoList />
    <TodoAdd />
  </div>
);

export default App;
