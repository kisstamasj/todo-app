import { Route, Routes } from 'react-router-dom';
import { AppContainer } from './App.styles';
import Todos from './routes/todos/todos.component';
import SignIn from './routes/sign-in/sign-in.component';
import SignUp from './routes/sign-up/sign-up.component';
import EditTodo from './routes/edit-todo/edit-todo.component';
import SignOut from './components/signout/signout.component';

const App = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path='/' element={<SignOut />}>
          <Route index={true} element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/todos' element={<Todos />} />
          <Route path='/todos/edit/:todoID' element={<EditTodo />} />
        </Route>
      </Routes>
    </AppContainer>
  );
};

export default App;
