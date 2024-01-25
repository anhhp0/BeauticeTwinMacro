import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Service from '../pages/Service'
import Gallery from '../pages/Gallery'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Team from '../pages/Team'

const AllRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/team" element={<Team />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <SpeedInsights />
    <Analytics />
  </BrowserRouter>
)

export default AllRoutes
