import UnderLine from "../../../utilities/underLine"

const ServesItem = ({id,title,summary,icon}) => {
  return (
    <div className='col-12 col-sm-6 col-md-3 my-3 text-center'>
        <h4 className="custom-broun-color">{icon}</h4>
        <h6>{title}</h6>   
        <p className="px-4">{summary}</p>
    </div>
  )
}

export default ServesItem