import React, { useContext } from "react"
import UserContext from "../context/UserContext"


function Profile() {
    const {user} = useContext(UserContext)
    
    return (
        <div className="bg-zinc-800 text-white p-8 rounded-xl shadow-xl w-full max-w-md mx-auto md:mx-0">
            {!user ? (
                <div className="text-red-400 text-lg font-medium">Please login</div>
            ) : (
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-green-400">Welcome</h2>
                    <p className="text-lg"> {user.username}</p>
                </div>
            )}
        </div>
    )
}

export default Profile
