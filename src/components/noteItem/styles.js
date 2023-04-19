import styled from "styled-components";


export const Container= styled.div`
width:100%;
display:flex;
align-items:center;
background-color:${({theme,isNew})=> isNew? "transparent":theme.COLORS.ROXO_2};
color:${({theme,isNew})=> isNew? theme.COLORS.BLUE:theme.COLORS.ROXO_2};
border:${({theme,isNew})=> isNew? `2px dashed ${theme.COLORS.BLUE} `:"none"};
margin-bottom:8px;
border-radius:10px;
position:relative;
padding-right:16px;

>input{
    height:56px;
    width:100%;
    padding:12px;
    background-color:transparent;
    border: none;
    color:${({theme,isNew})=> isNew? theme.COLORS.BLUE:theme.COLORS.WHITE};
    &::placeholder{
        color:${({theme,isNew})=> isNew? theme.COLORS.BLUE:theme.COLORS.WHITE};
        
    }&:focus{
        outline:none;      
        
    } 
    
}

>button{
    
    background-color:transparent;
    border: none;
    font-size:20px;
}

.btn-delete{
    color:${({theme})=>theme.COLORS.RED};
}
.btn-add{
    color:${({theme})=>theme.COLORS.GREEN};
}







`