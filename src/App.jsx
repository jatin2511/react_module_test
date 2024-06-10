import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import Main from './pages/Main'

function App() {
  
  return (
    <Provider store={store}><div  className='h-screen w-screen flex'>
     <Main />
    </div></Provider>
    
  )
}

export default App