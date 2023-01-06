import { atom, selector } from "recoil";

const listTodoState = atom({
  key: "listTodo",
  default: JSON.parse(window.localStorage.getItem("data")),
});

export const newListState = selector({
  key: "newList",
  get: ({ get }) => {
    const list = get(listTodoState);
    return list.filter((item) => item.completed === false);
  },
  set: ({ get, set }, newValue) => {
    console.log(newValue);
    const list = get(listTodoState);
    const newTodo = {
      ...newValue,
      completed: false,
    };

    localStorage.setItem("data", JSON.stringify([newTodo, ...list]));

    set(listTodoState, [newTodo, ...list]);
  },
});

export const completedListState = selector({
  key: "completedList",
  get: ({ get }) => {
    const list = get(listTodoState);
    return list.filter((item) => item.completed === true);
  },
  set: ({ get, set }, id) => {
    const list = get(listTodoState);
    localStorage.setItem(
      "data",
      JSON.stringify(
        list.map((item) =>
          item.id === id ? { ...item, completed: true } : item
        )
      )
    );

    set(
      listTodoState,
      list.map((item) => (item.id === id ? { ...item, completed: true } : item))
    );
  },
});

export const deleteListState = selector({
  key: "deleteList",
  get: ({ get }) => {
    const list = get(listTodoState);
    return list.filter((item) => item.completed === true);
  },
  set: ({ get, set }, id) => {
    const list = get(listTodoState);
    const data = list.filter((e) => e.id !== id);

    localStorage.setItem("data", JSON.stringify(data.filter((e) => e !== {})));

    set(
      listTodoState,
      list.map((item) => (item.id === id ? {} : item))
    );
  },
});

export const editRecordState = selector({
  key: "editRecordState",
  get: ({ get }) => {
    const list = get(listTodoState);
    return list.filter((item) => item.completed === true);
  },
  set: ({ get, set }, newValue) => {
    console.log(123);
    const list = get(listTodoState);
    localStorage.setItem(
      "data",
      JSON.stringify(
        list.map((item) =>
          item.id == newValue.id ? { ...item, title: newValue.title } : item
        )
      )
    );

    set(
      listTodoState,
      list.map((item) =>
        item.id == newValue.id ? { ...item, title: newValue.title } : item
      )
    );
  },
});
