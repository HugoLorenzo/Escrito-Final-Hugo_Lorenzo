import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
        <div>
          <h1>Home</h1>
          <p>Click abajo para crear un usuario:</p>
          <Link to="/crear">
            <button>Crear usuario</button>
          </Link>
        </div>
  )
}

export default App
