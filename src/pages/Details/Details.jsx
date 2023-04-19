
import { Header } from "../../components/header"
import { Section } from "../../components/section"
import { Container,Links,Content } from "./styles"
import { Button } from '../../components/button'
import { Tag } from "../../components/tag"
import { ButtonTXT } from "../../components/buttonTXT"
import { useParams,useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../services/api"

export function Details() {
  const [data,setData]=useState(null)
  const params= useParams()
  const navigate= useNavigate()


  function handleBack(){
    navigate(-1)
  }
async function handleRemove(){

  const confirm= window.confirm("Deseja mesmo excluir ?")

  if(confirm){
    await api.delete(`/notes/${params.id}`)
    alert("Nota deletada")
    navigate(-1)
  }
}

useEffect(()=>{
  async function fetchnotes(){
  const response = await api.get(`/notes/${params.id}`)
  setData(response.data)
  }
  fetchnotes()
},[])

  return (
    <Container>
        <Header/>
        {data &&
          <main>
          <Content>
           
            <ButtonTXT 
            title="Excluir Nota"
            onClick={()=>{handleRemove()}}
            />

            <h1>{data.title}</h1>
            <p>{data.description}</p>
            {  data.links && 
            <Section title= "Links">
              <Links>
                {data.links.map(link=>(
                  <li key={String(link.id)}>
                    <a href={link.url} target="_blank">{link.url}</a>
                  </li>))
                  }
                </Links>
            </Section>
            }
            {data.tags &&
              <Section title= "Marcadores">
                {data.tags.map(tag=>(
                    <Tag 
                    key={String(tag.id)}
                    title= {tag.name}
                    />
                ))

                }
              
              
            </Section>
            }
            <Button 
            title="voltar"
            onClick={handleBack}/>
          </Content>
        </main>
        }
      </Container>
  )
};
