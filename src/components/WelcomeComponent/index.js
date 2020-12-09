import React from 'react'
import styled from 'styled-components'
import image from '../../travel.png'

export const WelcomeCompoent = () => {
    return (
        <>
            <h2>Hello! We have many surprises for you!<br />Discover your favorite!</h2>
            <ImageHeartFlight src={image} />
        </>      
    )
        

}

const ImageHeartFlight = styled.img`
    width:80%;
    margin:0 auto;
    display:block;
`