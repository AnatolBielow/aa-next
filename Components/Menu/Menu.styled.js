import styled from "styled-components";

export const MenuWrapper = styled.div`
  @media (min-width: 1200px) {
    margin-left: auto;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 80vw;
  background-color: ${({theme})=>theme.primaryBackground};
  position: fixed;
  z-index: 9998;
  top: 0;
  right: 0;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s ease-in-out;
  @media (min-width: 1200px) {
    flex-direction: row;
    position: static;
    height: auto;
    width: auto;
    transform: none;

    background-color: transparent;
  }
`;
export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9997;
  top: 0;
  left: 0;
  display: flex;
  background-color: #00000080;
  transform: scale(${({ open }) => (open ? 1 : 0)});
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: opacity 0.4s ease-in-out;
 

`;
export const NavigationList = styled.ul`
  display: flex;
  height: 100vh;
  width: 70vw;
  flex-direction: column;
  margin: 30px 0;
  padding: 0 30px;
  @media (min-width: 1200px) {
    margin: 30px 0 40px 0;
    flex-direction: row;
    height: auto;
    width: auto;
    margin-left: auto;
  }
`;

export const NavigationItem = styled.li`
  list-style-type: none;
  padding: 20px;
  text-transform: uppercase;
`;
export const NavLink = styled.a`
  color: ${({theme})=>theme.primaryText};
  cursor: pointer;
  font-size: 1.5rem;
  padding: 10px;
  letter-spacing: 0.2rem;
  font-weight: 700;
  transition: color 0.3s ease-in-out;
  &:hover,
  &:focus {
    color: ${({theme})=>theme.accent};
    
  }
  &.active {
    color: ${({theme})=>theme.accent2};
  }
  
  @media (min-width: 1200px) {
    font-size: 1rem;
  }
`;
