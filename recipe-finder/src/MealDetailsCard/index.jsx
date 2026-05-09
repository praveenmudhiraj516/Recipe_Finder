import './index.css'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { BeatLoader } from "react-spinners";
import { BsArrowLeft } from "react-icons/bs";
import { AiTwotoneClockCircle } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

const MealDetailsCard = () => {
  const [mealFullDetails, setMealFullDetails] = useState(null)
  const params = useParams()
  const { mealId } = params 
  const navigate = useNavigate()

  useEffect(() => {
    const fetchMealFullDetails = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      )
      const data = await response.json()
      console.log(data)

      setMealFullDetails(data.meals[0])
    }

    fetchMealFullDetails()
  }, [mealId])

  // ✅ Loader first (prevents crash)
  if (!mealFullDetails) {
    return (
      <div className="loader-container">
        <BeatLoader color="#36d7b7" />
      </div>
    )
  }

  // ✅ Create ingredients list (clean logic)
  let ingredientsList = []

  for (let i = 1; i <= 20; i++) {
    let ingredient = mealFullDetails["strIngredient" + i]
    let measure = mealFullDetails["strMeasure" + i]

    if (ingredient && ingredient.trim() !== "") {
      ingredientsList.push(
        <li key={i} className='ingredient-item'>
           <span>{ingredient}</span>
            <span className='measure'>{measure}</span>
        </li>
      )
    }
  }
   console.log(ingredientsList)

  return (
    // <Link to={`/meal/${mealId}`}>
    <div className="meal-details-card">

  
      <button className='back-to-results' onClick={() => navigate(-1)}>
       <BsArrowLeft className='left-arrow'/>
       Back to results
      </button>
     

     
      <div className="meal-details-content">
        <img
          src={mealFullDetails.strMealThumb}
          alt={mealFullDetails.strMeal}
        />

        <div className="right-content">
          <h2>{mealFullDetails.strMeal}</h2>

          <span className="tag veg">Vegetarian</span>
          <span className="tag region">{mealFullDetails.strArea}</span>
          <div className='prep-serve'>
            <span className='prep-text'> <span className='prep-icon'><AiTwotoneClockCircle /></span>  prep & cook time</span>
            <span className='prep-text'> <span className='prep-icon'><GoPeople /></span>serves 4-6</span>
          </div>

          <a
            href={mealFullDetails.strYoutube}
            target="_blank"
            rel="noreferrer"
          >
            <button className="video-btn">
              Watch Video Tutorial
            </button>
          </a>
        </div>
      </div>

      {/* ✅ BOTTOM SECTION */}
      <div className="extra-details">

        {/* INGREDIENTS */}
        <div className="ingredients">
          <h3 className='ingredients-header'>Ingredients</h3>
          <ul>{ingredientsList}</ul>
         
        </div>

        {/* INSTRUCTIONS */}
        <div className="instructions">
          <h3 className='instruction-header'>Instructions</h3>
          <p className='instruction-para'>
          {mealFullDetails.strInstructions.split(".").map((text, i) => (
               text && <p key={i}>{text}.</p>
          ))}
          </p>
        </div>

      </div>
    </div>
    // </Link>
  )
}

export default MealDetailsCard