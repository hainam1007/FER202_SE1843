import React from 'react'
import ImageSlider from '../components/Home/Slider'
import Orchids from '../components/Orchids/Orchids'
import About from '../components/Home/About'
import Photo3 from '../components/Home/Photo3'
import OrchidProcess from '../components/App/OrchidProcess'

const Home = () => {

    return (
        <div>
            <ImageSlider />
            <About />
            <Photo3 />
        </div>
    )
}

export default Home