import React, { useContext, useState } from 'react'
import styled from "styled-components"
import axios from "axios"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { AuthContext } from "./Global/AuthProvider"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { changeId } from "./Global/IdReducer"

const CreateElection = () => {
    const { saveUser } = useContext(AuthContext)
    const myID = useSelector((state) => state.Id.Id._id)
    const [toggle, setToggle] = useState(false)
    // const admin = useSelector((state)=> state.Id.Id.isAdmin)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const createSchema = yup.object().shape({
        name: yup.string().required("This has to be filled"),
        description: yup.string().required("This has to be filled")
    })
    const {register, reset, handleSubmit, formState:{errors}}= useForm({resolver: yupResolver(createSchema)})
    const onSubmit = handleSubmit(async (data) =>{
        try{
            setToggle(!toggle)
        const {name, description} = data
        await axios.post(`https://onevoteback.herokuapp.com/api/${myID}`,{
            name, description
        })
        dispatch(changeId())
        reset();
        navigate("/SucCreate")
        }catch(err){
            setToggle(!toggle)
            alert("Sign Up to create an Election")
        }
    })
  return (
    <Container>
       <Wrapper>
        {/* <div>{myID}</div> */}
        <Div>Create An Election</Div>
            <Card onSubmit={onSubmit}>
                    <Labeler>Election Title</Labeler>
                    <Input {...register("name")}/>
                    <Labeler>Description</Labeler>
                    <Inputs  {...register("description")}/>
                    {
                        toggle? <Buttons>Creating...</Buttons>:<Buttons type="submit">Create</Buttons>
                    }
            </Card>
        </Wrapper>
    </Container>
  )
}

export default CreateElection

const Container = styled.div`
    width: 100%;
    height: 100vh ;
    background-image: url("/images/counter-back-img.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
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
    width: 500px;
    min-height: 500px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 4px solid rgba(153, 82, 208, 0.9);
    box-shadow: 0px 3px 10px rgba(0,0,0,0.6);

    backdrop-filter: blur(5px) saturate(200%);
    -webkit-backdrop-filter: blur(5px) saturate(200%);
    background-color: rgba(255, 255, 255, 0.45);
    border-radius: 12px;
    /* border: 1px solid rgba(209, 213, 219, 0.3); */

    @media Screen and (max-width: 1024px){
        width: 70%;
        min-height: 80%;
    }
`
const Input = styled.input`
    width: 400px;
    min-height: 35px;
    border: none;
    border-bottom: 2px solid grey;
    /* background-color: rgb(18,19,20); */
    outline: none;
    font-size: 18px;
    color: black;

    @media Screen and (max-width: 768px){
        height: 30px;
        width: 80%;
    }
`
const Inputs = styled.textarea`
        width: 400px;
        height: 100px;
        padding: 12px 20px;
        box-sizing: border-box;
        border-radius: 4px;
        border: 0.3px solid grey;
        /* background-color: rgb(49,53,55); */
        font-family: poppins;
        resize: none;
        color: black;

        :focus{
        border: 0.3px solid purple;
        color: black;
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
    padding: 10px 115px;
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
    font-size: 30px;
    font-weight: bold;
    color: rgba(100, 100, 100, 0.9);
    font-family: poppins;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 150px;

    @media Screen and (max-width: 768px){
        font-size: 1rem;
    }
    @media Screen and (max-width: 1024px){
        font-size: 1.5rem;
    }
`
const Labeler = styled.label`
    font-size: 16px;
    font-family: poppins;
    color: rgba(125, 125, 125, 0.9);
    width: 400px;
    padding: 5px 0;

    @media Screen and (max-width: 768px){
        /* height: 30px; */
        width: 80%;
    }
`;