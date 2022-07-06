import React from 'react'
import styled from "styled-components"
import Dashboard from "./Dashbord"
import Form from "./Form"


const Compiler = () => {
  return (
    <Container>
        <Wrapper>
            <Dashboard/>
            <Form/>
        </Wrapper>
    </Container>
  )
}

export default Compiler

const Container = styled.div`
    width: 100%;
    /* height: calc(100vh - 70px) */
`
const Wrapper = styled.div`
    width: 100%;
    /* height: calc(100vh - 70px); */
    display: flex;
`
