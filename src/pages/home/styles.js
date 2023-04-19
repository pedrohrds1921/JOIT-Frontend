import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container=styled.div`
width:100%;
height:100vh;
display:grid;
grid-template-columns:250px auto;

grid-template-rows:105px 128px auto 64px;
grid-template-areas: 

"brand header"
"menu search"
"menu content"
"newNotes content"


`
export const Brand=styled.div`
grid-area:brand;
display:flex;
align-Items:center; 
justify-content:center;
background-color:${({theme})=>theme.COLORS.GRAY};
border-bottom:1px solid ${({theme})=>theme.COLORS.BACKGROUND_800};
border-right:1px solid ${({theme})=>theme.COLORS.BACKGROUND_800};
`
export const Menu=styled.ul`
grid-area:menu;
background-color:${({theme})=>theme.COLORS.GRAY};
padding-top:64px;
text-align:center;
>li{
    margin-bottom:24px;
    list-style:none;
    font-family: 'Koulen', cursive;
}
border-right:1px solid ${({theme})=>theme.COLORS.BACKGROUND_800};

`
export const Content=styled.div`
grid-area:content;
padding:20px 64px 0;
overflow-y:auto;

`
export const Search=styled.div`
grid-area:search;
padding:64px 64px 0;

`
export const NewNotes=styled(Link)`
grid-area:newNotes;
background-color:${({theme})=>theme.COLORS.BLUE};
border:none;
color:${({theme})=>theme.COLORS.WHITE};
display:flex;
justify-content:center;
align-items:center;
font-size:20px;

>svg{
    margin-left:8px;
}
`