import React from "react";
import axios from 'axios';

export default class MyListComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            list: [{key:1, name: "Zzzzzz"}]
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/list1").then(res => {
            //console.log("Got: ");
            console.log(res);
            this.setState({list : res.data})
        })

        for (let i = 0; i < 100 ; i++) {
            this.state.list.push({key:i, name: 'Qqqq ' + i});
        }
        this.setState({list : this.state.list})

        console.log(this.state.list);
    }

    render() {
        return (
            <ul>
                {this.state.list.map(q => <li key={q.key}>{q.name}</li>)}
            </ul>
        )
    }

}