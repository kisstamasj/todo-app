import { createContext, useState } from 'react';

// as the actual value want to access
export const TodosContext = createContext({
  todos: [],
  setTodos: () => null,
});

// functional component
export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const value = { todos, setTodos };
  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>;
};
