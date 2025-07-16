import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-zinc-600 to-zinc-700">
      <div className="flex md:flex-row items-center justify-center gap-10">
     <Login/>
     <Profile/>
     </div>
     </div>
    </UserContextProvider>
  )
}

export default App
