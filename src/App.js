import React from 'react';
import './App.css';
import CurrencyConverterWrapper from './containers/CurrencyConverterWrapper';
import FormWrapper from './containers/FormWrapper';
import ListWrapper from './containers/ListWrapper';
import MaximumWrapper from './containers/MaximumWrapper';

const App = () => (
   <div className="App">
      <header className="Header">
         <div>
            <h1 className="Header__Title">Transactions Management</h1>
            <small className="Header__Subtitle">This is a placeholder text</small>
         </div>
         <CurrencyConverterWrapper/>
      </header>

      <FormWrapper/>

      <ListWrapper/>

      <MaximumWrapper/>

   </div>
);

export default App;
