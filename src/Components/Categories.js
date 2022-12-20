import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import styled from "styled-components"
import {Link, useParams, useNavigate} from "react-router-dom"
import axios from "axios"

const Categories = () => {
  const navigate = useNavigate()
  const {id} = useParams();
  const [data, setData] = useState()
  const admin = useSelector((state)=> state.Id.Id.isAdmin)

  const getData = async ()=>{
    const res = await axios.get(`https://onevote-api.onrender.com/Category/${id}`)
    setData(res.data.data)
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <Container>
      <Wrapper>
      
        <Text><span>These are the Categories Available</span></Text>
        <Vote to="/see">Back to Polls</Vote>
          <Holder>
          {
            data?.map((props)=>(
              <Card key={props._id}>
            <Name>{props.position}</Name>
            
            <Votes to={`/Candidates/${props._id}`}>Choose Candidate</Votes>
            { 
              admin? <Votes to={`/Creating/${props._id}`}>Add Candidate</Votes>: null
            }
          </Card>
            ))
          }
          </Holder>
      </Wrapper>
    </Container>
  )
}

export default Categories

const Container = styled.div`
  width: 100%;
  min-height: calc (100vh - 70px);
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
  margin-top: 70px;

  span{
    color: #3c34a8;
  };

  @media Screen and (max-width: 425px){
    width: 80%;
    font-size: 25px;
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
  width: 300px;
    min-height: 200px;
    margin: 10px;
    border-radius: 3px;
    display: flex;
    padding: 10px 0;
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

const Name = styled.div`
  width: 90%;
  min-height: 40px;
  display:flex;
  text-align: center;
  justify-content:center;
  align-items: center;
  color: white;
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
const Title = styled.div`
  width: 90%;
  height: 200px;
  display:flex;
  justify-content:center;
  align-items: center;
  color: black;
  font-size: 16px;
  margin-top: 5px;
  background-color: rgba(153, 82, 208, 0.7);
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
const Votes = styled(Link)`
  text-decoration: none;
  width: 90%;
  min-height: 40px;
  display:flex;
  justify-content:center;
  align-items: center;
  color: white;
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
const Vote = styled(Link)`
text-decoration: none;
  width: 150px;
  min-height: 40px;
  display:flex;
  justify-content:center;
  align-items: center;
  color: white;
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


