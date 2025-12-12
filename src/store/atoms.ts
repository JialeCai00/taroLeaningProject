import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// 基础计数器
export const countAtom = atom(0);

// 派生状态（计算属性）
export const doubleCountAtom = atom((get) => get(countAtom) * 2);

// 异步状态
export const asyncCountAtom = atom(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 42;
});

// 本地存储状态（持久化）
export const usernameAtom = atomWithStorage("username", "访客");

// 对象状态
export const userAtom = atom({
  name: "张三",
  age: 25,
  hobbies: ["阅读", "编程"],
});

// 复杂状态 - 待办事项列表
export const todosAtom = atom([
  { id: 1, text: "学习 Taro", completed: true },
  { id: 2, text: "学习 Jotai", completed: false },
  { id: 3, text: "开发小程序", completed: false },
]);

// 添加新待办事项
export const addTodoAtom = atom(null, (get, set, newTodo: string) => {
  const todos = get(todosAtom);
  const newId = Math.max(...todos.map((todo) => todo.id)) + 1;
  set(todosAtom, [...todos, { id: newId, text: newTodo, completed: false }]);
});

// 切换待办事项状态
export const toggleTodoAtom = atom(null, (get, set, id: number) => {
  const todos = get(todosAtom);
  set(
    todosAtom,
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
});

// 删除待办事项
export const deleteTodoAtom = atom(null, (get, set, id: number) => {
  const todos = get(todosAtom);
  set(
    todosAtom,
    todos.filter((todo) => todo.id !== id)
  );
});
