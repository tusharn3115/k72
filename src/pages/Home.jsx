import React from 'react'
import Video from '../components/home/Video'
import HomeMainText from '../components/home/HomeMainText'
import HomeBtn from '../components/home/HomeBtn'

const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen fixed'>
            <Video />
        </div>

        <div className='h-screen w-screen relative flex flex-col justify-between pb-2 overflow-hidden'>
            <HomeMainText />
            <HomeBtn />
        </div>
    </div>
  )
}

export default Home