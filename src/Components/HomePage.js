import React, { useEffect, useState } from 'react'
import styled from "styled-components"
// import picture from "./Images/pexels-chait-goli-1918290.jpg"
import { useSelector } from "react-redux"
import {Link, useParams, useNavigate} from "react-router-dom"
import axios from "axios"

const HomePage = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState()
  const [vote, setVote] = useState()
  const myID = useSelector((state) => state.Id.Id._id)

  const getCandidate = async()=>{
    try{
      const res = await axios.get(`http://localhost:7777/Candidates/${id}`)
      setData(res.data.data)
    }catch(err){
      console.log(err)
    }
  }
  // const checkVote =(who)=>{
  //   if(who === `${myID}`){
  //     console.log("The same")
  //   }else{
  //     console.log("not the same")
  //   }
  // }
  // const getVote = async()=>{
  //   try{
  //     const res = await axios.get(`http://localhost:7777/api/Votes`)
  //     setVote(res.data.votes)
  //     // console.log(vote.filter(checkVote(vote.who)))
  //     checkVote(vote.who)
  //     console.log(res.data.votes)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }
  
  const voteCandidate = async(cand)=>{
      const canId = cand
      const count = 1
      const res = await axios.post(`http://localhost:7777/api/Vote/${canId}/${myID}/${id}`, {count: count})
      console.log(res)
      // navigate(-1)
  }

  useEffect(()=>{
    getCandidate();
  }, [])
  return (
    <Container>
      <Wrapper>
        <Text>VOTE WiSELY <br/> <span>These are the Candidates</span></Text>
        <Vote onClick={()=>{navigate(-1)}}>Back to Categories</Vote>
          <Holder>
          {
            data?.map((props)=>(
              <Card key={props._id}>
            <Image src={`http://localhost:7777/${props.image}`} alt="Profile picture"/>
            <Name>{props.name}</Name>
            <Title>{props.manifesto}</Title>
            <Votes onClick={()=> {
              voteCandidate(props._id);
              navigate(-1);
              }}>Vote</Votes>
          </Card>
            ))
          }
          </Holder>
      </Wrapper>
    </Container>
  )
}

export default HomePage

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
  margin-top: 50px;

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
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
const Image = styled.img`
  width: 90%;
  height: 150px;
  border-radius: 2px;
  background-color: lightgrey;
  margin:5px 0 ;
  transform: scale(1);
  transition: all 350ms;
  object-fit: cover;

  :hover{
    cursor: pointer;
    transform: scale(1.003);
    transition: all 350ms;
    box-shadow:  5px 5px 10px rgba(0,0,0,0.4);
  }

`
const Name = styled.div`
  width: 90%;
  min-height: 40px;
  display:flex;
  justify-content:center;
  align-items: center;
  color: lightgrey;
  font-size: 20px;
  border-radius: 2px;
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
const Title = styled.div`
  width: 90%;
  height: 150px;
  display:flex;
  justify-content:center;
  align-items: center;
  color: white;
  text-align: center;
  font-size: 16px;
  margin-top: 5px;
  background-color: rgba(153, 82, 208, 0.3);
  transform: scale(1);
  transition: all 350ms;
  overflow-y: scroll;

  :hover{
    cursor: pointer;
    transform: scale(1.003);
    transition: all 350ms;
    box-shadow:  5px 5px 20px rgba(0,0,0,0.4);
  }
`
const Votes = styled.div`
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
  margin-bottom: 20px;
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
