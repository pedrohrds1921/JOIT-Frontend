import styled from "styled-components";



export const Container = styled.button`
    width:100%;
    background-color: ${({theme})=>theme.COLORS.PRIMARY_COLOR};

    height:56px;
    border:0;
    padding:0 16px;
    margin-top:16px;
    border-radius:5px;
    font-weight:500;
    color:${({theme})=>theme.COLORS.WHITE};


    &:disabled{
        opacity:0.8;
        color:${({theme})=>theme.COLORS.GRAY_100};
        cursor: wait
    }

`