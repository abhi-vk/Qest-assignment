import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { Home,ContactUs, PlanDetails } from './pages'


function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactus" element={< ContactUs/>} />
      <Route path="/plandetails" element={< PlanDetails/>} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
