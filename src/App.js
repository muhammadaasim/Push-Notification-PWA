import React from 'react';
import './App.css';
import {initNotification} from './services/firebaseService'
function App() {
  return (
    <div className="App">
      <button onClick={initNotification}>
        configure notifications
      </button>
    </div>
  );
}

export default App;
