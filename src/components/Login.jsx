import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
    return (
        <div className="bg-zinc-900 text-white p-8 rounded-xl shadow-xl w-full max-w-md mx-auto md:mx-0 flex-col text-center">
  <h2 className="text-2xl font-bold mb-6 text-indigo-400">Login</h2>
  
  <input 
    type="text"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    placeholder="Username"
    className="w-full mb-4 px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
  
  <input 
    type="text"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Password"
    className="w-full mb-4 px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
  
  <button 
    onClick={handleSubmit}
    className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold py-2 px-4 rounded-md"
  >
    Submit
  </button>
</div>


        
    )
}

export default Login
