import React, { useState } from 'react'
import styled from "styled-components"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import logo from "./Images/png-transparent-black-and-red-vote-checklist-3d-art-voting-ballot-election-vote-hd-miscellaneous-text-logo.png"
import * as yup from "yup"
import {Link} from "react-router-dom"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import Swal from 'sweetalert2'


const Register = () => {
    const navigate = useNavigate()
    const [clicked, setClicked] = useState(false)

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    const yupModel = yup.object().shape({
        name: yup.string().required("This field has to be filled"),
        email: yup.string().email().required("This field has to be filled"),
        password: yup.string().required("This field has to be filled"),
        confirm: yup.string().oneOf([yup.ref("password"), null])
    })
    const {register, reset, handleSubmit, formState:{errors}} =
    useForm({resolver: yupResolver(yupModel)})

    const signUp = handleSubmit(async (data)=>{
        try{
            setClicked(true)
        const {name, email, password} = data
    
        await axios.post("https://onevote-api.onrender.com/api/register/user", {
            name,
            email,
            password
        })
        reset()
        Toast.fire({
            icon: 'success',
            title: 'Signed up successfully'
        })
        navigate("/Success")
        }catch(error){
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                Toast.fire({
                    icon: 'fail',
                    title: error.response.data.message
                })
                // alert(error.response.data.message);
                console.log(error.response.status);
                console.log(error.response.headers);
                } else if (error.request) {
                    Toast.fire({
                        icon: 'fail',
                        title: error.request
                    })
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        Toast.fire({
                            icon: 'fail',
                            title: error.message
                        })
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
        }
    })

  return (
    <Container>
        <Wrapper>
        {/* <Div2><Logo src={logo} alt="logo"/></Div2> */}
        <Div>Signup for free</Div>
            <Card onSubmit={signUp}>
                    <Labeler>User Name</Labeler>
                    <Input autoComplete="off"{...register("name")}/>
                    <Label> {errors.name && errors.name.message}</Label>
                    <Labeler>Email</Labeler>
                    <Input autoComplete="off" {...register("email")}/>
                    <Label> {errors.email && errors.email.message}</Label>
                    <Labeler>Password</Labeler>
                    <Input type="password" autoComplete="off" {...register("password")}/>
                    <Label> {errors.password && errors.password.message}</Label>
                    <Labeler>Confirm Password</Labeler>
                    <Input type="password" autoComplete="off" {...register("confirm")}/>
                    <Label> {errors.confirm && errors.confirm.message}</Label>
                    {!clicked? <Buttons type="submit">Register</Buttons>: <Buttons>Registering...</Buttons>}
                    <Span to="/Login">Already have an account? <span>Login</span></Span>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Register

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px) ;
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

    @media Screen and (max-width: 1024px){
        width: 70%;
        min-height: 80%;
    }
`

const Input = styled.input`
    width: 400px;
    height: 35px;
    border-radius: 3px;
    border: 0.3px solid grey;
    /* background-color: rgb(49,53,55); */
    outline: none;
    font-size: 18px;
    color: black;

    :focus{
        border: 0.3px solid rgba(153, 82, 208, 0.9);
        color: black;
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
const Span = styled(Link)`
    text-decoration: none;
    color:  black;
    font-weight: bold;
    margin-top: 5px;

    span{
        color: rgb(90,37,131);
    }

    @media Screen and (max-width: 768px){
        font-size: 0.7rem;
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
const Div2 = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: rgba(125, 125, 125, 0.9);
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
const Label = styled.label`
    font-size: 12px;
    font-family: poppins;
    color: red;
    font-weight: bold;
`;
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
const Logo = styled.img`
    width: 70px;
    height: 50px;
    object-fit: cover;
    @media Screen and (max-width: 768px){
        display: none;
    }
`