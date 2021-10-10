import './App.css';
import './css/style.css'
import StatefullExample from './day1-practice/components/beforeHooks/statefull';
import FetchDataHooks from './day1-practice/FetchHooks';
import CounterApp from './day1-practice/counterApp';
import CounterHooks from './day1-practice/Hooks/CounterHooks';
import TransferApp from './day2-practice/components';

function App() {
  return (
    <div className="App">
      <div className="bg-gray-100 rounded-xl p-8 mt-10 mb-10 mx-80">
      <h2>Hello Everyone</h2>
      <TransferApp />  
      </div>
    </div>
  );
}

export default App;
