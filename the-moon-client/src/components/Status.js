import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import StatusText from './StatusText';
import StatusChart from './StatusChart';

const Section = styled.section`
  width: 100%; 
  background-color: ${props => props.theme.text};
  positoin:relative;
`
const Container = styled.div`
  width: 75%;
  min-height: 60vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center; 
`
const Box = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
// const Records = styled.ul`
//   list-style: none;
// `
// const RecordItem = styled.li`
//   color: #444;
// `

const Status = () => {

  const [backendData, setBackendData] = useState(null);

  useEffect(()=> {
      fetch("http://localhost:3003/api/sum")
      .then(
        res => res.json())
      .then(
        data => {setBackendData(data); console.log('sum received:', data)}
      )
  }, [])

  return (
  <Section id="status">
    <Container>
      <Box>
        <StatusText backendData={backendData}/>
      </Box>
      <Box>
        <StatusChart backendData={backendData}/>
      </Box>
    </Container>  
  </Section>
  )
}

export default Status;
