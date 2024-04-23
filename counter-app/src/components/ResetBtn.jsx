import './ResetBtn.css'

const ResetBtn = (props) =>{
   return(
      <button className='btnn' onClick={props.reset} >Reset</button>
   )
}

export default ResetBtn