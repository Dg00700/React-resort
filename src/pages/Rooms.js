import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import RoomsConatiner from '../components/RoomsContainer'
const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="our rooms">
                <Link to='/' className="btn-primary">Return Home</Link>
            </Banner>
        </Hero>
        <RoomsConatiner></RoomsConatiner>
        </>
    )
}
export default Rooms