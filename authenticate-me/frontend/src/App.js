import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from './components/SignupFormPage';
import { restoreUser } from './store/session';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect( () => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
    <Switch>
      <Route path='/login'>
        <LoginFormPage />
      </Route>
      <Route path='/signup'>
        <SignupFormPage />
      </Route>
    </Switch>
    </>
  );
}

export default App;
