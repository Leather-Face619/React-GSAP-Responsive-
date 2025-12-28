
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agencs from './pages/Agencs'
import Projects from './pages/projects'
import Nav from './components/navigation/Nav'

const App = () => {
  
  
  return (
  <div className='text-white'>
     <Nav/>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Agencs' element={<Agencs/>}/>
      <Route path='/Projects' element={<Projects/>}/>

    </Routes>
   
  </div>
  )
}

export default App