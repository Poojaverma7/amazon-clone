import React from 'react'
import './HomeScreen.css'
import HomeBanner from './HomeBanner/HomeBanner'
import HomeDetails from './HomeDetails/HomeDetails'


const HomeScreen = () => {
  return (
    <div className="homeScreen">
        <HomeBanner />
        <HomeDetails/>
        <HomeDetails/>
    </div>
  )
}

export default HomeScreen
