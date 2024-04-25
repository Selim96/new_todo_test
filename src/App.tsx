import React, { Suspense, lazy } from 'react'
import Loader from './components/Loader' 
import { Route, Routes } from 'react-router-dom' 
import Header from './components/Header' 
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Homepage = lazy(() => import("./pages/Homepage")) 
const DeletedTodos = lazy(() => import("./pages/DeletedTodos")) 

const App: React.FC = () => {
  
  return (
    <>
    <Header />
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/deleted" element={<DeletedTodos />} />
      </Routes>
    </Suspense>
    <ToastContainer />
  </>
  )
}

export default App
