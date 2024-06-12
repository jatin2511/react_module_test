import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Desktop from './Desktop'
import Mobile from './Mobile'
import setview from '../actions/Ismobileaction'

function Main() {
    const ismobile=useSelector(store=>store.ismobile)
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(setview(`${window.innerWidth<600?'mobile':'desktop'}`));
        function handleresize(){
            dispatch(setview(`${window.innerWidth<600?'mobile':'desktop'}`))
        }
        window.addEventListener('resize',handleresize);
    },[])
  return (
    <div className='w-full h-full'>
         {ismobile?(<Mobile />):(<Desktop />)}
    </div>
  )
}

export default Main