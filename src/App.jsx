import { useReducer, useState } from "react";
import {
  TestComponent,
  AppCounter,
  AppUser,
  AppTodo,
  AppTodoReducer,
  AppContext,
} from "./components";

import { TestContext } from "./contexts";
import { initTodoList, todoReducer } from "./reducers";

export default function App() {
  const [todoList, todoListDispatcher] = useReducer(
    todoReducer,
    undefined,
    initTodoList
  );
  return (
    <>
      <h1>hello world</h1>
      <TestComponent
        label={"test"}
        clickHandler={() => {
          console.log("test");
        }}
      />
      <hr />
      <AppCounter />
      <hr />
      <AppUser />
      <hr />
      <AppTodo />
      <hr />
      <AppTodoReducer />

      <hr />
      <TestContext.Provider value={{ todoList, todoListDispatcher }}>
        <AppContext />
        <AppContext />
        <AppContext />
      </TestContext.Provider>
    </>
  );
}
