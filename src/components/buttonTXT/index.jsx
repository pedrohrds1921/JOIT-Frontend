import { Container } from "./styles";


export function ButtonTXT({title,...rest}){
return(
    <Container type="button"
    {...rest}>

    {title}
    </Container>
)

}