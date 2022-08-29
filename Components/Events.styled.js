import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-around;
  min-height: calc(100vh - 210px);
  padding: 15px;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.4)
    ),
    url(${(props) => props.img.src});
  background-size: cover;
  @media (min-width: 767px) {
    flex-direction: row;
  }
  img {
    margin: 10px;
    float: left;
  }
`;
export const List = styled.ul`
  margin-top: 30px;

  @media (min-width: 767px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }
`;

export const ContentWrapper = styled.div`
  font-size: 1.2rem;
  padding: 15px;
  line-height: 1.5rem;
  max-width: 1000px;
  margin-bottom: 15px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  margin-top: 2rem;
`;
export const Description = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const AllLinks = styled.a`
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  margin: 10px auto;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.accent};
  }
`;
