import React, {useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

const Joi = require('joi');
const axios = require('axios');

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flag: true,
            name: "",
        }
    }

    NameChange = (event) => {
        this.setState({
            ...this.state,
            name: event.target.value,
        });
    }

    GetData = async () => {
        let name = this.state.name;
        let flag = false;
        let letters = /^[A-Za-z]+$/;
        if (name.match(letters)) {
            const {error, value} = this.validate(name);
            if (error) {
                alert(error.message);
                return flag;
            } else {
                let apiCall = await axios.get(`https://api.agify.io/?name=${name}`).then(function (response) {
                    console.log("Response from API ", response.data);
                    flag = true;
                    localStorage.setItem("UserData",JSON.stringify(response.data));
                }).catch(function (error) {
                    console.log(error);
                });
                return flag;
            }
        } else {
            alert("Not a valid name, It Should not Contain white Space");
            return flag;
        }
    }

    Check = async () => {
        let flag = await this.GetData();
        console.log("FLAG ",flag);
        if (flag) {
            this.props.history.push({pathname : '/Dashboard'});
        }else{
            console.log("ERROR");
        }
    }

    validate = (name) => {
        const schema = Joi.object({
            name: Joi.string().min(3).required(),
        });
        return schema.validate({name: name});
    }

    render() {
        return (
            <div id="Form">
                <h2>ENTER NAME HERE</h2>
                <div id="InputWidth">
                    <input type="text" className="form-control" placeholder="Name" value={this.state.name}
                           onChange={this.NameChange}/>
                </div>
                <button type="button" className="btn btn-dark mt-3" onClick={this.Check}>Submit</button>
            </div>
        );
    }

}

export default Login;