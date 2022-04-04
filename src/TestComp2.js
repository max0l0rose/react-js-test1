import React, {forwardRef, useImperativeHandle} from "react";
import {useRef, useEffect, useCallback, useState, useMemo} from "react";
//import * as faker from "faker";
import { FixedSizeList as List } from "react-window";

// export function testFunc1() {
//     return "res1";
// }

export const TestComp2 = forwardRef((props, forwardedRef) => {

    //const forwardedRef2 = useRef();

    function useSmoothScroll() {
        const listOuterRef = useRef()

        const scrollToEnd = useCallback(
            () => {
                console.log('333333');
                let scrollOffset = listOuterRef.current.scrollHeight;
                listOuterRef.current?.scrollTo({
                    left: 0,
                    top: scrollOffset,
                    behavior: 'smooth',
                });
            }
        , [])
        return {
            scrollableRef: listOuterRef,
            scrollToEnd
        }
    }

    const { scrollableRef, scrollToEnd } = useSmoothScroll()

    const [list, setList] = useState(() => ["qqq111", "ewwww1111", "eeeee1111"]);

    //const onListChange =
    useMemo(() => {
        console.log('useMemo ' + list.length);
        createList();
    }, []);

    function createList() {
        //console.log('createList ');
        for (let i = 0; i < 100000 ; i++) {
            list.push('Item ' + i);
        }
    }

    useImperativeHandle(forwardedRef, () => ({
        testFunc2 : () => {
            scrollToEnd();
            return "testFunc2!";
        }
    }))

    return (
        <div
                //ref={forwardedRef2}
                // style={{
                //     ...props.style,
                //     overflowY: "scroll"
                // }}
        >
            <button onClick={()=>scrollToEnd()}>Wqeqwqwe22222</button>

            <List
                innerElementType="ul"
                itemCount={list.length}
                itemSize={20}
                height={300}
                //width='100%'
                //ref={messagesEndRef}
                outerRef={scrollableRef}

                style={{...props.style
                    //, maxWidth: '100%'
                    // , overflowX: 'hidden'
                }}
            >
                {({ index, style }) => {
                    return (
                        <li style={style}>{list[index]}</li>
                    );
                }}
            </List>

        </div>

    )
})
