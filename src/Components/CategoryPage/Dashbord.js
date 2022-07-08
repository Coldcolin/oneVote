import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import {Link, useParams} from "react-router-dom"
import axios from "axios"

const Dashbord = () => {
    const [data, setData] = useState()
    const {id} = useParams()

    const getData = async ()=>{
        const res = await axios.get(`https://onevoteback.herokuapp.com/Category/${id}`)
        setData(res.data.data)
    }

    useEffect(()=>{
        getData()
    }, [])
  return (
    <Component>
        <Wrapper>
        <Holder>Categories</Holder>
        {
            data?.map((props)=>(
                <Card key={props._id}>
                {props.position}
                    <Buttons to={`/Creating/${props._id}`}>Add Candidate</Buttons>
                </Card>

            ))
        }
            {data? <Button to="/">Done</Button>: null}
        </Wrapper>
    </Component>
  )
}

export default Dashbord

const Component = styled.div`
    width: 25%;
    min-height: calc(100vh - 70px);
    font-family: poppins;
    overflow-y: scroll;
    margin-top: 70px;
    /* background: blue; */
    /* display: flex;
    flex-direction: column ;
    align-items: center;
    justify-content: space-between; */
    /* margin-top: 10px; */
    @media screen and (max-width: 425px){
        display: none;
    }
`
const Wrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
    /* background-color: blue; */
    display: flex;
    align-items: center;
    flex-direction: column ;
    justify-content: space-between;
`
const Holder = styled.div`
    font-size: 30px;
    color: white;
`
const Card = styled.div`
    width: 70%;
    min-height: 30px;
    /* background-color: white; */
    color: rgba(25, 25, 25, 0.9);
    box-shadow: 0px 3px 10px rgba(0,0,0,0.6);
    border-radius: 5px;
    margin: 5px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    :hover{
        cursor: pointer;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4);
    }
`
const Button = styled(Link)`
    text-decoration: none;
    width: 80%;
    height: 30px;
    background-color: rgba(153, 82, 208, 0.9);
    border-radius: 5px;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:14px;
    color: white;
    :hover{
        cursor: pointer;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4);
    }
`
const Buttons = styled(Link)`
    text-decoration: none;
    width: 80%;
    height: 30px;
    background-color: rgba(153, 82, 208, 0.9);
    border-radius: 5px;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:12px;
    color: white;
    font-weight: normal;
    transform: scale(1.0);
    :hover{
        cursor: pointer;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4);
        color: rgba(153, 82, 255, 0.9);
        transform: scale(1.008);
        background-color: white;
        font-weight: bold;
    }
`