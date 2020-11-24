import React from 'react';
import {    
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Home from './Home/Home';



import Register from './Register/Register';
import ViewsComics from './ViewsComics/ViewsComics';

export default function RouterMain(){
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home></Home>
                </Route>
              
                {/* <Route path="/sign-up" exact>
                    <Register></Register>
                </Route>
                <Route path="/detail" exact>
                    <DetailedStory></DetailedStory>
                </Route>
                <Route path="/seen" exact>
                    <ViewsComics></ViewsComics>
                </Route> */}
            </Switch>
        </Router>
    )
}
