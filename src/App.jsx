import { useState } from 'react'
import './App.css'
import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Layout>
      </Layout>
    </div>
  )
}

export default App
