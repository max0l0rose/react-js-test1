import React from "react";
import axios from 'axios';
import {useRef, useEffect, useCallback, useState, useMemo} from "react";

export function MyListComponent() {

    //const pRef = useRef();
    const [list, setList] = useState([]);
    const [val, setVal] = useState(list.length);
    const messagesEndRef = useRef(null);
    const testRef = useRef();

    // const scrollToMyRef = () => {
    //     const scroll =
    //         testRef.current.scrollHeight -
    //         testRef.current.clientHeight;
    //     console.log('scroll: ' + testRef.current.scrollHeight + " " + testRef.current.clientHeight);
    //     testRef.current.scrollTo(0, scroll);
    // };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        })
    }

    function createList() {
        //console.log('createList ');
        for (let i = 0; i < 1000 ; i++) {
            list.push({key:i, name: 'Item ' + i});
        }
        //setList({list : this.state.list})
    }

    function addItem(event) {
        list.push({key:0, name: 'Item ' + 0});
        console.log('addItem ' + list.length);
        scrollToBottom();
        //scrollToMyRef();
        setVal(val+1);
    }

    // const onPureChange = useCallback(() => {
    //     console.log('onPureChange ' + val);
    //     doSomething(val);
    // }, [100]);

    const onListChange = useMemo(() => {
        console.log('useMemo ' + list.length);
        createList();
    }, []);

    // useEffect(() => {
    //     console.log('use effect');
    //     //pRef.current.value = 'ref new value';
    //     //setVal(val+1);
    // }, [list.length])


    useEffect(() => {
        console.log('use effect timer');
        //setVal(val+1);
        const interval = setInterval(() => {
            addItem();
        }, 1000);
        return () => clearInterval(interval);
    }, [val]);


    return (
        <div ref={testRef}>
            <div>Val: {list.length}</div>
            <input
                //ref={pRef}
                //value={list.length}
                onChange={addItem}
                />
            <ul>
                <li>weqwewqe</li>
                <li>sdfsdff</li>
                <li>dfgdfgdgdf</li>
                {list.map((item, i)=><li key={i}>{item.name}</li>)}
            </ul>
            <div ref={messagesEndRef} />
        </div>
    )
}