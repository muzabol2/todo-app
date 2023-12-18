import { useLanguageStore, useTodoStore } from "store";

import { paths } from "consts";

const LoadButton = () => {
  const store = useTodoStore();
  const { dictionary: D } = useLanguageStore();

  const onLoad = () => {
    fetch(paths.todos)
      .then((res) => res.json())
      .then((data) => store.load(data));
  };

  return (
    <button
      className="bg-blue-500 dark:bg-blue-400 text-white p-2 rounded-md"
      onClick={onLoad}
    >
      {D.LOAD}
    </button>
  );
};

export default LoadButton;
