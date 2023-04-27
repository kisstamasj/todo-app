import { useContext, useState } from 'react';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import { NewFormContainer } from './new-todo-form.styles';
import { TodosContext } from '../../contexts/todos.context';
import { v4 as uuid } from 'uuid';
import Form from '../form/form.component';

const NewTodoForm = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('most');
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8);
    setTodos([...todos, { id: small_id, title: title, completed: false }]);
    setTitle('');
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
