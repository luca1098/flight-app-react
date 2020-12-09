import React from 'react'
import styled, { keyframes } from 'styled-components'
export const Loading = () => {
return(   
      <BallWrap>
        <Ball />
        <Ball />
        <Ball />
      </BallWrap>

)
}
const loadingAnimated = keyframes`
    0% { transform: translate(0, 0); }
    50% { transform: translate(0, 15px); }
    100% { transform: translate(0, 0); }
`
const BallWrap = styled.div`
    margin:20px auto;
`
const Ball = styled.div`
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 15px;
    margin-left:5px;
    background: #003cc5;
        &:nth-last-child(1) {
            animation: ${loadingAnimated} 0.6s 0.1s linear infinite;
        
            };
        &:nth-last-child(2) {
            animation: ${loadingAnimated} 0.6s 0.2s linear infinite;
            };
        &:nth-last-child(3) {
            animation: ${loadingAnimated} 0.6s 0.3s linear infinite;
            margin-left:0px;
            };
      

`
  
  
  
  