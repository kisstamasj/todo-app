import { Fragment, useContext } from 'react';
import NewTodoForm from '../../components/new-todo-form/new-todo-form.component';
import Todo from '../../components/todo/todo.component';
import { TodosContainer } from './todos.styles';
import { TodosContext } from '../../contexts/todos.context';

const Todos = () => {
  const { todos } = useContext(TodosContext);
  return (
    <Fragment>
      <h1>Todos</h1>
      <NewTodoForm />
      {!todos.length ? (
        <span>There are no todos</span>
      ) : (
        <TodosContainer>
          {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
        </TodosContainer>
      )}
    </Fragment>
  );
};

export default Todos;
