const MealResultCard = props => {
  const { mealDetails } = props
  const { strMeal, strMealThumb } = mealDetails 
    return (
        <div className="meal-result-card-container">    
            <img src={strMealThumb} alt={strMeal} className="meal-result-image"/>
            <p className="meal-result-name">{strMeal}</p>
        </div>
    )
}       



export default MealResultCard