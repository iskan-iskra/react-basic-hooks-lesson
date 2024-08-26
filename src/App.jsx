import { TestComponent } from "./components";

export default function App() {
  return (
    <>
      <h1>hello world</h1>
      <TestComponent
        label={"test"}
        clickHandler={() => {
          console.log("test");
        }}
      />
    </>
  );
}
