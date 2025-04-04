import React from 'react'
import Landing from '../components/Landing'
import Highlights from '../components/Highlights'
import Featured from '../components/Featured'
import Discounted from '../components/Discounted'
import Explore from '../components/Ui/Explore'

const Home = () => {
  return (
    <>
    <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  )
}

export default Home
