import { NavLink } from "react-router-dom"
import GroundCover from "../../components/groundCover"
import UnderLine from "../../utilities/underLine"

const HasSent = () => {
  return (
    <GroundCover title='Thank you'>
       <NavLink to='/rooms' className='text-white'>Back to Rooms</NavLink> 
    </GroundCover> 
  )
}

export default HasSent