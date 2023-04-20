import { createContext,useContext,useState,useEffect } from "react";

import { api } from "../services/api";

export const AuthContext= createContext({})


function AuthProvider({children}){
    const [data,setData]=useState({})
    const [error,setError]=useState("")
    async function singIn({email,password}){
        try{  
            const response= await api.post("/sessions",{email ,password})
            const {user,token}=response.data 
            localStorage.setItem("@jotnotes:user",JSON.stringify(user))
            localStorage.setItem("@jotnotes:token",token)
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
             setData({user})
             return 
        }catch(erro){
            if(erro.response){
            
              return {error:erro.response.data.message}
            }
        }

    }
    function singOut(){
        localStorage.removeItem("@jotnotes:token")
        localStorage.removeItem("@jotnotes:user") 
        setData({})
    }
    
    async function updateProfile({user,avatarFile}){
        try{
    
            if(avatarFile){
                const fileUploadForm= new FormData() 
                fileUploadForm.append('avatar',avatarFile)
                const response= await api.patch("/users/avatar",fileUploadForm)
                user.avatar=response.data.avatar
            }
            const usersUpdate=await api.put('/users',user);
            const {data}= usersUpdate
            const {password,...userWithoutPassword}=data
            localStorage.setItem("@jotnotes:user",JSON.stringify(userWithoutPassword))
            setData({user:data,token:data.token})
            
            alert("Usuario Atualizado")
        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }
        }
    }

    useEffect (()=>{
       const token= localStorage.getItem("@jotnotes:token")
       const user= localStorage.getItem("@jotnotes:user")
       if(token&&user){
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        setData({
            token,
            user:JSON.parse(user)
        })
       }
    },[])
    return(
        <AuthContext.Provider value={{singIn,user:data.user,singOut,updateProfile}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context= useContext(AuthContext)

    return context
}


export {AuthProvider, useAuth}