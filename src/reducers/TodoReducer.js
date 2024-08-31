export const initTodoList = () => {
  const initList = [];

  let i = 1;
  while (i < 11) {
    console.log(`work with i: ${i}`);

    initList.push({
      id: i,
      title: `test - ${i}`,
      status: false,
    });
    i++;
  }

  return initList;
};

export function todoReducer(state, action) {
  switch (action.type) {
    case "delete":
      return state.filter((el) => {
        if (el.id !== action.payload) return el;
      });
    case "changeStatus":
      return state.map((el) => {
        if (el.id === action.payload) {
          return { ...el, status: !el.status };
        } else {
          return el;
        }
      });
    case "reset":
      return [...initTodoList()];
    default:
      return [...state];
  }
}
