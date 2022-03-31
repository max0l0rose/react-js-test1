import React from "react";
import axios from 'axios';

export default class MyListComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/list1").then(res => {
            //console.log("Got: ");
            console.log(res);
            this.setState({list : res.data})
        })
    }

    render() {
        return (
            <ul>
                {this.state.list.map(q => <li key={q.key}>{q.name}</li>)}
            </ul>
        )
    }

}