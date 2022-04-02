import logo from './logo.svg';
import './App.css';
import {MyListComponent} from "./MyListComponent";
import MyListComponentClass from "./MyListComponentClass";
import {TestComp} from "./TestComp";

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
      <TestComp style={{
        backgroundColor:"red",
        height:"200px",
        overflowY: "scroll"
      }}/>
    </div>
  );
}

export default App;
