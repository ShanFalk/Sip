import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from './components/SignupFormPage';
import { restoreUser } from './store/session';
import { useDispatch } from 'react-redux';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import BusinessFormPage from './components/BusinessFormPage';

function App() {

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect( () => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
    <Switch>
      <Route exact path='/'>
        <LandingPage />
      </Route>
      <Route path='/new-biz'>
          <BusinessFormPage />
      </Route>
      {isLoaded && (
        <>
        <Route path='/login'>
          <LoginFormPage />
        </Route>
        <Route path='/signup'>
          <SignupFormPage />
        </Route>
      </>
      )}
    </Switch>
    <Footer />
    </>
  );
}

export default App;
