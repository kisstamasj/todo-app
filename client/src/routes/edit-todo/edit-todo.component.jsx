import { Fragment, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';
import Form from '../../components/form/form.component';
import { ButtonsContainer } from './edit-todo.styles';
import axios from 'axios';
import { UserContext } from '../../contexts/user.context';
import { TodosContext } from '../../contexts/todos.context';

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

  const handleCancelClick = (e) => {
    e.preventDefault();
    navigate('/todos');
  };

  const handleUpdateClick = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/api/todos`, { todo });
      console.log(data);
      navigate('/todos');
    } catch (error) {
      console.error(error);
    }
  };

  const handleTitleChange = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };

  return (
    <Fragment>
      {currentUser && (
        <Fragment>
          <h1>Edit Todo</h1>
          <Form>
            <FormInput name='title' onChange={handleTitleChange} value={todo.title} />
            <ButtonsContainer>
              <Button onClick={handleCancelClick}>Cancel</Button>
              <Button onClick={handleUpdateClick} buttonType={'success'} type='submit'>
                Update
              </Button>
            </ButtonsContainer>
          </Form>
        </Fragment>
      )}
    </Fragment>
  );
};

export default EditTodo;
