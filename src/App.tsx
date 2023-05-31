
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { mainRouter } from './router/mainRouter'

function App() {

  return (
    <>
    <RouterProvider router={mainRouter}/>
    </>
  )
}

export default App
