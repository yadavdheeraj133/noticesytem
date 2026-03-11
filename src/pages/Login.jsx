import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import UseAuth from '../Hooks/UseAuth'

const Login = () => {

const navigate = useNavigate()
const { login } = UseAuth();
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")


const handlelogin = () => {

  if (!email || !password) {
    alert('Please fill in all fields')
    return;}

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((e) => e.email === email)

    if (!user) {
      alert("Account not found. please signup")
      navigate("/signup")
      return
    }

    if (user.password !== password) {
       alert("Wrong password")
       return
    }

   localStorage.setItem("currentUser",JSON.stringify(user))

login();
setEmail("")
setPassword("")
navigate("/Dashboard");
};



  return (

   <div className='w-full h-screen relative'>
      <div className='w-full max-w-sm md:max-w-md lg:w-[30%] bg-blue-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform flex items-center justify-center flex-col rounded-xl px-6 md:px-10 py-8 md:py-10'>
      <h1 className='text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-slate-900'>LogIn Page</h1>

      {/* ONLY CHANGE START */}
      <form autoComplete="off" className='w-full'>
      
       <div className='flex items-start w-full flex-col justify-center gap-1'>
        <label className='text-lg md:text-xl'>Email</label>
        <input 
        className='bg-white rounded w-full py-2 md:py-1 mb-4 outline-0'
        type="email" 
        value={email}
        autoComplete="off"
        onChange={(e) => setEmail(e.target.value)}
        />
       </div>

       <div className='flex items-start flex-col w-full justify-center gap-1'>
       <label className='text-lg md:text-xl'>Password</label>
       <input 
       className='bg-white rounded w-full py-2 md:py-1 outline-0 mb-6'
       type="password"
       value={password} 
       autoComplete="new-password"
       onChange={(e) => setPassword(e.target.value)}
      />
       </div>

      <button 
      type="button"
      onClick={handlelogin}
      className='bg-green-500 w-full hover:bg-green-600 text-white font-semibold py-2 cursor-pointer rounded text-md mb-4'
      >
      LogIn
      </button>

      </form>
      {/* ONLY CHANGE END */}

      <p>Don't Have Account ? <Link to="/Signup">Signup</Link></p>

    </div>
   </div>
  )
}

export default Login