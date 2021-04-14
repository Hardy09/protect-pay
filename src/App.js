import React, {useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Login from './Login.js';
import Dashboard from './Dashboard.js';

const Joi = require('joi');
const axios = require('axios');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flag: true,
        }
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/Dashboard" component={Dashboard}/>
                </Switch>
            </Router>
        );
    }

}

export default App;
