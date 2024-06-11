import { useState } from "react";
export default function LikeButton(){
let [isLiked,setIsLike] = useState(false);

    let toggleLike = () => {
         setIsLike(!isLiked);
          
    }

    let likeStyle ={color:"red"};
    return (
      <div>
        <p onClick={toggleLike}>
          {isLiked ? (
            <i className="fa-regular fa-heart"></i>
          ) : (
            <i className="fa-solid fa-heart" style={likeStyle}></i>
          )}
        </p>
      </div>
    );
}