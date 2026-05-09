// import './index.css'
// import { useState } from 'react' 
// import { MdOutlineArrowRightAlt } from "react-icons/md";





// const MealCardItem = ({ meal }) => {
// const [showMore,setShowMore] = useState(false)
//  const handleButtonClick = () => {
  
//     if (showMore === true) {
//       setShowMore(false);
//     } else {
//       setShowMore(true);
//     }
//   };

//   return (
//     <div className="result-item meal-card" data-id={meal.idMeal}>
//       <img src={meal.strMealThumb} alt={meal.strMeal} />
//       <h2>{meal.strMeal}</h2>

//       <div className="tag-container">
//         <span className="tag veg">Vegetarian</span>
//         <span className="tag region">{meal.strArea}</span>
//       </div>

//       <p>
//           {showMore ? meal.strInstructions : meal.strInstructions.slice(0, 270) + "..."}
//       </p>
//  <div>
//       <button className='to-show'  onClick={(event)=>{
//         event.stopPropagation() 
//         handleButtonClick()
//       }} >
//         {showMore === true ? "Show Less" : "click for full recipe"}
//               <MdOutlineArrowRightAlt className='icon'/> 
//       </button>
//     </div>
  
//     </div>
    
//   )
// }

// export default MealCardItem

import './index.css'
import {useState} from 'react'
import {MdOutlineArrowRightAlt} from 'react-icons/md'

const MealCardItem = ({meal}) => {
  const [showMore, setShowMore] = useState(false)

  const handleButtonClick = () => {
    if (showMore === true) {
      setShowMore(false)
    } else {
      setShowMore(true)
    }
  }

  return (
    <div className="result-item meal-card" data-id={meal.idMeal}>
      <img src={meal.strMealThumb} alt={meal.strMeal} />

      <h2>{meal.strMeal}</h2>

      <div className="tag-container">
        <span className="tag veg">Vegetarian</span>

        <span className="tag region">{meal.strArea}</span>
      </div>

      <p>
        {showMore
          ? meal.strInstructions
          : meal.strInstructions.slice(0, 270) + '...'}
      </p>

      <div>
        <button
          className="to-show"
          onClick={event => {
            event.stopPropagation()
            handleButtonClick()
          }}
        >
          {showMore === true ? 'Show Less' : 'click for full recipe'}

          <MdOutlineArrowRightAlt className="icon" />
        </button>
      </div>
    </div>
  )
}

export default MealCardItem