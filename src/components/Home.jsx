import { Paper, Typography } from '@mui/material'
import React from 'react'
import Footer from './Footer/Footer'
import { homeMainCont } from './HomeStyle'
import TopSection from './TopSection/TopSection'

const Home = () => {
  return (
    <div style={homeMainCont}>
      <TopSection/>
    </div>
  )
}

export default Home