import { NavLink } from "react-router-dom"
import GroundCover from "../../components/groundCover"
import UnderLine from "../../utilities/underLine"


const ErrorPage = () => {

  return(
    <GroundCover title='404'>
       <NavLink className='text-white' to='/'>Back to Home</NavLink> 
    </GroundCover> 
  )}
export default ErrorPage