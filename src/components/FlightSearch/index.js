import React from 'react'
import styled from 'styled-components'


export const FligthSearch = (props) => {
    return(
        
        <div>
            <IATAalert>*Insert IATA code please </IATAalert>
            <InputWrapper>
                <InputFlight type='text' 
                        value={props.from} 
                        placeholder='From (es.CTA)' 
                        onChange={props.fromOnChange}
                        maxLength='3'
                        />
                <ButtonInvert onClick={props.invertFlightOrder}><i className="fas fa-exchange-alt" /> </ButtonInvert>
            
                <InputFlight type='text' 
                        value={props.to} 
                        placeholder='To (es.NAP)'
                        onChange={props.toOnChange}
                        maxLength='3'
                        />
                <SearchButton onClick={ props.getFlight}>Find</SearchButton>
            </InputWrapper>
       
        </div>
    )
}
const InputWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    @media(max-width:768px){
        flex-direction:column
    }
    
`

const SearchButton = styled.button`
padding:.7rem 2rem;
border:2px solid #fff;
margin-left:.5rem;
color:#fff;
font-weight:700;
background:transparent;
border-radius:7px;
    &:hover{
        background:#fff;
        color:#003cc5
    };
    &:active{
        transform:scale(0.97)
    };
    &:focus{
        outline:none;
    }
    @media(max-width:768px){
        margin-top:20px
    }

`
const InputFlight = styled.input`
    border:2px solid #f1f1f1;
    padding:.7rem 1rem;
    border-radius:7px;
    color:#6c6c6c;
    &:focus{
        outline:none;
        border:2px solid blue
    }
`
const IATAalert = styled.p`
    color:#c7c7c7;
    display:block;
    margin-bottom:10px;
    font-size:13px;
    text-align:center;
    font-style:italic
`

const ButtonInvert = styled.button`
    background:transparent;
    color:#FFB50F;
    font-size:1.3rem;
    border:none;
    &:active{
        transform:scale(1.05)
    };
    &:focus{
        outline:none;
    }
    
`