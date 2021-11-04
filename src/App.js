import logo from './logo.svg';
import './App.css';
import './style/index.less';
import { Button } from 'antd-mobile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="demo">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button type="primary">primary</Button>
      <Button type="primary" inline style={{ marginRight: '4px'}}>inline primary</Button>
    </div>
  );
}

export default App;
