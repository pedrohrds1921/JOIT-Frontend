import { Container } from "./styles";
import {BiLoaderAlt} from "react-icons/bi"


export function Loading({value}){
    return(
        <Container >
        <BiLoaderAlt size={value ? value : 80}/>

        </Container>
    )
}