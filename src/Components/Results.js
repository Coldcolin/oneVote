import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { useSelector } from "react-redux"
import {Link, useParams, useNavigate} from "react-router-dom"
import axios from "axios"

const Results = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState()

    const getResults = async()=>{
        try{
          const res = await axios.get(`https://onevote-api.onrender.com/Results/${id}`)
          setData(res.data.data.candidates)
          console.log(res.data.data.candidates)
        }catch(error){
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data.message)
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
      }
    
      useEffect(()=>{
        getResults()
      }, [])
  return (
    <Container>
      <Wrapper>
        {data?<Text>These are the Results</Text>: <Text>There are no Results yet</Text>}
        <Vote onClick={()=>{navigate(-1)}}>Back to Categories</Vote>
          <Holder>
          {
              data?.map((props)=>(
                <Card key={props._id}>
            <Image src={props.image} alt="Profile picture"/>
            <Name>{props.name}</Name>
            {/* <Title>{props.position}</Title> */}
            <Votes>Votes: {props.votes.length}</Votes>
          </Card>
              ))
          }
          </Holder>
      </Wrapper>
    </Container>
  )
}

export default Results

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
  margin-top: 70px;

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
  margin-top: 50px;
`
const Card = styled.div`
  /* width: 250px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(246, 122, 248, 0.7);
  border-radius: 3px;
  padding: 5px 0;
  transform: scale(1);
  transition: all 350ms;
  margin: 5px;

  :hover{
    cursor: pointer;
    transform: scale(1.005);
    transition: all 350ms;
    box-shadow:  10px 10px 20px rgba(0,0,0,0.4);
  } */
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  height: 50px;
  display:flex;
  justify-content:center;
  align-items: center;
  color: black;
  font-size: 20px;
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
