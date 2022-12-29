import React from 'react';
import { RecoilRoot } from 'recoil';
import NewList from './NewList';
import CompletedList from './CompletedList';
//  import NewActionInput from './NewActionInput';
import Overview from './Overview';

import './App.css';
import BasicForm from './components/BasicForm';

function App() {
  return (
    <div>
      <RecoilRoot>
      <div className='App'>
        <header className='App-header'>
          <h1>To-do List</h1>
        </header>

        <Overview />

        <BasicForm />

        <div className='title'>
          <NewList />
        
          <CompletedList />
        </div>
      </div>
    </RecoilRoot>

    </div>
    
  );
}

export default App;
