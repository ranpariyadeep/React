import { useState } from "react";
let styles={color: "#ff1467" }



export default function LikeButton(){
 let [isLiked, setIsLIked] =useState(false);

 let toggleLike = function(){
     setIsLIked(!isLiked);
 }
   
 if (!isLiked){

 }

 return(
 <div>
    
    <p onClick={toggleLike}>
        {isLiked ? <i className="fa-solid fa-heart fa-2xl"  style={styles}></i> : <i className="fa-regular fa-heart fa-2xl"></i>}
       </p>
    
   
 </div>
 );
}