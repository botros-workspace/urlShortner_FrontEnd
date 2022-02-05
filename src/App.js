import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CreateURL from './pages/CreateURL'
import ManageURL from './pages/ManageURL'
import ErrorPage from './pages/ErrorPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/create' element={<CreateURL />}></Route>
        <Route path='/manage' element={<ManageURL />}></Route>
        <Route path='/error' element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
