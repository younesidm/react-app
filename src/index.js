import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirstComponent from './firstcomponent/FirstComponent';
import Counter from './counter/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <FirstComponent LastName='IDMOUSSA' FirstName='YOUNES' inputLabel='Name' inputName='name' placeholderName='First Name'/>

    <FirstComponent LastName='IDMOUSSA' FirstName='YOUNES' inputLabel='Name' inputName='name' placeholderName='First Name'>
      test test test
    </FirstComponent>

    <Counter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
