import axios from 'axios';
import {useRef, useEffect, useCallback, useState, useMemo} from "react";

export function MyListComponent() {

    //const pRef = useRef();
    //const [val, setVal] = useState(100);
    const [list, setList] = useState([]);

    function createList() {
        console.log('createList ');
        for (let i = 0; i < 1000 ; i++) {
            list.push({key:i, name: 'Item ' + i});
        }
        //setList({list : this.state.list})
    }

    function addItem(event) {
        list.push({key:0, name: 'Item ' + 0});
        console.log('addItem ' + list.length);
        setList(list);
    }

    // const onPureChange = useCallback(() => {
    //     console.log('onPureChange ' + val);
    //     doSomething(val);
    // }, [100]);

    const onListChange = useMemo(() => {
        console.log('onListChange ' + list.length);
        createList();
    }, [list]);

    // useEffect(() => {
    //     console.log('use effect');
    //     //pRef.current.value = 'ref new value';
    //     setVal(val+1);
    // })


    // useEffect(() => {
    //     console.log('use effect');
    //     //setVal(val+1);
    //     // const interval = setInterval(() => {
    //     //     setVal(val + 1);
    //     // }, 1000);
    //     // return () => clearInterval(interval);
    // }, [val]);


    return (
        <div>
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
        </div>
    )
}