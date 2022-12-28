import UnderLine from '../../utilities/underLine'

import './GroundCover.css'

const GroundCover = ({title,children}) => {
   return <div className="GroundCover py-2">
        <div className='cover-content py-2'>
        <h1 className='text-center'>{title}</h1>
        <UnderLine/>
        <div className='text-center'>
            <button className='border-0 py-1 px-4 fw-semibold custom-broun'>
            {children}
            </button>           
        </div>
        </div>   
    </div> 
}

export default GroundCover