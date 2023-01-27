import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import UnderLine from "../../../utilities/underLine"

const ServesItem = ({loading,id,title,summary,icon}) => {
 
  return (
    <div className='col-12 col-sm-6 col-md-3 my-3 text-center'>
        <h2 className="custom-broun-color">{icon}</h2>
        <h5 className="fw-semibold">{title}</h5>   
        <div className="px-4 text-secondary">
          <small>{summary}</small>
        </div>
    </div>
  )
}

export default ServesItem