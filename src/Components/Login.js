import React, {useState} from 'react'
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import * as yup from "yup"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux";
import { addId } from "./Global/IdReducer"
import { useForm } from "react-hook-form"
import { yupResolver } from  "@hookform/resolvers/yup"
import Swal from 'sweetalert2'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false)

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
    const schemaModel = yup.object().shape({
        email: yup.string().email().required("This field has not been filled"),
        password: yup.string().required("This field has not been filled")
    })
    const {register, reset, handleSubmit, formState: {errors}} = useForm({ resolver: yupResolver(schemaModel)})

    const logIn = handleSubmit(async (data) =>{
        try{
            setToggle(!toggle)
        const {email, password} = data

        const res = await axios.post("https://onevoteback.herokuapp.com/api/login", { 
            email, password
        })
        localStorage.setItem("User", JSON.stringify(res.data.data))
        dispatch(addId(res.data.data))
        reset();
        Toast.fire({
            icon: 'success',
            title: 'Log in successful'
        })
        navigate("/");
        }catch(error){
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                Toast.fire({
                    icon: 'fail',
                    title: error.response.data.message
                })
                // alert(error.response.data.message);
                setToggle(!toggle)
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
  return (
    <Container>
       <Wrapper>
       <Div>Login to your account</Div>
            <Card onSubmit={logIn}>
                    <Labeler>Email</Labeler>
                    <Input  {...register("email")}/>
                    <Labeler>Password</Labeler>
                    <Input type= "password" {...register("password")}/>
                    {
                        toggle? <Buttons>Logging in...</Buttons>: <Buttons type="submit">Login</Buttons>
                    }
                    <Span to="/register">Don't have an account? <span>Sign Up</span></Span>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Login

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
    /* background-color: rgb(49,53,55); */
    outline: none;
    margin-top: 10px;
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
    color:  black;
    font-weight: bold;
    font-family: poppins;

    span{
        color: rgb(90,37,131);
    }
    @media Screen and (max-width: 1024px){
        text-align: center;
    }
`
const Div = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: rgba(100, 100, 100, 0.9);
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
    color: rgba(100, 100, 100, 0.9);
    width: 400px;
    padding: 5px 0;

    @media Screen and (max-width: 768px){
        /* height: 30px; */
        width: 80%;
    }
`;