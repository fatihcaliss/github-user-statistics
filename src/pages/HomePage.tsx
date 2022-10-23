import React, { useEffect } from 'react'
import { useNavigate,useLocation } from "react-router-dom"
import { useAppDispatch, useAppSelector } from '../app/hooks'
import Charts from '../components/Charts'
import Info from '../components/Info'
import UserInfo from '../components/UserInfo'

const HomePage = () => {
    const { user } = useAppSelector(state => state.users);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.login) {
            navigate("/")
        }
    }, [user])



    // console.log(state);
    return (
        <div className='min-h-[100vh] bg-[#00375c] bg-[url("https://www.transparenttextures.com/patterns/bright-squares.png")] p-8'>
            <button onClick={()=>window.location.reload()} className=" m-auto py-4 px-8 block mb-2 rounded-md bg-yellow-200 font-bold hover:scale-105 transition-all duration-500">SEARCH ANOTHER USER</button>
            <UserInfo />
            <Info />
            <Charts/>
        </div>
    )
}

export default HomePage