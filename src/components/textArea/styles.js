import styled from "styled-components";


export const Container= styled.textarea`
width:100%;
height:150px;
background-color:${({theme})=>theme.COLORS.ROXO_2};
margin-bottom:8px;
border-radius:10px;
border: none;
resize:none;
padding:10px 30px;
color:${({theme})=>theme.COLORS.WHITE};
&::placeholder{
        color:${({theme})=>theme.COLORS.WHITE};
        
    }
&:focus{
        outline:2px solid ${({theme})=>theme.COLORS.ROXO};      border-radius:11px;    
    }
&.border{
    border: 3px solid red;
    }
`