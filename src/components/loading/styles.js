import styled ,{ keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container= styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-Items:center;

>svg{


animation: ${rotate} .9s linear infinite;
}

`