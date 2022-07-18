
import React from 'react'
import { Link, matchRoutes, Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Index () {
  return (
    <>
      <Header></Header>
      <div className='layout-content'>
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  )
}
