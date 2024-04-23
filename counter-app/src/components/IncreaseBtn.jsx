import './IncreaseBtn.css'

const IncreaseBtn = (props) => {
   return(
      <button  className='btnn' onClick={props.zvysovac}>Zvýšit o 1</button>
   )
}

export default IncreaseBtn