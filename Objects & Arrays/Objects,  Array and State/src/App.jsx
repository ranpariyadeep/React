import LudoBoard from './LudoBoard'
import './App.css'
import ToDoList from './ToDoList'
import Lottery from './Lottery'

function App() {

  return (
    <div className="app-container">
      <LudoBoard />
     <ToDoList />
     <Lottery n={3} winningSum={15}/>
    </div>
  )
}

export default App
