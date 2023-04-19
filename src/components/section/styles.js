import styled from "styled-components";


export const Container = styled.section`

margin: 28px 0;
>h2{
    border-bottom:1px solid ${({theme})=>theme.COLORS.GRAY_100};
    padding-bottom:5px;
    margin-bottom:24px;
}


color:${({theme})=>theme.COLORS.BLUE};
font-size:20px;
font-weight:400;
`