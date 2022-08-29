import styled from "styled-components";

export const PostContainer = styled.div`
  width: 200px;
  background-color: rgba(255, 255, 255, 0.8);
  -webkit-box-shadow: 0px 4px 11px 1px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 11px 1px rgba(0, 0, 0, 0.4);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const PrewievCard = styled.div`
  box-sizing: border-box;

  width: 300px;
  margin: 0 auto;
  padding: 15px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  -webkit-box-shadow: 0px 4px 11px 1px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 11px 1px rgba(0, 0, 0, 0.4);
  transition: all 250ms ease-in-out;
  @media (min-width: 767px) {
    width: 200px;
  }
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
`;
export const Description = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 700;
`;

export const AllLinks = styled.a`
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 10px auto;
  color: ${({ theme }) => theme.accent};
  text-shadow: 2px 2px 20px #FFFFFF;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.accent2};
  }
  @media(min-width: 767px) {
    font-size: 1rem;
  }
`;
