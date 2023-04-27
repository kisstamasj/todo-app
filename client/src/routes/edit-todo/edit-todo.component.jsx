import { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';
import Form from '../../components/form/form.component';
import { ButtonsContainer } from './edit-todo.styles';

const EditTodo = () => {
  const navigate = useNavigate();
  const { todoID } = useParams();
  const [todo, setTodo] = useState({});
  useEffect(() => {
    setTodo({ id: 2, title: 'Some todo', completed: false });
  }, [todoID]);

  const handleCancelClick = (e) => {
    e.preventDefault();
    navigate('/todos');
  };

  return (
    <Fragment>
      <h1>Edit Todo</h1>
      <Form>
        <FormInput placeholder={todo.title} />
        <ButtonsContainer>
          <Button onClick={handleCancelClick}>Cancel</Button>
          <Button buttonType={'success'} type='submit'>
            Update
          </Button>
        </ButtonsContainer>
      </Form>
    </Fragment>
  );
};

export default EditTodo;
