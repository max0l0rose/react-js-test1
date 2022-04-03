import React, {useEffect, useRef} from "react";
import axios from 'axios';

export default class TestCompClass extends React.Component {

    timer = setInterval(() => {
        this.addItem();
    }, 3000);

    constructor() {
        super();
        this.state = {
            list: []
        }

        this.messagesEndRef = React.createRef();

        this.createList();

        // useEffect(() => {
        //     console.log('use effect timer');
        //     //setVal(val+1);
        //     const timer = setInterval(() => {
        //         this.add1Item();
        //     }, 1000);
        //     return () => clearInterval(interval);
        // }, []);

    }

    createList() {
        //console.log('createList ');
        for (let i = 0; i < 10 ; i++) {
            this.state.list.push({key:i, name: 'Item ' + i});
        }
        // let newList = this.state.list;
        // this.setState({...this.state, list : newList});
    }

    scrollToBottom() {
        this.messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        })
    }

    addItem() {
        this.state.list.push({key:0, name: 'Item ' + 0});
        //let newList = this.state.list.concat({key:0, name: 'Item ' + 0});

        this.scrollToBottom();

        this.forceUpdate();

//        this.setState({...this.state, list : this.state.list});
        console.log('addItem: ' + this.state.list.length);

        //scrollToMyRef();
        //setVal(val+1);
    }

    // componentDidMount() {
    //     console.log("componentDidMount");
    //     //this.createList = this.createList.bind(this);
    //     //this.createList();
    // }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map((q, i) => <li key={i}>{q.name}</li>)}
                </ul>
                <div ref={this.messagesEndRef} />
            </div>
        )
    }

}