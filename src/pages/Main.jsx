import React, { useEffect } from 'react'
import Sidebar from '../Components/Sidebar'
import Maincontent from '../Components/Maincontent'
import { useDispatch,useSelector } from 'react-redux'
import Desktop from './Desktop'
import Mobile from './Mobile'
import setview from '../actions/Ismobileaction'

function Main() {
    const ismobile=useSelector(store=>store)
    const dispatch=useDispatch();
    useEffect(()=>{
        function handleresize(){
            dispatch(setview(`${window.innerWidth<600?'mobile':'desktop'}`))
        }
        window.addEventListener('resize',handleresize);
    },[])
  return (
    <div className='w-full h-full bg-green-600'>
         {ismobile?(<Mobile />):(<Desktop />)}
    </div>
  )
}

export default Main