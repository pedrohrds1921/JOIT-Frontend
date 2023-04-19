import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box; 
    font-family: 'Poppins', sans-serif;
}

body{
background-color: ${props=>props.theme.COLORS.BACKGROUND_900};

color:${({theme})=>theme.COLORS.BLACK};
}

a{
    text-decoration:none;
}


input{
  cursor: auto;
}



button,a{
    cursor: pointer;
    transition:filter 0.2s;
    background:none;
    border: none;
}

button:hover,a:hover{
filter:brightness(0.7);
}
/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: none;
    scrollbar-color: #92959b #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 9px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #92959b;
    border-radius: 21px;
    border: 0px solid #ffffff;
  }

`