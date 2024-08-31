import { useState } from "react";

const initTodoList = () => {
  const initList = [];

  let i = 1;
  while (i < 11) {
    initList.push({
      id: i,
      title: `test - ${i}`,
      status: false,
    });
    i++;
  }

  return initList;
};

export default function AppTodo() {
  const [todoList, setTodoList] = useState(initTodoList);

  const changeTodoStatusHandler = (reqId) =>
    setTodoList((val) =>
      val.map((el) => {
        if (el.id === reqId) {
          return { ...el, status: !el.status };
        } else {
          return el;
        }
      })
    );

  const deleteTodoHandler = (reqId) =>
    setTodoList((val) =>
      val.filter((el) => {
        if (el.id !== reqId) return el;
      })
    );

  const resetHandler = () => setTodoList(initTodoList);

  return (
    <>
      {!!todoList.length && (
        <ul>
          {todoList.map((el) => (
            <li key={el.id}>
              <span>{el.title}: </span>
              <span>{el.status ? "done" : "need to do"} </span>
              <button onClick={() => changeTodoStatusHandler(el.id)}>
                изменить статус
              </button>
              <button onClick={() => deleteTodoHandler(el.id)}>удалить</button>
            </li>
          ))}
        </ul>
      )}

      {!todoList.length && <button onClick={resetHandler}>reset list</button>}
    </>
  );
}
