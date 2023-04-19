import { Container } from "./styles";
import {FiSearch} from "react-icons/fi"


export function Input({icon:Icon,...rest}){


    return(
        <Container>
            
 
            {Icon && <Icon size={15}/>}
            <input  {...rest} />
        </Container>
    )
}