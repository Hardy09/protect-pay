import React, {useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flag: true,
            data: {},
            value : "Name",
        }
    }

    componentDidMount() {
        let data = localStorage.getItem("UserData");
        this.setState({
            ...this.state,
            data: JSON.parse(data),
        });
    }

    Check = () => {
        let data = this.state.data;
        let val = this.state.value;
        // console.log("jcjcnewcnewcnewo");
        // console.log(val);
        if (val === "Name") {
            return (
                <h2>Name : {data.name}</h2>
            );
        } else if (val.toString() === "Age") {
            console.log("AGe");
            return (
                <h2>Age : {data.age}</h2>
            );
        } else if (val === "Count") {
            return (
                <h2>Count : {data.count}</h2>
            );
        } else if (val === "Desc") {
            return (
                <h2>Description : Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer
                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>
            );
        }
    }

    NavItemClick = (value) => {
        console.log("NavItemClick ",value);
        this.setState({
            ...this.state,
            value : value,
        });
    }


    render() {
        return (
            <div>
                <h1>DASHBOARD</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <div>
                                <ul className="list-group">
                                    <li className="list-group-item" onClick={() =>{this.NavItemClick("Name")}}>Name</li>
                                    <li className="list-group-item" onClick={() =>{this.NavItemClick("Age")}}>Age</li>
                                    <li className="list-group-item" onClick={() =>{this.NavItemClick("Count")}}>Count</li>
                                    <li className="list-group-item"
                                        onClick={() =>{this.NavItemClick("Desc")}}>Description
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-8">
                            {this.Check()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Dashboard;