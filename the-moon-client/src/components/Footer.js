import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Instagram from '../assets/Instagram';
import Twitter from '../assets/Twitter';
import Opensea from '../assets/Opensea';

const Section = styled.section`
  background-color: ${props => props.theme.body};
  background-color: ${props => props.theme.footerColor};

  width: 100vw;
  min-height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;  

  position: relative;

`
const Container = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${props => props.theme.text};
`

const Right = styled.div`
  display: flex;
  // flex-direction: column;
  justify-content: right;
  align-items: center;
`
const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  &>*{
    padding-right: 1rem;
    transform: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`

// const MenuItems = styled.ul`
//   list-style: none;
//   width: 50%;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-template-rows: repeat(3, 1fr);
//   grid-gap: 1rem;
// `
// const Item = styled.li`
//   width: fit-content;
//   cursor: pointer;

//   &::after {
//     content: ' ';
//     display: block;
//     width: 0%;
//     height: 2px;
//     background: ${props => props.theme.text}; 
//     transition: width 0.3s ease;
//   }

//   &:hover::after {
//     width: 100%;
//   }
// `

const Bottom = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`


const Footer = () => {
  return (
    <Section>
      <Container>
          <Logo />
        <Right>
          <IconList>
            <a href="" target="_blank" rel="">
            <Instagram />
            </a>

            <a href="" target="_blank" rel="">
            <Twitter />
            </a>

            <a href="" target="_blank" rel="">
            <Opensea />
            </a>

          </IconList>
        </Right>
        {/* <MenuItems>
          <Item>Home</Item>
          <Item>Album</Item>
          <Item>Status</Item>
          <Item>Records</Item>
        </MenuItems> */}
      </Container>
      <Bottom>
        <span>      
          &copy; {new Date().getFullYear()} Sanny All rights reserved.
        </span>
      </Bottom>
    </Section>
  )
}

export default Footer;