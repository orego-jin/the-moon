import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Button from './Button';

const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.themeColor};
  // position: sticky; 
  top: 0;
  z-index: 100;
`

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.25rem;
  width: 90%;
  height: ${props => props.theme.navHeight};
  margin: 0 auto;
`

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items; center;
  list-style: none;
`
const MenuItems = styled.li`
  margin: 0 1rem;
  cursor: pointer;
  color: ${props => props.theme.text};
  font-size: ${props => props.theme.fontlg};
  // font-weight: bold;

  &::after {
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text}; 
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`


const Navigation = () => {

  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }
  
  return (
    <Section id="navi">
      <NavBar>
        <Logo />
        <Menu>
          <MenuItems onClick={ () => scrollTo('home') }>Home</MenuItems>
          <MenuItems onClick={ () => scrollTo('album') }>Album</MenuItems>
          <MenuItems onClick={ () => scrollTo('status') }>Status</MenuItems>
          <MenuItems onClick={ () => scrollTo('records') }>Records</MenuItems>
        </Menu>
        <Button text="Connect Wallet" link="https://google.com"/>
      </NavBar>
    </Section>
  )
}
 
export default Navigation;