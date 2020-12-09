import React, { useState } from 'react';
import axios from 'axios'
import { FligthSearch } from './components/FlightSearch';
import { FlightResult } from './components/FlightResult';
import styled from 'styled-components'
import { Loading } from './components/Loading';
import { WelcomeCompoent } from './components/WelcomeComponent';
import { MissingFlight } from './components/MissingFlight';

const ACCESS_TOKEN = '1|MN9ruQV0MFEsgOzMo8crw8gB575rsTe2H5U1y2Lj'
const URL = 'https://recruitment.shippypro.com/flight-engine/api'

axios.interceptors.request.use(config => {
  config.headers.authorization = `Bearer ${ACCESS_TOKEN}`
  return config
},
  error => {
    return Promise.reject(error)
  }
)

function App() {
const [flightList, setFlightList] = useState([])
const [departure, setDeparture] = useState()
const [destination, setDestination] = useState()
const [direction, setDirection] = useState({from:'', to:''})
const [loading, setLoading] = useState(false)
const [requestError, setRequestError] = useState('')

//get flight function
const getFlight = async () => { 
  if( isNaN(departure) && isNaN(destination) && departure !== undefined && destination !== undefined){

      setLoading(true)
      const URL_FROM_TO =`${URL}/flights/from/${departure}/to/${destination}`
      const responseFlifght =  await axios.get(URL_FROM_TO)
      .then(res =>{
        const sortFlight = res.data.data.sort((a,b) => a.price - b.price)
        setFlightList(sortFlight)
        setRequestError(false)
        setDirection({from:departure,to:destination})
        setLoading(false)
      }
      ).catch(err => {
        setRequestError('I\'m sorry...something wrong, might you have lost your wanted flight... ');
        setLoading(false)
      })
      return responseFlifght
  } else {
    setRequestError('Enter data correctly')
  }
  
   
}
  


//set departure and destination function onChange
const handleDeparture = e =>{
  const departureValue = e.target.value
  setDeparture(departureValue.toUpperCase())

}
const handleDestination = e =>{
  const destinationValue = e.target.value
  setDestination(destinationValue.toUpperCase())


}
// change value input function
const invertFlightOrder = () =>{
  setDeparture(destination)
  setDestination(departure)
}
// resect funtion
const resetFuntion = () => {
  setRequestError(false)
  setDeparture('')
  setDestination('')
}
//validation input
const verifyInput = (a,b) => {
  if(a.lenght === 3 && b.lenght === 3 && !isNaN(a) && !isNaN(b)){
  return true
  } else { 
    setRequestError('Enter data correctly')
    return null
  }
} 
  return (
   
    <AppWrap className="App">
      <Header>
        <Container>
          <H1> Find a flight and plain your next adventure!</H1>
        
          <FligthSearch from={departure} 
                      to={destination} 
                      getFlight={() => getFlight()} 
                      fromOnChange={e => handleDeparture(e)}
                      toOnChange={e => handleDestination(e)}
                      invertFlightOrder={() => invertFlightOrder()}
                      />
          </Container>
        </Header>
        <Container>
      {flightList == 0 && !requestError && <WelcomeCompoent />}
      {loading && <Loading />}
      {requestError ? <MissingFlight message={requestError} reset={() => resetFuntion()} /> : <FlightResult flight={flightList} direction={direction} />}
        </Container>
      
  
    
    </AppWrap>
  );
}
const Container = styled.div`
  width:80%;
  margin 0 auto
`
const H1 = styled.h1`
color:#ffffff
`
const Header = styled.header`
  width:100%;
  padding: 50px 0;
  border-radius-bottom-left:50%;
  border-radius-bottom-right:50px;
  background:linear-gradient(#0b63f6, #003cc5)

`

const AppWrap = styled.div`
  display:flex;
  align-items:center;
  text-align:center;
  flex-direction:column
`

export default App;
