import { Container } from "./styles";


export function Filter({title, isActive=false,...rest}){
return(
    <Container type="button"
    isActive={isActive}
    {...rest}>

    {title}
    </Container>
)

}