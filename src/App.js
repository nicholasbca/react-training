import './App.css';
import StatefullExample from './components/beforeHooks/statefull';
import FetchData from './components/fetch';
import CounterApp from './counterApp'
import FetchDataHooks from './FetchHooks';
import CounterHooks from './Hooks/CounterHooks';

function App() {
  return (
    <div className="App">
      <h2>Hello Everyone</h2>
      {/* <FetchDataHooks /> */}
      <CounterHooks />
    </div>
  );
}

export default App;
