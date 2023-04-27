import { useContext } from 'react';
import NewTodoForm from '../../components/new-todo-form/new-todo-form.component';
import Todo from '../../components/todo/todo.component';
import { TodosContainer } from './todos.styles';
import { TodosContext } from '../../contexts/todos.context';

const Todos = () => {
  const { todos } = useContext(TodosContext);
  return (
    <>
      <h1>Todos</h1>
      <NewTodoForm />
      <TodosContainer>
        {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </TodosContainer>
    </>
  );
};

export default Todos;
