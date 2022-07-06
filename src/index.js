import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './Components/Global/AuthProvider';
import {Provider} from "react-redux";
import { store, Persistor } from "./Components/Global/store"
import { PersistGate } from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist'
// let persistor = persistStore(store);


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);


root.render(
  <React.StrictMode>
  <Provider store={store}>
  <AuthProvider>
  <PersistGate loading={null} persistor={Persistor}>
  <App />
  </PersistGate>
  </AuthProvider>
  </Provider>
  </React.StrictMode>,
  // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
