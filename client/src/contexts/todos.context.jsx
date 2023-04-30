import { createContext, useContext, useEffect, useState } from 'react';
import { UserContext } from './user.context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodos = async () => {
      if (!currentUser) return navigate('/');
      try {
        const { data } = await axios.get('/api/todos');
        setTodos(data);
      } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
          navigate('/');
        }
      }
    };

    fetchTodos();
  }, [currentUser, navigate]);

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>;
};
