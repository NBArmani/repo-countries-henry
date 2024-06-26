import { Route, Routes, } from 'react-router-dom'
import Landing from './components/Landing'
import Home from './components/Home'
import Detail from './components/Detail'
import Form from './components/Form/Form'
import './App.css'
function App() {
  return (
    <div className='App'>

      <Routes>
        <Route path='/' element={<Landing />} ></Route>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/crea-tu-actividad' element={<Form />}></Route>
      </Routes>
    </div>


  )

}

export default App
