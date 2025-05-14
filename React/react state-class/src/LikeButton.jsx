import {useState } from "react";

export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);
    let toggleLike = () => {
        setIsLiked(!isLiked);

    };
    let likedStyle = {color: "red"};
    return(
        <div>
            <p onClick={toggleLike}> {isLiked ? (<i className = "fa-solid fa-heart" style={likedStyle} > </i>
            ) : ( 
                <i className="fa-regular fa-heart">

                </i>
            )}
            </p>
        </div>
    )
}