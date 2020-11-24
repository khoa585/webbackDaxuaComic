import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DetailedStory from './DetailedStory/DetailedStory';
import Register from './Register/Register';
import ViewsComics from './ViewsComics/ViewsComics';
import Login from './Login/Login';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/detail" >
          <DetailedStory></DetailedStory>
        </Route>
        <Route path="/login" >
          <Login></Login>
        </Route>
        <Route path="/seen" >
          <ViewsComics></ViewsComics>
        </Route>
        <Route path="/sign-up">
          <Register></Register>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
