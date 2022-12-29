import { NavLink } from "react-router-dom"
import GroundCover from "../../components/groundCover"
import UnderLine from "../../utilities/underLine"

const HasSent = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

  return (
    <GroundCover title='Thank you'>
       <NavLink to='/rooms' className='text-white'>Back to Rooms</NavLink> 
    </GroundCover> 
  )
}

export default HasSent