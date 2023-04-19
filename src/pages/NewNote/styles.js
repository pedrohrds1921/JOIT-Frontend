import styled from "styled-components";

export const Container = styled.div`
width:100%;
height:100vh;

display:grid;
grid-template-rows:105px auto;
grid-template-areas:
"header"
"content";

.tags{
    display: grid;
    grid-template-columns: 49% 50%; 
    gap: 8px;
}
>main{

    grid-area:content;
    overflow-y:scroll;
    padding:64px 0;
}


`
export const Links = styled.ul`
list-style:none;

>li{

    margin-top:12px;

    a{
        color:${({theme})=>theme.COLORS.BLUE}
    }
}

`
export const Content = styled.div`
max-width:550px;
padding:20px;
margin:0 auto;
display:flex;
flex-direction:column;
>button:first-child{
    align-self:flex-end;
}
`
export const Form = styled.form`
>header{
    display:flex;
    align-items:center;
    justify-content:space-between;
}
input:nth-child(2){
    height:150px;

}
`
