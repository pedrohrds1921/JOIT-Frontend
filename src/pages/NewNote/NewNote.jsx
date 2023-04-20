
import { Header } from "../../components/header"
import { Section } from "../../components/section"
import { Container,Links,Content,Form,} from "./styles"
import { Button } from '../../components/button'
import { Tag } from "../../components/tag"
import { ButtonTXT } from "../../components/buttonTXT"
import { Input } from "../../components/input"
import { TextArea } from "../../components/textArea"
import { Noteitem } from "../../components/noteItem"
import { Link,useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react"


export function NewNote() {
const [title, setTitle]=useState("")
const [description, setDescription]=useState("")
const [links, setLinks]=useState([])
const [ newLink, setNewLinks]=useState("")
const [tags, setTags]=useState([])
const [ Newtags, setNewtags]=useState("")
const [border,setborder]=useState(false)
const navigate= useNavigate()

function handleAddLink(){
  setLinks(prevState=>[...prevState,newLink])
  setNewLinks('')
}

function handleBack(){
  navigate(-1)
}
function handleRemoveLink(deleted){
  setLinks(prevState=> prevState.filter(link=>link !==deleted))

}
function handleAddTags(){
  setTags(prevState=>[...prevState,Newtags])
  setNewtags('')
}
function handleRemoveTag(deleted){
  setTags(prevState=> prevState.filter(tags=>tags !==deleted))
}

async function handleNewNote(){

  if (title == "" || description==""){
    setborder(true)
    return alert('Insira um titulo e descrição para salva a nota ')
  }
  if(Newtags){
    return alert("Para adicionar a tags clique no icone de +")

  }
  if(newLink){
    return alert("Para adicionar a link clique no icone de +")

  }
  await api.post("/notes",{
    title,
    description,
    tags,
    links
  })
  

  alert("Nota Criada")
  navigate("/")
}

  return (
    <Container>
        <Header/>
        <main>
          <Content>
           <Form>
              <header>
                <h1>Criar nota</h1>
              <ButtonTXT 
              title="Voltar"
              onClick={handleBack}
              />
              </header>
            
              <Input 
              className={border ? 'border' : ''}
              type="text" 
              placeholder="Titulo"
              onChange= {e=>setTitle(e.target.value)}
              />
              <TextArea 
               className={border ? 'border' : ''}
              placeholder="Observações"
              onChange= {e=>setDescription(e.target.value)}
              />  
            </Form>
            <Section title= "Links uteis">
              {
                links.map((link,index)=>(
                  <Noteitem 
                    value={link}
                    key={String(index)}
                    onClick={()=>{handleRemoveLink(link)}}
                  />
                ))
              }
            <Noteitem 
            isNew 
            placeholder="Novo link" 
            value={newLink}
            onChange= {e=>setNewLinks(e.target.value)}
            onClick={handleAddLink}
            />
            </Section>
            <Section title= "Marcadores">
             <div className="tags">
              
              {
                tags.map((tag,index)=>(
                  <Noteitem
                  key={String(index)}
                  value={tag}
                  onClick={()=>{handleRemoveTag(tag)}}
                  />

                ))
              }

                <Noteitem isNew 
                placeholder="Nova tag" 
                onChange= {e=>setNewtags(e.target.value)}
                value={Newtags}
                onClick={handleAddTags}
                />
              
             </div>
            </Section>
            <Button title="Salvar" onClick={handleNewNote}/>
          </Content>
        </main>
      </Container>
  )
};
