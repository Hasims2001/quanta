import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Category } from './pages/Category'

export const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/category" element={<Category />}></Route>
</Routes>
  )
}
