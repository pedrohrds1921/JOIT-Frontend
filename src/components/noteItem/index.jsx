import { Container } from "./styles";
import {FiPlus, FiX} from "react-icons/fi"
export function Noteitem({isNew,value,onClick,...rest}){
    return(
        <Container isNew={ isNew}>
            <input 
            type="text"
            value={value}
            readOnly={!isNew} 
            {...rest} 
            />
            <button
            type="button"
            onClick={onClick}
            className= {isNew ? "btn-add":"btn-delete"}
            >
           
             {isNew ? <FiPlus/>:<FiX/>}   
            </button>
        </Container>
    )
}