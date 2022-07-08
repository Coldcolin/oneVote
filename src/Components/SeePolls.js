import React, { useContext, useEffect, useState } from 'react'
import styled from "styled-components"
import {Link, useNavigate, useParams} from "react-router-dom"
import { useSelector } from "react-redux"
import axios from "axios"


const SeePolls = () => {
  const {ID} = useParams()
  const navigate = useNavigate()
  const myID = useSelector((state) => state.Id.Id._id)
  const admin = useSelector((state)=> state.Id.Id.isAdmin)
  const [polls, setPolls] = useState()

  const getPolls =async()=>{
    try{
      const res = await axios.get(`http://localhost:7777/api/Election/${ID}`)
      setPolls(res.data.data)
    }catch(error){
      if(error.response){
        console.log(error.response.message)
      }else{
        console.log(error)
      }
    }
  }

  const deleteElection = async (id)=>{
    try{
      const elect = id
      await axios.delete(`https://onevoteback.herokuapp.com/api/Election/${ID}/election/${elect}`)
    }catch(error){
      if(error.response){
        console.log(error.response.message)
      }else{
        console.log(error)
      }
    }
  }
  useEffect(()=>{
    getPolls()
  },[])
  return (
    <Container>
      <Wrapper>
      <Vote onClick={()=>{navigate(-1)}}>Back to Home</Vote>
        {
          admin? <Text><span>These are the Polls Available</span></Text>: <Text><span>There are no Polls Available</span></Text>
        }
          <Holder>
          {
            polls?.map((props)=>(
              <Card key={props._id}>
            <Name> {props.name}</Name>
            <Title>{props.description}</Title>
              {
                myID?  <Votes to={`/categories/${props._id}`}>Start Voting</Votes>:  <Votes to={`/register`}>Sign up to vote</Votes>
              }
              {
                myID?  <Voter onClick={()=> {
                  deleteElection(props._id)
                  window.location.reload()
                  }}>Delete Election</Voter>:  null
              }
            { 
              admin? <Votes to={`/CreateCandidate/${props._id}`}>Add Categories</Votes>: null
            }
            </Card>
            ))
          }
          </Holder>
      </Wrapper>
    </Container>
  )
}

export default SeePolls

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
    color: #000;
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
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.5px solid white;
  background-color: #21132D;
  border-radius: 7px;
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
  font-weight: bold;
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
const Title = styled.div`
  width: 90%;
  height: 200px;
  display:flex;
  justify-content:center;
  align-items: center;
  border-radius: 5px;
  color: white;
  text-align: center;
  font-size: 16px;
  margin-top: 5px;
  background-color: rgba(153, 82, 208, 0.3);
  /* transform: scale(1);
  transition: all 350ms; */
  overflow-y: scroll;

  /* :hover{
    cursor: pointer;
    transform: scale(1.003);
    transition: all 350ms;
    box-shadow:  5px 5px 20px rgba(0,0,0,0.4);
  } */

`
const Votes = styled(Link)`
  text-decoration: none;
  width: 90%;
  min-height: 40px;
  display:flex;
  justify-content:center;
  align-items: center;
  border-radius: 5px;
  color: lightgrey;
  font-size: 16px;
  margin-top: 5px;
  background-color: rgba(153, 82, 208, 0.7);
  transform: scale(1);
  transition: all 350ms;

  :hover{
    cursor: pointer;
    transform: scale(1.003);
    transition: all 350ms;
    border: 0.5px solid white;
    /* box-shadow:  5px 5px 20px rgba(0,0,0,0.4); */
  }
`
const Voter = styled.div`
  text-decoration: none;
  width: 90%;
  min-height: 40px;
  display:flex;
  justify-content:center;
  align-items: center;
  border-radius: 5px;
  color: lightgrey;
  font-size: 16px;
  margin-top: 5px;
  background-color: rgba(153, 82, 208, 0.7);
  transform: scale(1);
  transition: all 350ms;

  :hover{
    cursor: pointer;
    transform: scale(1.003);
    transition: all 350ms;
    border: 0.5px solid white;
    /* box-shadow:  5px 5px 20px rgba(0,0,0,0.4); */
  }
`
const Vote = styled.div`
text-decoration: none;
  width: 10%;
  min-height: 40px;
  display:flex;
  border-radius: 3px;
  justify-content:center;
  border-radius: 5px;
  align-items: center;
  color: white;
  font-size:16px;
  margin-top: 80px;
  font-weight: bold;
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