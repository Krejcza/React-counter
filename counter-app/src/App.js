import DecreaseBtn from "./components/DecreaseBtn"
import { useState } from "react"
import IncreaseBtn from "./components/IncreaseBtn"
import ResetBtn from "./components/ResetBtn"

const App = () => {

  const [value, setValue] = useState(0)

  const decreaseOne = () =>{
    const newValue = value -1
    setValue(newValue)
  }

  const increaseOne = () =>{
    const newValue = value +1
    setValue(newValue)
  }

  const ResetOne = () =>{
    setValue(0)
  }

  return (
    <div className="counter">
      <h1>Počítadlo</h1>
      <h2>{value}</h2>
      <div className="buttons">
        <DecreaseBtn snizovac={decreaseOne}/>
        <IncreaseBtn zvysovac={increaseOne}/>
        <ResetBtn reset={ResetOne}/>
      </div>
    </div>
  )
}

export default App