import {React, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { useWindowScroll } from 'react-use';

// const data = [
//   {name: "Total Distance", value: 20}
// ]

const Container = styled.div`
  width: 100%;

  p.before {
    font-size: ${props => props.theme.fontmd};
    color: ${props => props.theme.body};
    position: relative;
    top: 175px;
    left: 70px;
  }

  p.after {
    font-size: ${props => props.theme.fontmd};
    color: ${props => props.theme.body};
    position: relative;
    bottom: 16px;
    left: 465px;
  }
`

const BackgroundCircle = styled.div`
  box-sizing: border-box;
  width: 350px;
  height: 175px;
  margin: 0 auto;
  padding: 0;
  list-style-type: none;
  position: relative;
  overflow: hidden;

  ::before {
    content: 'b';
    color: white;
    box-sizing: border-box;
    position: absolute;
    content: '';
    width: inherit;
    height: inherit;
    border: 15px solid ${props => props.theme.carouselColor};
    border-bottom: none;
    border-top-left-radius: 175px;
    border-top-right-radius: 175px;
  }

  &:hover {
    .value {
      animation: chartAni2 1s ease-out 1 forwards;
    }
  }

  @keyframes chartAni2{
    0%{transform: rotateZ(0deg)}
    20%{transform: rotateZ(${props => props.sum * 180 / 33 * 0.4}deg)}
    // 100%{transform: rotateZ(105deg)}
    100%{transform: rotateZ(${props => props.sum * 180 / 33}deg)}
  }  
`
const Value = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 100%;
  left: 0;
  width: inherit;
  height: inherit;
  border: 120px solid;
  border-top: none;
  border-bottom-left-radius: 175px;
  border-bottom-right-radius: 175px;
  transform-origin: 50% 0;

  z-index: 2;
  border-color: ${props => props.theme.themeColor};

  // transform: rotateZ(105deg);
  transform: rotateZ(${props => props.sum * 180 / 33}deg);

  display: flex;
  justify-content: left;
  align-items: bottom;
  color: ${props => props.theme.body};

  span {
    // transform: rotateZ(-105deg);
    transform: rotateZ(-${props => props.sum * 180 / 33}deg);
    font-size: ${props => props.theme.fontmd};
    position: absolute;
    // right: 190px;
    left:30px;
  }

  .scrolled {
    color: blue;

    // animation: chartAni1 1s linear 1 forwards;

    // @keyframes chartAni1{
    //   0%{transform: rotateZ(0deg);}
    //   100%{transform: rotateZ(105deg)}
    // }  
  }

`

const StatusChart = ({backendData}) => {

  const ref = useRef();
  
  // const value = document.getElementsByClassName('value');

  // window.addEventListener("scroll", function(){
  //   let height = window.scrollY;
  //   console.log('ScrollY', height, ref.current.style);

  //   if (height > 1300) {

  //     ref.current.style.animation = "chartAni2 1s ease-in 1 forwards";
      
  //   }

  // })
  // const {y} = useWindowScroll();

  // useLayoutEffect(() => {
    // console.log(y)
  //   if (y > 1300) {
  //     ref.current.classList.add("scrolled");
  //   } else {
  //     ref.current.classList.remove("scrolled");
  //   }
  // })

  return(
    <Container>
      <p className="before">0</p>

      <BackgroundCircle>
        <Value className="value" ref={ref} sum={backendData}><span>{backendData}</span></Value>
      </BackgroundCircle>
      
      <p className="after">33</p>
    </Container>
  )
}

export default StatusChart;