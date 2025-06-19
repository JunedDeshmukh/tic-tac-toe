
import './App.css'
import Grid from './components/Grid/Grid'
import { GiTicTacToe } from "react-icons/gi";

function App() {
 

  return (
    <>
      <div className='symbol'><h1>tic-tac-toe <span ><GiTicTacToe className='span' /></span> </h1></div>
      <Grid numberOfCards={9}/>
    </>
  )
}

export default App
