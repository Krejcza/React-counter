import './DecreaseBtn.css'

const DecreaseBtn = (props) => {
   return(
      <button className='btnn' onClick={props.snizovac} >Snížit o 1</button>
   )
}

export default DecreaseBtn