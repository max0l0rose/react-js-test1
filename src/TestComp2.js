import React from "react";
import {useRef, useEffect, useCallback, useState, useMemo} from "react";
//import * as faker from "faker";
import { FixedSizeList as List } from "react-window";

export function TestComp2(props) {
    const messagesEndRef = React.createRef();
    const [list, setList] = useState(() =>
        ["qqq", "ewwww", "eeeee"]
    );

    const onListChange = useMemo(() => {
        console.log('useMemo ' + list.length);
        createList();
    }, []);

    function createList() {
        //console.log('createList ');
        for (let i = 0; i < 100000 ; i++) {
            list.push('Item ' + i);
        }
        //setList({list : this.state.list})
    }

    return (
        // <div
        // //     style={{
        // //     backgroundColor:"yellow",
        // //     height:"150px",
        // //     overflowY: "scroll"
        // // }}
        //         style={props.mystyle}
        // >
        //     <p>Qqqqqq1</p>
        // </div>

        <div
                // style={{
                //     ...props.style,
                //     overflowY: "scroll"
                // }}
        >
            {/*<ul>*/}
            {/*    {list.map((q, i) => <li key={i}>{q}</li>)}*/}
            {/*</ul>*/}
            {/*<div ref={this.messagesEndRef} />*/}

            <List
                innerElementType="ul"
                itemCount={list.length}
                itemSize={20}
                height={300}
                width='100%'

                style={{...props.style, maxWidth: '100%', overflowX: 'hidden'}}
            >
                {({ index, style }) => {
                    return (
                        <li style={style}>{list[index]}</li>
                    );
                }}
            </List>

        </div>

    )
}