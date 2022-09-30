import React, { useRef, useLayoutEffect } from 'react';
import { useWindowScroll } from 'react-use';

import styled from 'styled-components';

const Up = styled.div`

  box-sizing: border-box;
  width: 3rem;
  height: 3rem;
  margin: 0;
  padding: 0;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};

  font-size: ${props => props.theme.fontxl};
  font-weight: 50;

  position: fixed;
  right: 1rem;
  bottom: 1rem;

  cursor: pointer;

  display: none;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(0.9);
  }

  z-index: 100;
`

const ScrollToTop = () => {

  const ref = useRef(null);
  const {y} = useWindowScroll();

  const scrollTo = () => {
    let element = document.getElementById("navi");
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  useLayoutEffect( () => {
    if(y > 200) {
      ref.current.style.display = "flex";
    } else {
      ref.current.style.display = "none";
    }
  // console.log(y);
  }, [y])

  return (
    <Up ref={ref} onClick = { ()=> scrollTo() }> 
      &#x2191;
    </Up>
  )
}

export default ScrollToTop;