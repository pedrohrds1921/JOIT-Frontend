import styled from "styled-components";


export const Container = styled.button`

width:100%;
border:none;
border-radius:10px;
padding:22px;
margin-bottom:16px;
background-color:${({theme})=>theme.COLORS.BACKGROUND_800};
text-align:left;
>h1{
    color:${({theme})=>theme.COLORS.BLUE};
    margin-bottom:8px;
    
}

`