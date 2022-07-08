import React, {useState, useEffect} from "react"
import styled from "styled-components"
import image from "../Images/avatar3.jpg"
// import picture from "../Images/pexels-chait-goli-1918290.jpg"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import {Link, useParams, useNavigate} from "react-router-dom"
import axios from "axios"


const Create = ()=>{
  const navigate = useNavigate()
  const {id} = useParams()
    const [imageDB, setImageDB] = useState("")
    const [avatar, setAvatar] = useState(image)
    const [data, setData] = useState()
    const [toggle, setToggle] = useState(false)

    const yupModel = yup.object().shape({
        name: yup.string().required("This has to be filled"),
        manifesto: yup.string().required("This has to be filled"),
    })
    const {register, reset, handleSubmit, formState:{errors}} =
    useForm({resolver: yupResolver(yupModel)})

    const File = (e)=>{
        const file = e.target.files[0];
        const save = URL.createObjectURL(file);
        setAvatar(save);
        setImageDB(file);
    }

    const addCandidate = handleSubmit (async (data)=>{
      try{
        setToggle(!toggle)
        const {name, manifesto} = data
      const formData = new FormData();
      formData.append("name", name);
      formData.append("manifesto", manifesto);
      formData.append("image", imageDB);
      const config = {
        headers: {
          "content-type": "multipart/formData"
        }
      }
      await axios.post(`https://onevoteback.herokuapp.com/Candidate/${id}`, formData, config)
      reset()
      window.location.reload()
      }catch(error){
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          
          // alert(error.response.data.message);
          console.log(error.response.data.message)
          console.log(error.response.status);
          console.log(error.response.headers);
          } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
              } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
              }
              console.log(error.config);
      }
    })
    const getCandidate = async()=>{
      const res = await axios.get(`http://localhost:7777/Candidates/${id}`)
      setData(res.data.data)
    }

    useEffect(()=> {
      getCandidate()
    }, [])
    return(
        <Container>
            <Wrapper>
            <Voter onClick={()=>{navigate(-1)}}>Back</Voter>
            <Card type="multipart/form-data" onSubmit={addCandidate}>
                <Image src={avatar} alt=""/>
                    <Button htmlFor="pix">Upload</Button>
                    <input type= "file" id="pix" style={{display: "none"}} onChange={File}/>
                    <Label>{errors.name && <p>Please enter the Name.</p>}</Label>
                    <Input placeholder="Candidate Name" {...register("name")}/>
                    <Label>{errors.manifesto && <p>Please enter the Manifesto.</p>}</Label>
                    <Inputs placeholder="Manifesto" {...register("manifesto")}/>
                    {
                      toggle? <Buttons>Adding Candidate...</Buttons>: <Buttons type="submit">Add Candidate</Buttons>
                    }
            </Card>
            <Wrappers>
           <Texts> Created Candidates Will <br/> <span>Appear Here</span></Texts>
        <Holders>
        { 
          data?.map((props)=>(
          <Cards key={props._id}>
            <Images src={props.image} alt="Profile picture"/>
            <Names> {props.name}</Names>
            <Titles> {props.manifesto}</Titles>
            <Votes>Votes: 0</Votes>
          </Cards>
          ))
        }
        </Holders>
      </Wrappers>
        <Buttoner onClick={()=>{navigate(-1)}}>Done</Buttoner>
            </Wrapper>
        </Container>
    )
}
export default Create

const Container = styled.div`
    width: 100%;
    min-height: calc(200vh - 70px);
`
const Wrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Card = styled.form`
    width: 300px;
    min-height: 400px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: white; */
    box-shadow: 0px 3px 10px rgba(0,0,0,0.6);
`
const Button = styled.label`
    background-color: rgba(153, 82, 208, 0.9);
    font-size: 16px;
    border-radius: 5px;
    padding: 5px 40px;
    transform: scale(1);
    transition: all 350ms;
    margin-top: 10px;
    color: white;

    :hover{
        cursor: pointer;
        transform: scale(1.002);
        transition: all 350ms;
        box-shadow: 0px 3px 10px rgba(0,0,0,0.4);
    }
`
const Input = styled.input`
    width: 200px;
    height: 40px;
    border-radius: 3px;
    border: 0.3px solid grey;
    /* background-color: rgb(49,53,55); */
    outline: none;
    margin-top: 10px;
    font-size: 18px;
    color: grey;

    :focus{
        border: 0.3px solid rgba(153, 82, 208, 0.9);
        color: grey;
        font-size: 18px;
        padding: 0 5px;
    }

    ::placeholder{
        color: grey;
        font-size: 18px;
        padding: 0 5px;
    }

    @media Screen and (max-width: 768px){
        height: 30px;
        width: 80%;
    }
`
const Inputs = styled.textarea`
        width: 80%;
        min-height: 100px;
        margin-top: 10px;
        padding: 12px 20px;
        box-sizing: border-box;
        border-radius: 4px;
        border: 0.3px solid grey;
        /* background-color: rgb(49,53,55); */
        font-family: poppins;
        resize: none;
        color: grey;

        :focus{
        border: 0.3px solid purple;
        color: grey;
        font-size: 18px;
        padding: 0 5px;
        } 

        @media Screen and (max-width: 768px){
        height: 30px;
        width: 80%;
    }
`
const Image = styled.img`
    object-fit: cover;
    width: 100px;
    height: 100px;
    border-radius: 100%;
`
const Buttons = styled.button`
    background-color: rgba(153, 82, 208, 0.9);
    font-size: 16px;
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 10px 40px;
    transform: scale(1);
    transition: all 350ms;
    margin-top: 10px;
    color: white;

    :hover{
        cursor: pointer;
        transform: scale(1.005);
        transition: all 350ms;
        box-shadow: 0px 3px 10px rgba(0,0,0,0.4);
    }
`
const Wrappers = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const Texts = styled.div`
  padding: 30px 0;
  font-size: 40px;
  font-family: poppins;
  text-align: center;
  font-weight: 600;

  span{
    color: #3c34a8;
  };

  @media Screen and (max-width: 425px){
    font-size: 30px;
  }
`
const Holders = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const Cards = styled.div`
  width: 250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.5px solid white;
  background-color: #21132D;
  border-radius: 3px;
  padding: 5px 0;
  transform: scale(1);
  transition: all 350ms;
  margin: 5px;

  :hover{
    cursor: pointer;
    transform: scale(1.005);
    transition: all 350ms;
    box-shadow:  5px 5px 10px rgba(225, 225, 255,0.4);
  }
`
const Images = styled.img`
  width: 90%;
  height: 150px;
  border-radius: 2px;
  background-color: lightgrey;
  margin:5px 0 ;
  transform: scale(1);
  transition: all 350ms;
  object-fit: cover;

  :hover{
    cursor: pointer;
    transform: scale(1.003);
    transition: all 350ms;
    box-shadow:  5px 5px 10px rgba(0,0,0,0.4);
  }

`
const Names = styled.div`
  width: 90%;
  min-height: 40px;
  display:flex;
  justify-content:center;
  font-weight: bold;
  align-items: center;
  color: lightgrey;
  font-size: 20px;
  border-radius: 2px;
  margin-top: 5px;
  background-color: rgba(153, 82, 208, 0.7);
  transform: scale(1);
  transition: all 350ms;

  :hover{
    cursor: pointer;
    transform: scale(1.003);
    transition: all 350ms;
    box-shadow:  5px 5px 20px rgba(0,0,0,0.4);
  }
`
const Titles = styled.div`
  width: 90%;
  min-height: 100px;
  display:flex;
  justify-content:center;
  align-items: center;
  color: white;
  text-align: center;
  font-size: 16px;
  margin-top: 5px;
  background-color: rgba(153, 82, 208, 0.3);
  transform: scale(1);
  transition: all 350ms;
  overflow-y: scroll;

  :hover{
    cursor: pointer;
    transform: scale(1.003);
    transition: all 350ms;
    box-shadow:  5px 5px 20px rgba(0,0,0,0.4);
  }
`
const Votes = styled.div`
  width: 90%;
  min-height: 40px;
  display:flex;
  justify-content:center;
  align-items: center;
  color: lightgrey;
  font-size: 20px;
  margin-top: 5px;
  background-color: rgba(153, 82, 208, 0.7);
  transform: scale(1);
  transition: all 350ms;

  :hover{
    cursor: pointer;
    transform: scale(1.003);
    transition: all 350ms;
    box-shadow:  5px 5px 20px rgba(0,0,0,0.4);
  }
`
const Label = styled.label`
    
`
const Buttoner = styled.div`
    text-decoration: none;
    background-color: rgba(153, 82, 208, 0.9);
    font-size: 20px;
    border-radius: 5px;
    padding: 10px 50px;
    transform: scale(1);
    transition: all 350ms;
    margin-top: 10px;
    color: white;

    :hover{
        cursor: pointer;
        transform: scale(1.002);
        transition: all 350ms;
        box-shadow: 0px 3px 10px rgba(0,0,0,0.4);
    }
`
const Voter = styled.div`
  margin-top: 100px;
  text-decoration: none;
  width: 10%;
  min-height: 40px;
  display:flex;
  justify-content:center;
  border-radius: 5px;
  align-items: center;
  color: white;
  font-size: 16px;
  /* margin-top: 10px; */
  margin-bottom: 20px;
  background-color: rgba(25, 25, 25, 0.7);
  transform: scale(1);
  transition: all 350ms;

  :hover{
    cursor: pointer;
    transform: scale(1.003);
    transition: all 350ms;
    box-shadow:  5px 5px 20px rgba(0,0,0,0.4);
  }
`