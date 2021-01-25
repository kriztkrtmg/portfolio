import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Home/HomePage';
import YouTubeHome from './YouTubePage/YouTubeHome';

class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <HomePage />
                        </Route>
                        <Route path="/weather" exact>
                            <HomePage />
                        </Route>
                        <Route path="/youtube" exact>
                            <YouTubeHome />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Routes;
