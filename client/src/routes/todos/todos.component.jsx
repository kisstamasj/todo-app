import { Fragment, useContext, useEffect } from 'react';
import NewTodoForm from '../../components/new-todo-form/new-todo-form.component';
import Todo from '../../components/todo/todo.component';
import { TodosContainer } from './todos.styles';
import { TodosContext } from '../../contexts/todos.context';
import axios from 'axios';
import { UserContext } from '../../contexts/user.context';
import { useNavigate } from 'react-router-dom';

const Todos = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodos = async () => {
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
  }, []);

  useEffect(() => {
    if (!currentUser) {
      navigate('/');
    }
  }, [currentUser]);

  return (
    <Fragment>
      {currentUser && (
        <Fragment>
          <h2>Todos</h2>
          <NewTodoForm />
          {!todos.length ? (
            <span>There are no todos</span>
          ) : (
            <TodosContainer>
              {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
            </TodosContainer>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Todos;
