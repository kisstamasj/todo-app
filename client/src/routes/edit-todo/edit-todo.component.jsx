import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';
import Form from '../../components/form/form.component';
import { ButtonsContainer } from './edit-todo.styles';
import axios from 'axios';
import { FiSave } from 'react-icons/fi';
import Authenticated from '../../components/authenticated/authenticated.component';
import { UserContext } from '../../contexts/user.context';

const initTodo = {
  id: '',
  title: '',
  completed: false,
};

const EditTodo = () => {
  const navigate = useNavigate();
  const { todoID } = useParams();
  const [todo, setTodo] = useState(initTodo);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (!currentUser) navigate('/');
  }, [currentUser, navigate]);

  useEffect(() => {
    const fetchTodo = async () => {
      if (!currentUser) return;
      try {
        const { data } = await axios.get(`/api/todos/${todoID}`);
        setTodo(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTodo();
  }, [todoID, currentUser]);

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
