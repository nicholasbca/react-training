import './App.css';
import React from 'react';
import './css/style.css'
import StatefullExample from './day1-practice/components/beforeHooks/statefull';
import FetchDataHooks from './day1-practice/FetchHooks';
import CounterApp from './day1-practice/counterApp';
import CounterHooks from './day1-practice/Hooks/CounterHooks';
import TransferApp from './day2-practice/components';
import RouterApp from './day3-practice/Routeer';

function App() {
  return (
    <div className="App">
      {/* Hello Everyone */}
      {/* <TransferApp /> */}
      <RouterApp />
    </div>
  );
}

export default App;
