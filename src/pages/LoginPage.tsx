import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { BsGithub } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getUser } from '../features/userSlice';

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("")
  const { user, error } = useAppSelector((state) => state.users)
  const [userError, setUserError] = useState(error)

  const dispatch = useAppDispatch()

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(getUser(username));
  }


  useEffect(() => {
    if (user.login) {
      navigate("/home");
    }
  }, [user])

  useEffect(() => {
    setUserError(error)
    if(error){
      setTimeout(()=>setUserError(""),3000)
    }
  }, [error])
  
  

  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-[#00375c] bg-[url("https://www.transparenttextures.com/patterns/bright-squares.png")]'>
      <div className='pt-4 md:pt-0 h-[50vh] md:h-screen flex justify-center items-center'><BsGithub size={240} className={"animate-bounce"} /></div>
      <div className='h-[50vh] md:h-screen flex justify-center items-center'>
        <div className='w-[70%] max-w-[500px]'>
          <h1 className='text-red-500 text-6xl uppercase font-press-start'>Github Statistic:</h1>

          <form
            className='mt-4 flex-col'
            onSubmit={(e) => handleSubmit(e)}
          >
            <label htmlFor="username" className='font-bold my-2 inline-block text-4xl'>Enter your github username:</label>
            <input type="text" id='username' className='border-2 border-blue-500 rounded-md h-12 mr-2 pl-2 placeholder:opacity-80 w-[100%]' value={username} onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
            {userError && <p className='text-red-500 text-2xl font-semibold'>{error}!!!</p>}
            <button type='submit' className='h-12 p-2 my-2 bg-blue-500 text-white rounded-md hover:bg-opacity-80 hover:text-blue-200 m-auto block w-[10rem] uppercase'> Search</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage