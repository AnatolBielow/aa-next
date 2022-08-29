import styled from "styled-components";

export const PostContainer = styled.div` 

width: 200px;
background-color: rgba(255,255,255,0.8);
-webkit-box-shadow: 0px 4px 11px 1px rgba(0,0,0,0.4); 
box-shadow: 0px 4px 11px 1px rgba(0,0,0,0.4);
`

export const List = styled.ul`
 display: flex;
flex-direction: row-reverse;
flex-wrap: wrap-reverse;
justify-content: space-around;
width: 100%;
`

export const PrewievCard = styled.div` 
box-sizing: border-box;

width: 300px;
margin: 0 auto;
padding: 15px;
border-radius: 5px;
background-color: rgba(255,255,255,0.8);
-webkit-box-shadow: 0px 4px 11px 1px rgba(0,0,0,0.4); 
box-shadow: 0px 4px 11px 1px rgba(0,0,0,0.4);
transition: all 250ms ease-in-out;
@media(min-width:767px) {
    width: 600px;
}
&:hover, &:focus {
    transform: scale(1.05)
}
margin-bottom: 10px;

`

export const Title = styled.h2`
font-size: 1.2rem;
font-weight: 700;

`
export const Description = styled.p` 

margin-top: 10px;
font-size: 1rem;
font-weight: 700;

`