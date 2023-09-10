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
    <Route path="/menu/room/frontend" element={<Room type={"frontend"} />}></Route>
    <Route path="/menu/room/backend" element={<Room type={"backend"} />}></Route>
    <Route path="/menu/room/custom" element={<Room type={"custom"} />}></Route>
</Routes>
  )
}
