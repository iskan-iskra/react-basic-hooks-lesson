export default function TestComponent({ label, clickHandler }) {
  return (
    <>
      <button onClick={clickHandler}>{label}</button>
    </>
  );
}
