import React from 'react';
import styled from 'styled-components';

export const MissingFlight = (props, {notFound}) =>{
    return (
        <div>
            <Emoticon>🥺 🥺 🥺 </Emoticon>
            <MainErrorParagraph>{props.message}</MainErrorParagraph>
            <ButtonReset onClick={props.reset}>Go back</ButtonReset>
        </div>
    )
}

const MainErrorParagraph = styled.p`
    font-weight:700;
    font-size:2rem;
    margin: 15px 0 5px;
    
`

const Emoticon = styled.p`
    font-size:30px;
    margin-top:30px;

`

const ButtonReset = styled.button`
padding:.7rem 2rem;
margin-top:20px;
border:2px solid #003cc5;
margin-left:.5rem;
color:#003cc5;
font-weight:700;
background:transparent;
border-radius:7px;
    &:hover{
        background:#003cc5;
        color:#fff;
      
    };
    &:active{
        transform:scale(0.97)
    };
    &:focus{
        outline:none;
    }
`