
import { Container, Profile, Logout } from "./styles";

import {AiOutlinePoweroff } from "react-icons/ai";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import  avatarPlaceHolder from "../../assets/avatar_placeholder.svg"
import { useNavigate } from "react-router-dom";

export function Header(){

    const {singOut,user}=useAuth()
    const navigate=useNavigate()

    function handlesingOut(){
        navigate("/")
        singOut()
    }

    const avatarUrl= user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`:avatarPlaceHolder

    return(
        <Container>
            <Profile to= "/profile">
                <img src={avatarUrl} alt="Foto do usuario"/>
                <div>
                    <span>Bem Vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>
            <Logout onClick={handlesingOut}>
                <AiOutlinePoweroff/>
            </Logout>
        </Container>
    );
}