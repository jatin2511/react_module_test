import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import Main from './pages/Main'

function App() {

  return (
    <Provider store={store}>
      <div className='h-[100vh] w-screen[100vw]'>
        <Main />
      </div>
    </Provider>

  )
}

export default App