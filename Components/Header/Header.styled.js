import styled from "styled-components";
import Image from "next/image"
export const HeaderStyled = styled.header`
  display: flex;
  font-size: calc(10px + 2vmin);
  color: white;
  height: 154px;
  width: 100%;
`;

export const Logo = styled.div` 
display: block;
box-sizing: border-box;
width: 154px;

  pointer-events: none;
  padding: 2vmin;
  @media (min-width: 1200px) {
    padding: 25px;
  }
`