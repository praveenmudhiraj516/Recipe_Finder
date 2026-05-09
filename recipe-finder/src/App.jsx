import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import Home from './Home'

import './App.css'
import MealDetailsCard from './MealDetailsCard'
import ProtectedRoute from './PotectedRoute'
import NotFound from './NotFound' 
//import MealResultCard from './MealResultCard'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={
          <LoginForm />
        } />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
          } />
        <Route
        path="/meal/:mealId"
        element={
          <ProtectedRoute>
            <MealDetailsCard />
          </ProtectedRoute>
        } />
        {/* <Route path="/meal/:mealId" 
        element={
          <ProtectedRoute>
            <MealResultCard />
          </ProtectedRoute>
            } />   */}
        <Route path="*" element={<NotFound />} /> 
    </Routes>
  </BrowserRouter>
)

export default App
