import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const Text = styled.h2`
  width: 80%;
  font-size: ${props => props.theme.fontxl};
  text-transform: capitalize;
  color: ${props => props.theme.body};
  
  span {
    font-size: ${props => props.theme.fontlg};
    font-family: "Kalam", cursive;
  }

  span.distance {
    color: ${props => props.theme.themeColor};
  }
`

const StatusText = ({backendData}) => {
  const remainingDistance = 33 - backendData;
  console.log('Distance Left:', remainingDistance);
  return (
    <Text><span class="distance">{remainingDistance}km</span> away from the 
      <Typewriter
        options={{autoStart: true,
          loop: true}}
        onInit={(typewriter) => {
        typewriter.typeString("1st Stop")
          .pauseFor(2000)
          .deleteAll()
          .typeString("1st NFT Minting")
          .pauseFor(2000)
          .deleteAll()
          .start();
        }}
      />
    </Text>
  )
}

export default StatusText;