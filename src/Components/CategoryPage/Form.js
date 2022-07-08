import React, {useContext} from 'react'
import styled from "styled-components"
import axios from "axios"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver} from "@hookform/resolvers/yup"
import { AuthContext } from "../Global/AuthProvider"
import { useParams } from "react-router-dom"

const Form = () => {
    const { saveUser } = useContext(AuthContext)
    const {id} = useParams()
    const createSchema = yup.object().shape({
        position: yup.string().required("This has to be filled")
    })
    const {register, reset, handleSubmit, formState:{errors}}= useForm({resolver: yupResolver(createSchema)})

    const addCandidate = handleSubmit(async (data) =>{
        // const id = saveUser._id
        console.log(data)
        console.log(id)
        const {position} = data
        await axios.post(`https://onevoteback.herokuapp.com/Category/${id}`,{
            position
        })
        reset()
        window.location.reload()
    })

  return (
    <Container>
        <Wrapper>
        <Div>Create a Category</Div>
            <Card onSubmit={addCandidate}>
                    <Input placeholder="Category Name" {...register("position")}/>
                    <Buttons type='submit'>Add</Buttons>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Form

const Container = styled.div`
    width: 75%;
    height: calc(100vh - 70px) ;
    position: fixed;
    right: 10px;
    @media screen and (max-width: 425px){
        width: 100%;
    }
`
const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Card = styled.form`
    /* width: 50%;
    height: 40%;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white; */
    width: 500px;
    min-height: 300px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 4px solid rgba(153, 82, 208, 0.9);
    box-shadow: 0px 3px 10px rgba(0,0,0,0.6);

    @media Screen and (max-width: 1024px){
        width: 70%;
        min-height: 50%;
    }
`
const Input = styled.input`
    width: 400px;
    height: 35px;
    border-radius: 3px;
    border: 0.3px solid grey;
    /* background-color: rgb(49,53,55); */
    outline: none;
    margin-top: 10px;
    font-size: 18px;
    color: white;

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
const Buttons = styled.button`
    background-color: rgb(90,37,131);
    font-size: 18px;
    font-family: poppins;
    border-radius: 5px;
    padding: 10px 180px;
    border: none;
    transform: scale(1);
    transition: all 350ms;
    margin-top: 20px;
    color: rgba(225, 225, 225, 0.9);

    :hover{
        cursor: pointer;
        transform: scale(1.005);
        transition: all 350ms;
        background-color: rgba(153, 82, 220, 0.9);
        box-shadow: 0px 3px 10px rgba(0,0,0,0.8);
    }

    @media Screen and (max-width: 768px){
        height: 30px;
        width: 80%;
        padding: 0;
    }
`
const Div = styled.div`
    /* font-size: 40px;
    font-family: poppins; */
    font-size: 30px;
    font-weight: bold;
    color: rgba(25, 25, 25, 0.9);
    font-family: poppins;
    text-align: center;
    margin-bottom: 20px;

    @media Screen and (max-width: 768px){
        font-size: 1rem;
    }
    @media Screen and (max-width: 1024px){
        font-size: 1.5rem;
    }
`