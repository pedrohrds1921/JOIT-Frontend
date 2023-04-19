import { Container,Form, Avatar} from "../Profile/styles";
import { FiArrowLeft, FiUser,FiMail,FiLock, FiCamera} from "react-icons/fi";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import  avatarPlaceHolder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api";

export function Profile (){
const {user,updateProfile}=useAuth()
const avatarUrl= user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` :avatarPlaceHolder
const [name, setName]=useState(user.name)
const [email, setEmail]=useState(user.email)
const [oldpassword, setOldpassword]=useState()
const [newPassword, setnewPassword]=useState()
const [avatar,setAvatar]=useState(avatarUrl)
const [avatarFile,setAvatarFile]=useState(null)
const navigate=useNavigate()

function handleBack(){
    navigate(-1)
  }

async function handleUpdate(){
    const user= {
        name,
        email,
        password:newPassword,
        old_password:oldpassword
    }
    await updateProfile({user,avatarFile})

}

function handleChangeImage(e){
    const file = e.target.files[0]
    setAvatarFile(file)
    const imagePreview=URL.createObjectURL(file)
    setAvatar(imagePreview)
}

    return(
        <Container>
            <header>
                <button 
                onClick={handleBack}>
                <FiArrowLeft />
                </button>
              
                
            </header>

             <Form>
                <Avatar>
                    <img src={avatar} 
                    alt="Foto do usuario"
                    />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input 
                        type="file" 
                        id="avatar"
                        onChange={handleChangeImage}
                         />
                    </label>
                </Avatar>
                <Input 
                    type="text"
                    icon= {FiUser} 
                    placeholder="Nome"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                />
                <Input 
                    type="text"
                    icon= {FiMail}
                    placeholder="E-mail"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                   />
                <Input 
                type="password"
                icon= {FiLock} 
                placeholder="Senha atual"
                onChange={e=>setOldpassword(e.target.value)}
                />
                <Input
                    type="password"  
                    icon= {FiLock} 
                    placeholder="Nova Senha"
                    onChange={e=>setnewPassword(e.target.value)}
                    />
                <Button title="Salvar" onClick={handleUpdate}/>
             </Form>



        </Container>
    )
}