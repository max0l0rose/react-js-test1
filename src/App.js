import logo from './logo.svg';
import './App.css';
import React, {useRef, useState} from "react";
import {MyListComponent} from "./MyListComponent";
import MyListComponentClass from "./MyListComponentClass";
import {TestComp} from "./TestComp";
import TestCompClass from "./TestCompClass";
import {TestComp2} from "./TestComp2";

// import {ffff} from "./test2";
// let q = new ffff();
// let w = q.f2();
// console.log(q, w);

function App() {
    const testRef = useRef();
    const [v, setV] = useState(1);

    const style1 = {
    //color: 'white',
    //fontSize: 200
    backgroundColor: 'red',
    height: 300
  };

    // //const { scrollableRef, scrollToEnd } = TestComp2.useSmoothScroll()
    // var res = testFunc1();
    // console.log(res);

  // function qqqq() {
  //     console.log("qqqq");
  //     console.log(testRef.current);
  //         //.scrollToEnd();
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/*<MyListComponent style={style1} />*/}
      {/*<TestComp a={1} mystyle={{*/}
      {/*  backgroundColor:"red",*/}
      {/*  height:"200px",*/}
      {/*  overflowY: "scroll"*/}
      {/*}}/>*/}
        <button onClick={() => setV(v+1)}>-----{v}-----</button><br/>
        <button onClick={() => console.log(testRef.current.testFunc2())}>Appppppppppp</button>
        <TestComp2 ref={testRef}
          style={{
            backgroundColor:"yellow",
            border:"0px solid red",
            height: "300px",
              overflowX: 'hidden'
        }}
      />
    </div>
  );
}

export default App;
