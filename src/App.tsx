import React, { FC } from 'react'
import logo from './logo.svg'
import { Button } from 'antd'

const App: FC = () => {
  const a = {
    a: 1,
    b: 2,
  }
  const handleClick = () => {
    console.log('a', a)
  }
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
        <Button type="primary" onClick={handleClick}>Button</Button>

      </header>
    </div>
  )
}

export default App
