import { IMG_SRC } from "../utils/constants"
const Restaurant = (props)=>{
    const {obj} = props
    const {cloudinaryImageId,name,cuisines,avgRating,sla} = obj?.info
    return(
    <div className="reasturants">
        <div className="Body-img">
            {console.log(`${IMG_SRC}/${cloudinaryImageId}`)}
            <img src={`${IMG_SRC}/${cloudinaryImageId}`} alt={name} />

        </div>
        <div className="Body-container">
            
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating}</h5>
            <h5>{sla.deliveryTime}</h5>
        </div>
    </div>
    )
}
export default Restaurant;