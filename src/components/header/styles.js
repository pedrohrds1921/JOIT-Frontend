import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`

grid-area: header;
height:105px;
width:100%;
border-bottom:1px solid ${({theme})=>theme.COLORS.BACKGROUND_800};
display:flex;
justify-content:space-between;
padding:0 80px;

`

export const Profile = styled(Link)`

display:flex;
align-items:center;
>img{
    width:56px;
    height:56px;
    border-radius:50%;
}


>div{
    display:flex;
    flex-direction:column;
    margin-left:16px;
    line-height:24px;
    span{
        font-size:14px;

    }
    strong{
        font-size:18px;
        
    }
}
`

export const Logout = styled.button`
border:none;
background:none;

&:hover{
    filter: brightness(1);
}
>svg{
   font-size:30px;
   &:hover{
    COLOR:${({theme})=>theme.COLORS.ROXO};

   }
}

`

