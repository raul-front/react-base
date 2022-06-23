import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="App container">
      <header className="App-header flex flex-col items-center justify-center px-7">
        <img src={logo} className="App-logo padding-sm mdx-blue" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
        <a
          className="App-link bg-mdx-black-50 p-1 rounded-full"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
