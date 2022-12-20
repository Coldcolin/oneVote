import React, { useContext, useEffect, useState } from 'react'
import styled from "styled-components"
import {Link, useNavigate, useParams} from "react-router-dom"
import { useSelector } from "react-redux"
import axios from "axios"

const SeeResults = () => {
    const navigate = useNavigate()
    const { id } = useParams()
  const myID = useSelector((state) => state.Id.Id._id)
  const admin = useSelector((state)=> state.Id.Id.isAdmin)
  const [polls, setPolls] = useState()

  const getPolls =async()=>{
    const res = await axios.get(`https://onevote-api.onrender.com/api/Election/${id}`)
    setPolls(res.data.data)
    // console.log(res.data.data)
  }
  useEffect(()=>{
    getPolls()
  },[])
  return (
    <Container>
      <Wrapper>
      <Vote onClick={()=>{navigate(-1)}}>Back to Home</Vote>
        <Text><span>Choose Election to see results</span></Text>

          <Holder>
          {
            polls?.map((props)=>(
              <Card key={props._id}>
            <Name> {props.name}</Name>
            <Votes to={`/ResultsCat/${props._id}`}>See Results</Votes>
            {/* { 
              admin? <Votes to={`/CreateCandidate/${props._id}`}>Add Categories</Votes>: null
            } */}
            </Card>
            ))
          }
          </Holder>
      </Wrapper>
    </Container>
  )
}

export default SeeResults

const Container = styled.div`
  width: 100%;
  min-height: calc (100vh - 70px)
`
const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const Text = styled.div`
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
const Holder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const Card = styled.div`
  width: 250px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const Name = styled.div`
  width: 90%;
  min-height: 40px;
  display:flex;
  text-align: center;
  justify-content:center;
  align-items: center;
  color: lightgrey;
  font-size: 20px;
  border-radius: 2px;
  margin-top: 5px;
  background-color: rgba(153, 82, 208, 0.9);
  transform: scale(1);
  transition: all 350ms;

  :hover{
    cursor: pointer;
    transform: scale(1.003);
    transition: all 350ms;
    box-shadow:  5px 5px 20px rgba(0,0,0,0.4);
  }
`

const Votes = styled(Link)`
  text-decoration: none;
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
const Vote = styled.div`
text-decoration: none;
  padding: 5px 10px;
  min-height: 40px;
  display:flex;
  border-radius: 3px;
  justify-content:center;
  align-items: center;
  color: white;
  font-size: 20px;
  margin-top: 5px;
  font-weight: bold;
  background-color: rgba(25, 25, 25, 0.7);
  transform: scale(1);
  transition: all 350ms;
  margin-top: 80px;

  :hover{
    cursor: pointer;
    transform: scale(1.003);
    transition: all 350ms;
    box-shadow:  5px 5px 20px rgba(0,0,0,0.4);
  }
`