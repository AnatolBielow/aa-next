import styled from "styled-components";

export const ContentWrapper = styled.div`
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 1.2rem;
  padding: 15px;
  line-height: 1.5rem;
  max-width: 800px;
  margin-bottom: 15px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  height: fit-content;
  @media (min-width: 767px) {
    max-width: 1200px;
  }

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
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
