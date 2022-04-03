import logo from './logo.svg';
import './App.css';
import {MyListComponent} from "./MyListComponent";
import MyListComponentClass from "./MyListComponentClass";
import {TestComp} from "./TestComp";
import {TestComp2} from "./TestComp2";
import TestCompClass from "./TestCompClass";

function App() {

  const style1 = {
    //color: 'white',
    //fontSize: 200
    backgroundColor: 'red',
    height: 300
  };

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
        <TestComp2
          style={{
            backgroundColor:"yellow",
            border:"1px solid red",
            height: "300px",
        }}
      />
    </div>
  );
}

export default App;
