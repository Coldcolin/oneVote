import React from 'react'
import styled from "styled-components"

const SignUpSuccess = () => {
  return (
    <Container>
       <Wrapper>

            <Card>
                <Div>Registration Successful</Div>
                <Small>Check your mail to continue...</Small>
            </Card>
        </Wrapper>
    </Container>
  )
}

export default SignUpSuccess

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
    color: rgba(153, 82, 208, 0.9);
`
