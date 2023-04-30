import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';
import Form from '../../components/form/form.component';
import { ButtonsContainer } from './edit-todo.styles';
import axios from 'axios';
import { FiSave } from 'react-icons/fi';
import Authenticated from '../../components/authenticated/authenticated.component';

const initTodo = {
  id: '',
  title: '',
  completed: false,
};

const EditTodo = () => {
  const navigate = useNavigate();
  const { todoID } = useParams();
  const [todo, setTodo] = useState(initTodo);
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const { data } = await axios.get(`/api/todos/${todoID}`);
        setTodo(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTodo();
  }, [todoID]);

  const handleUpdateClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/todos`, { todo });
      navigate('/todos');
    } catch (error) {
      console.error(error);
    }
  };

  const handleTitleChange = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };

  return (
    <Authenticated>
      <h1>Edit Todo</h1>
      <Form>
        <FormInput name='title' onChange={handleTitleChange} value={todo.title} />
        <ButtonsContainer>
          <Link to={'/todos'}>Cancel</Link>
          <Button onClick={handleUpdateClick} buttonType={'success'} type='submit'>
            <FiSave /> Update
          </Button>
        </ButtonsContainer>
      </Form>
    </Authenticated>
  );
};

export default EditTodo;
