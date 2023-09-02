import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Room } from './pages/Room'
import { Menu } from './pages/Menu'

export const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/menu" element={<Menu />}></Route>
    <Route path="/room" element={<Room />}></Route>
</Routes>
  )
}
