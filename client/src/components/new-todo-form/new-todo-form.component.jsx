import { useContext, useState } from 'react';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import { NewFormContainer } from './new-todo-form.styles';
import { TodosContext } from '../../contexts/todos.context';
import Form from '../form/form.component';
import axios from 'axios';

const NewTodoForm = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/todos', { title });
      setTodos([...todos, { id: data.id, title: data.title, completed: data.completed }]);
      setTitle('');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <NewFormContainer>
      <Form onSubmit={handleSubmit}>
        <FormInput
          required
          placeholder='New todo...'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button buttonType='success' type='submit'>
          Save
        </Button>
      </Form>
    </NewFormContainer>
  );
};

export default NewTodoForm;
