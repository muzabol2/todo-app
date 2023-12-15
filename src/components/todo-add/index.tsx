import { button, container, input } from "./styles";

const TodoAdd = () => (
  <div className={container}>
    <input className={input} placeholder="New todo" />
    <button className={button}>Add Todo</button>
  </div>
);

export default TodoAdd;
