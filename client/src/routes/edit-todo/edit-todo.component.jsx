import { useEffect, useState } from 'react';
import { EditTodoContainer } from './edit-todo.styles';
import { useParams } from 'react-router-dom';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';

const EditTodo = () => {
  const { todoID } = useParams();
  const [todo, setTodo] = useState({});
  useEffect(() => {
    setTodo({ id: 2, title: 'Some todo', completed: false });
  }, [todoID]);
  return (
    <EditTodoContainer>
      <h1>Edit Todo</h1>
      <form>
        <FormInput placeholder={todo.title} />
        <Button buttonType={'primary'} type='submit'>
          Update
        </Button>
      </form>
    </EditTodoContainer>
  );
};

export default EditTodo;
