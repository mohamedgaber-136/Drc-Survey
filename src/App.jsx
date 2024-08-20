
import './App.css'
import { Header } from './Components/Header'
import { NavBar } from './Components/NavBar'
import { SidBar } from './Components/SidBar'
import { SurveyCard } from './Components/SurveyCard'

function App() {

  return (
    <div className='app'>
    <NavBar/>
    <div className="d-flex">
    <SidBar/>
  
    <Header/>
    </div>
    </div>
  )
}

export default App
