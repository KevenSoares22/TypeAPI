import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
      <Outlet />
    </div>
  )
}

export default App
