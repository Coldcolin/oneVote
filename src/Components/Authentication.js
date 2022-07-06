import React from 'react'
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"

const Authentication = () => {
    const navigate = useNavigate()
  return (
    <Container>
       <Wrapper>
       <Div></Div>
            <Card>
            <Div>Verification Successful</Div>
                <Small onClick={()=>{navigate("/Login")}}>Click to continue...</Small>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default Authentication

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
const Div = styled.div`
    font-size: 30px;
    color: white;
`
const Small = styled.div`
    font-size: 20px;
    color: rgba(153, 82, 208, 0.5);
    transition: all 350ms;
    
    :hover{
        cursor: pointer;
        color: rgba(153, 82, 208, 0.9);
        transition: all 350ms;
    }
`