import React from 'react';
import { BrowserRouter as Router , Route } from "react-router-dom";
import ThreeComp from './threeComp';
import CardForm from './cardForm';

export default class AppRouter extends React.Component {
    render() {
        return(
            <Router >
                <Route exact path="/" component={ThreeComp} />
                <Route path="/cardform" component={CardForm} />
            </Router>
        );
    }
}