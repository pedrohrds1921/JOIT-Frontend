import styled from "styled-components";


export const Container= styled.div`
width:100%;

display:flex;
align-items:center;
background-color:${({theme})=>theme.COLORS.ROXO_2};
color:${({theme})=>theme.COLORS.GRAY_300};
margin-bottom:8px;
border-radius:10px;
position:relative;

>input{
    height:56px;
    width:100%;
    padding:10px 30px;
    background-color:${({theme})=>theme.COLORS.ROXO_2};
    border: none;

    border-radius:10px;
    color:${({theme})=>theme.COLORS.WHITE};

    &.border{
    border: 3px solid red;
    }
    &::placeholder{
        color:${({theme})=>theme.COLORS.WHITE};
        
    }
    &:focus{
        outline:2px solid ${({theme})=>theme.COLORS.ROXO};      border-radius:11px;    
    } 
   
   
}


   
    >svg{
    color:${({theme})=>theme.COLORS.WHITE};
    position:absolute;
    margin-left:10px;
}





`