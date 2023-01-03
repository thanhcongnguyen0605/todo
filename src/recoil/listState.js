import { atom, selector } from "recoil";

const defaultData = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officgit config --global user.emailia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 10,
    id: 200,
    title: "ipsam aperiam voluptates qui",
    completed: false,
  },
];

const listTodoState = atom({
  key: "listTodo",
  default: defaultData,
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

    set(
      listTodoState,
      list.map((item) =>
        item.id == newValue.id ? { ...item, title: newValue.title } : item
      )
    );
  },
});
