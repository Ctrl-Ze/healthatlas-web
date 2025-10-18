import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApiStatus from './components/ApiStatus/ApiStatus'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
      <h1>Helios Dashboard</h1>
      <ApiStatus />
    </div>
  );
}

export default App
