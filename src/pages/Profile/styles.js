import styled from "styled-components";


export const Container= styled.div`
width:100%;

>header{
width:100%;
height:144px;
background:${({theme})=>theme.COLORS.BACKGROUND_800};
display:flex;
align-items:center;
padding:0 124px;
}

svg{
    color:${({theme})=>theme.COLORS.GRAY_300};
    font-size:25px;
}
`

export const Form= styled.form`
width:350px;
margin:-95px auto;

svg{
color:${({theme})=>theme.COLORS.WHITE};
}

>div:nth-child(4){
    margin-top:24px;
}
`


export const Avatar= styled.div`
position:relative;
margin: 0 auto 32px;
width:186px;
height:186px;
img{
    border-radius:50%;
    width:186px;
    height:186px;
    margin: 0 auto 32px;
}
label{
    width:48px;
    height:48px;
    border-radius:50%;
    background-color:${({theme})=>theme.COLORS.BLUE};
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    bottom:7px;
    right:7px;
    cursor: pointer;

    :hover{
        filter:brightness(0.8);
    }

    svg{
        font-size:18px;
    }

    input{
        display:none;

    }
}
`