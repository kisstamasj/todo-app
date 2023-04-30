import { createContext, useContext, useEffect, useState } from 'react';
import { UserContext } from './user.context';
import axios from 'axios';

// as the actual value want to access
export const TodosContext = createContext({
  todos: [],
  setTodos: () => null,
});

// functional component
export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const { currentUser } = useContext(UserContext);
  const value = { todos, setTodos };

  useEffect(() => {
    const fetchTodos = async () => {
      if (!currentUser) return;
      try {
        const { data } = await axios.get('/api/todos');
        setTodos(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTodos();
  }, [currentUser]);

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>;
};
