import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Board } from '../components/Board';
import { Formularios } from '../components/Login';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch> 
                    <Route exact path="/login" component={ Formularios } />
                    <Route exact path="/board" component={ Board } />
                    <Redirect to="/login" />
                </Switch>
            </div>
        </Router>
    )
}
