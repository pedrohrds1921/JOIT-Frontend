import{Container,Brand,Menu,Content,Search,NewNotes}from './styles';

import { Header } from "../../components/header";
import { Section } from "../../components/section";
import { Filter} from "../../components/filter";
import { Input } from "../../components/input";
import { Note } from "../../components/note"
import { Loading } from '../../components/loading/loading';
import { useNavigate } from 'react-router-dom';

import { useState,useEffect } from 'react';
import { api } from '../../services/api'

import {FiPlus,FiSearch} from "react-icons/fi"



export function Home(){
const [tags, setTags]= useState([])
const [tagsSelected, setTagsSelected]= useState([])
const [search,setSearch]=useState([])
const [notes,setNotes]=useState([])
const [load,setLoad]=useState(false)
const navigate= useNavigate()

function handleTagsSelected(tagName){
    if(tagName === "all"){
        return setTagsSelected([])
    }
    const alreadySelected=tagsSelected.includes(tagName)
    if(alreadySelected){
        const filteredTags=tagsSelected.filter(tag=>tag !== tagName)
        setTagsSelected(filteredTags)

    }else{
        setTagsSelected(prevState=> [...prevState,tagName])
    }
}

function handleDetails(noteID){
navigate(`/details/${noteID}`)

}

useEffect(()=>{
async function fechTags(){
const response= await api.get("/tags")
setTags(response.data)

}
fechTags()

},[])

useEffect(()=>{
async function fechNotes(){
    const response= await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
    setLoad(true)
    setNotes(response.data)
}
fechNotes()

},[tagsSelected,search])

    return(
        <Container>
            <Brand>
                <svg width="120" height="120" viewBox="0 0 343 167" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="54" width="343" height="113" fill="#0B0033"/>
    <path d="M55.8198 154.221C51.2218 154.221 47.0511 153.122 43.3076 150.925C39.6048 148.728 36.6751 145.696 34.5186 141.831C32.4027 137.924 31.3447 133.57 31.3447 128.769V122.971C31.3447 122.645 31.5075 122.482 31.833 122.482H45.9932C46.3187 122.482 46.4814 122.706 46.4814 123.154V128.769C46.4814 131.821 47.3563 134.323 49.106 136.276C50.8556 138.189 53.0936 139.145 55.8198 139.145C58.3426 139.145 60.5195 138.107 62.3506 136.032C64.1816 133.916 65.0972 131.495 65.0972 128.769V66.6353C65.0972 66.3097 65.2599 66.147 65.5854 66.147H79.6235C79.9491 66.147 80.1118 66.3504 80.1118 66.7573L80.2339 128.769C80.2339 133.326 79.1353 137.538 76.938 141.403C74.7 145.31 71.75 148.422 68.0879 150.742C64.4258 153.061 60.3364 154.221 55.8198 154.221ZM112.766 154.221C108.33 154.221 104.241 153.081 100.498 150.803C96.7948 148.524 93.804 145.493 91.5254 141.708C89.2874 137.884 88.1685 133.693 88.1685 129.135L88.2905 89.5234C88.2905 84.8848 89.4095 80.714 91.6475 77.0112C93.8447 73.2677 96.8151 70.277 100.559 68.0391C104.302 65.7604 108.371 64.6211 112.766 64.6211C117.323 64.6211 121.412 65.7401 125.034 67.978C128.696 70.216 131.625 73.2271 133.823 77.0112C136.061 80.7547 137.18 84.9255 137.18 89.5234L137.302 129.135C137.302 133.693 136.203 137.863 134.006 141.647C131.768 145.472 128.798 148.524 125.095 150.803C121.392 153.081 117.282 154.221 112.766 154.221ZM112.766 139.145C115.288 139.145 117.486 138.128 119.357 136.093C121.229 134.018 122.165 131.699 122.165 129.135L122.043 89.5234C122.043 86.7565 121.168 84.4168 119.418 82.5044C117.669 80.592 115.451 79.6357 112.766 79.6357C110.202 79.6357 108.005 80.5716 106.174 82.4434C104.343 84.3151 103.427 86.6751 103.427 89.5234V129.135C103.427 131.861 104.343 134.222 106.174 136.215C108.005 138.168 110.202 139.145 112.766 139.145ZM173.435 153H159.335C158.969 153 158.786 152.797 158.786 152.39V81.1006H142.551C142.144 81.1006 141.94 80.8971 141.94 80.4902L142.062 66.5132C142.062 66.1877 142.225 66.0249 142.551 66.0249H190.036C190.484 66.0249 190.708 66.1877 190.708 66.5132V80.4902C190.708 80.8971 190.545 81.1006 190.219 81.1006H173.801L173.923 152.39C173.923 152.797 173.76 153 173.435 153ZM244.052 153H229.892C229.485 153 229.282 152.797 229.282 152.39L229.404 66.5132C229.404 66.1877 229.567 66.0249 229.892 66.0249H243.93C244.256 66.0249 244.418 66.1877 244.418 66.5132L244.541 152.39C244.541 152.797 244.378 153 244.052 153ZM282.199 153H268.1C267.734 153 267.551 152.797 267.551 152.39V81.1006H251.315C250.909 81.1006 250.705 80.8971 250.705 80.4902L250.827 66.5132C250.827 66.1877 250.99 66.0249 251.315 66.0249H298.801C299.248 66.0249 299.472 66.1877 299.472 66.5132V80.4902C299.472 80.8971 299.309 81.1006 298.984 81.1006H282.565L282.688 152.39C282.688 152.797 282.525 153 282.199 153Z" fill="#EEF1EF"/>
                </svg>
            </Brand>
            <Header/>
            <Menu>
               <li><Filter
                title="TODOS"
                onClick={()=>{handleTagsSelected("all")}}
                isActive = {tagsSelected.length==0}
                /></li>
                {
                    tags && tags.map(tag=>(
                        <li>
                        <Filter 
                        key={String(tag.id)}
                        title={tag.name}
                        onClick={()=>{handleTagsSelected(tag.name)}}
                        isActive = {tagsSelected.includes(tag.name)}
                        /></li>
                    ))
                }
            
            </Menu>
            <NewNotes to="/new" >
            CRIAR NOTA
            <FiPlus/>
            </NewNotes>
            <Search>
         
            <Input 
            placeholder="Pesquisar pelo título" sempre
            onChange={(e)=> setSearch(e.target.value)}
            icon={FiSearch}/>
            

            </Search>
            <Content>
                <Section title="Minhas notas">
              {!load &&<Loading/>}
              {load && notes.length<=0 && <h1>Sem notas</h1>}
              
                    {
                        notes.map(note=>(
                            <Note 
                            key={String(note.id)}
                            data={note}
                            onClick={()=>{handleDetails(note.id)}}
                            />
                        ))
                    }
                </Section>


            </Content>


        </Container>

    )


}