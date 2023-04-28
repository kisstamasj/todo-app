import { useContext, useState } from 'react';
import { ControlsContainer, Mark, Title, TodoContainer } from './todo.styles';
import { BsCircle, BsCheck2Circle, BsFillTrashFill } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { TodosContext } from '../../contexts/todos.context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Todo = ({ todo }) => {
  const { id, title, completed } = todo;
  const [todoCompleted, setTodoCompleted] = useState(completed);
  const { todos, setTodos } = useContext(TodosContext);
  const navigate = useNavigate();

  const onTodoClickHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put('/api/todos', {
        todo: { id, title, completed: !completed },
      });
      setTodoCompleted((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  const onDeleteClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const { data } = await axios.delete(`/api/todos/${id}`);
      setTodos(todos.filter((t) => t.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const onEditClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/todos/edit/${id}`);
  };

  return (
    <TodoContainer onClick={onTodoClickHandler} className={todoCompleted ? 'completed' : ''}>
      <Mark>{todoCompleted ? <BsCheck2Circle /> : <BsCircle />}</Mark>
      <Title>{title}</Title>
      <ControlsContainer>
        <BiEdit onClick={onEditClick} />
        <BsFillTrashFill onClick={onDeleteClick} />
      </ControlsContainer>
    </TodoContainer>
  );
};

export default Todo;
