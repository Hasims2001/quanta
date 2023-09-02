import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Room } from './pages/Room'
import { Menu } from './pages/Menu'
import { Category } from './pages/Category'

export const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/menu" element={<Menu />}></Route>
    <Route path="/category" element={<Category />}></Route>
    <Route path="/room/coding" element={<Room type={"coding"} />}></Route>
    <Route path="/room/dsa" element={<Room type={"dsa"} />}></Route>
    <Route path="/room/general" element={<Room type={"general"} />}></Route>
</Routes>
  )
}
