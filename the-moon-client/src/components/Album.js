import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';

const Section = styled.section`
  width: 100%;
  height: ${props => `calc(100vh - ${props.theme.navHeight})` };
  background-color: ${props => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; 
`

const Container = styled.div`
  width: 80%;
  min-height: 80vh;
  margin; 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`

// const Box = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `

const Album = ({selectedSlide}) => {
  return (

    <Section id="album">
      <Container>
        <Carousel selectedSlide={selectedSlide}/>
      </Container>
    </Section>
  )
}

export default Album;