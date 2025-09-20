import { useState } from "react";

export default function Like(){
    let [count,setCount]=useState(0)
    let [like,setLike]=useState(false)

    function incCount(){
      setCount(count+1)
    }

    function toggle(){
        setLike(!like)
    }
    let likeStyle={color:"red"};


    return(
        <>
        <p>Count={count}</p>
        <h1 onClick={toggle}>
          <p onClick={incCount}>
            {like ?
            (<i class="fa-solid fa-heart" style={likeStyle}></i>) 
            :(<i className="fa-regular fa-heart"></i>)}
            </p>
            </h1>
        </>
    )
}