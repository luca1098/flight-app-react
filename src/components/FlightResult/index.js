import React from 'react'
import styled from 'styled-components'




export const FlightResult = ({flight, direction}) => {
    return(
        <FlightWrap>
            {flight.length > 0 && <Found>{flight.length} flights found</Found>}
            {flight.map((airport,index) => (
                    <FlightResultItem key={airport.id}
                                      id={airport.id} 
                                      price={airport.price}
                                      departure={direction.from}
                                      destination={direction.to}
                                      
                                    />))}
        </FlightWrap>
    )
}


const FlightResultItem = (props) => {
    return (
        <FlightItemWrap>
            <DesintaionWrap>
                <p>{props.departure}</p>
                <Icon className="fas fa-long-arrow-alt-right" />
                <p>{props.destination}</p>
            </DesintaionWrap>
            <IconAirplane className="fas fa-plane" />
            <div>  
                <Price first={props.first}> €{props.price}</Price>
                <ButtonOffer> View offer</ButtonOffer>
            </div>
        </FlightItemWrap>
    )
}
const FlightWrap = styled.div`
    width:100%;
`
const FlightItemWrap = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:.7rem auto;
    background:#ffffff;
    border-radius:7px;
    padding:.7rem 1rem;
    width:100%;
    @media(max-width:768px){
        flex-direction:column;
    }
`
const DesintaionWrap = styled.div`
    display:flex;
    & p{
        margin:0;
        font-weight:600;
        font-size:1.5rem;
    }
`
const IconAirplane = styled.i`
padding:20px 0;
@media(max-width:768px){
    &:after{
        content:'';
        display:block;
        margin-top:-8px;
        height:1px;
        width:150px;
        background:#c7c7c7;
    }
    }


`
const Icon = styled.i`
    color:#FFB50F;
    margin:.2rem .5rem 0;
    font-size:1.5rem
`
const Found = styled.p`
    text-align:left;
    color:#7c7c7c;
    margin-top:20px
`
const ButtonOffer = styled.button`
padding:.7rem 2rem;
border:2px solid #003cc5;
margin-left:.5rem;
color:#fff;
font-weight:700;
background:#003cc5;
border-radius:7px;
    &:hover{
        background:#003C99;
        border:2px solid #003C99;
      
    };
    &:active{
        transform:scale(0.97)
    };
    &:focus{
        outline:none;
    }
`
const Price = styled.p`
    font-size: 1.5rem;
    font-weight:700;
    margin:0 0 20px 0 ;
    color: ${props => props.first? '#39B343' : '#000' }
`

