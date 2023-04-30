import { Fragment, useContext } from 'react';
import NewTodoForm from '../../components/new-todo-form/new-todo-form.component';
import Todo from '../../components/todo/todo.component';
import { TodosContainer } from './todos.styles';
import { TodosContext } from '../../contexts/todos.context';

import Authenticated from '../../components/authenticated/authenticated.component';

const Todos = () => {
  const { todos } = useContext(TodosContext);

  return (
    <Authenticated>
      <h2>Create new todo</h2>
      <NewTodoForm />
      {!todos.length ? (
        <span>There are no todos</span>
      ) : (
        <Fragment>
          <h2>Todos</h2>
          <TodosContainer>
            {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
          </TodosContainer>
        </Fragment>
      )}
    </Authenticated>
  );
};

export default Todos;
