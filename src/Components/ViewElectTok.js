import React from 'react'
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import * as yup from "yup"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux";
import { addId } from "./Global/IdReducer"
import { useForm } from "react-hook-form"
import { yupResolver } from  "@hookform/resolvers/yup"


const ViewElectTok = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const schemaModel = yup.object().shape({
        id: yup.string().required("This field has not been filled"),
    })
    const {register, reset, handleSubmit, formState: {errors}} = useForm({ resolver: yupResolver(schemaModel)})

    const logIn = handleSubmit(async (data) =>{
        const {id} = data
        navigate(`/seeResult/${id}`);
        reset();
    })
  return (
    <Container>
       <Wrapper>
       <Div>Election Verification</Div>
            <Card onSubmit={logIn}>
                    <Labeler>Election ID</Labeler>
                    <Input autoComplete="off" {...register("id")}/>
                    <Buttons type="submit">View</Buttons>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default ViewElectTok

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px) ;
`
const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const Card = styled.form`
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
    // background-color: rgb(49,53,55);
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
const Span = styled(Link)`
    text-decoration: none;
    color:  white;
    font-weight: bold;
`
const Div = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: rgba(125, 125, 125, 0.9);
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