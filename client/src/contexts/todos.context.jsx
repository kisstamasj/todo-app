import { createContext, useState } from 'react';

const initTodos = [
  { id: 1, title: 'First todo', completed: false },
  { id: 2, title: 'Second todo', completed: false },
  { id: 3, title: 'Thirt todo', completed: true },
  { id: 4, title: 'Fourt todo', completed: false },
];

// as the actual value want to access
export const TodosContext = createContext({
  todos: [],
  setTodos: () => null,
});

// functional component
export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState(initTodos);
  const value = { todos, setTodos };
  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>;
};
