import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
function App() {
  return (
    <div className="App">
      <Dashboard />
      <footer className="page-footer font-small blue pt-4">
        Developed By:<strong> Garima Sah</strong>
      </footer>
    </div>
  );
}

export default App;
