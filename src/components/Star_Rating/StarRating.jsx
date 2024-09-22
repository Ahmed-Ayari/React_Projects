import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './style.css'

// eslint-disable-next-line react/prop-types
export default function StarRating({ nStars = 5 }) {
    
    const[rating, setRating] = useState(0);
    const[hover, setHover] = useState(0);

    function handleClick(currentIndex){
        setRating(currentIndex)
    }

    function handleMouseMove(currentIndex){
        setHover(currentIndex);
    }

    function handleMouseLeave(){
        setHover(rating);
    }

    return <div className="container sr_wrapper">
        {
            [...Array(nStars)].map((_,index)=> {
                index++;

                return (
                    <FaStar 
                    key={index}
                    className={index <= (hover || rating) ? "active" : "inactive"}
                    onClick={() => handleClick(index)}
                    onMouseMove={() => handleMouseMove(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    size = {40}
                    />
                );
            })
        }
    </div>
}