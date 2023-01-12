import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InsertResult from './InsertResult/InsertResult';
import { Provider } from 'react-redux';
import { store } from './Store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();


// let student = {
//   rollno: 1,
//   name: "cjhvj",
//   subjects:[{
//       name:"math",
//       totalMarks: 50,
//       ObtainedMarks: 45
//   },{
//       name:"math",
//       totalMarks: 50,
//       ObtainedMarks: 45
//   }]
// }