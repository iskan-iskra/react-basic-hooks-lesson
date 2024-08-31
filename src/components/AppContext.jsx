import { useContext } from "react";
import { TestContext } from "../contexts";

export default function AppContext() {
  const { todoList, todoListDispatcher } = useContext(TestContext);
  const changeTodoStatusHandler = (reqId) =>
    todoListDispatcher({ type: "changeStatus", payload: reqId });

  const deleteTodoHandler = (reqId) =>
    todoListDispatcher({ type: "delete", payload: reqId });

  const resetHandler = () => todoListDispatcher({ type: "reset" });

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
