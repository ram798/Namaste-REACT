import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({name,cuisines,cloudinaryImageId,costForTwoString}) => {
    // console.log(props);
    return(
        <>
    <div className="card">
    <img src={IMG_CDN_URL +
    cloudinaryImageId}/>
    <h2> {name}</h2>
    <h3> {cuisines .join(",")}</h3>
    <h4> {costForTwoString}</h4>
    </div>
    </>
); 
};

export default RestaurantCard;