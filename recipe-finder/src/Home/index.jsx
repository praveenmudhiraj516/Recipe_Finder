import { useEffect, useState } from 'react'
import MealCardItem from '../MealCard'
import './index.css'
import {Link,useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'


const Home = () => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState("")
  const [searchText, setSearchText] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [showButtons, setShowButtons] = useState(true)
 
  const onSubmitSearch = (event) => {
    event.preventDefault()
    setShowButtons(false)
    setSearchText(inputValue)
    setInputValue("")
  }

  // const foods = [
  // //   { id: "chicken", name: "CHICKEN" },
  // //   { id: "pasta", name: "PASTA" },
  // //   { id: "meat", name: "MEAT" },
  // //   { id: "salad", name: "SALAD" },
  // //   { id: "soup", name: "SOUP" },
  // //   { id: "chocolate", name: "CHOCOLATE" }
  // // ]
 



  useEffect(() => {
    const searchDataFunction = async () => {
      if (searchText === "") return

      const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
      const response = await fetch(apiUrl)
      const data = await response.json()
      console.log(data)

      setSearchResults(data.meals)
    }

    searchDataFunction()
  }, [searchText])

 const toLogout = () => {
  Cookies.remove('jwt_token')
  navigate('/login', {replace: true})
 }

  

  const buttons = () => {
    return (
      <div >
        <div className='top-section-details'>
            <div >
            <h1>👨‍🍳</h1>
            </div>
          <div>
            <h2 className='heading-section'>Ready to cook something amazing ?</h2>
            <p className='to-search-description'>Search for recipes by entering ingredient that you have or the name of dish you'd like to make</p>
          </div>  
        </div>
 <div className="button-container">
          <button
            className="btn chicken"
            onClick={() => {
              setSearchText("chicken")
              setShowButtons(false)
            }}
          >
            CHICKEN
          </button>

          <button
            className="btn pasta"
            onClick={() => {
              setSearchText("pasta")
              setShowButtons(false)
            }}
          >
            PASTA
          </button>

          <button
            className="btn meat"
            onClick={() => {
              setSearchText("meat")
              setShowButtons(false)
            }}
          >
            MEAT
          </button>

          <button
            className="btn salad"
            onClick={() => {
              setSearchText("salad")
              setShowButtons(false)
            }}
          >
            SALAD
          </button>

          <button
            className="btn soup"
            onClick={() => {
              setSearchText("soup")
              setShowButtons(false)
            }}
          >
            SOUP
          </button>

          <button
            className="btn chocolate"
            onClick={() => {
              setSearchText("chocolate")
              setShowButtons(false)
            }}
          >
            CHOCOLATE
          </button>
          </div>

    </div>
    )
  }

  return (
    <div className="home-container">
      <div className='to-logout-button'>
        <button className='to-back' onClick={toLogout}>Logout</button>
      </div>
      <div className="top-section-home">
        <h1>🍳 Recipe Finder</h1>
        <p>Discover delicious recipes by ingredient or dish name</p>
      </div>

      <div className="search-box">
       
        <form onSubmit={onSubmitSearch}>
          <input 
            type="search"
            value={inputValue}
            placeholder="🔍 Search by ingredient or recipe name...(eg., 'chicken', 'pasta')"
            onChange={(e) => setInputValue(e.target.value)}
            className='search-field'
          />
         
          <button className='button-search' type="submit">Search</button>

          
        </form>
      </div>

      <div>
        {showButtons && buttons()}
      </div>

      <div className="results-section" >
        {searchResults.length > 0 ? (
          searchResults.map(meal => (
            <Link to={`/meal/${meal.idMeal}`} key={meal.idMeal} className='meal-card'>
              <MealCardItem
                key={meal.idMeal}
                meal={meal}
              />
            </Link>
          ))
        ) : (
          <p>...</p>
        )}
      </div>
    </div>
  )

}
export default Home