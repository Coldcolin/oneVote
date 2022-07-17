import React from 'react'
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "./Global/IdReducer"

const SideHeader = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myID = useSelector((state) => state.Id.Id);
  const close = () =>{
    props.setToggle(false)
}
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  return (
    <Container>
      <Wrapp>
        <Right>
          <Navig>
          <Nav to="/" onClick={close}>Home</Nav>
          <Nav to="/Create" onClick={close}>Create Election</Nav>
          <Nav to="/ElectTok" onClick={close}>Join Election</Nav>
          <Nav to="/ResultsTok" onClick={close}>See Results</Nav>
          {!myID? <Nav to="/register" onClick={close}>Register</Nav>: null}
                
                 { !myID? <Nav to="/Login" onClick={close}>log In</Nav>:<Navi
          onClick={() => {
								dispatch(signOut());
                                Toast.fire({
                                    icon: 'success',
                                    title: 'Logged out successfully'
                                })
                                navigate("/")
							}}
          >Log out</Navi>
                    }
          </Navig>
          {/* <Hld style={{ border: "none" }}></Hld> */}
        </Right>
      </Wrapp>
    </Container>
  );
}

export default SideHeader

const Right = styled.div`
  /* background: pink; */
  display: none;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    /* background: red; */
    height: 100vh;
    width: 80%;
  }
`;
const Nav = styled(Link)`
  text-decoration: none;
  /* margin-right: 25px; */
  height: 60%;
  width: 100%;
  /* background:yellow; */

  margin: 20px 0 ;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px; ;
  color:#fff;
  :hover{
    /* height: 20%; */
    background-color: rgb(90,37,131);

  }

  &.active {
   
    border-bottom: 1px solid skyblue;
    color: skyblue;

    transition: all 550ms;
    transform: scale(1);
    transform-origin: center left;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

const Navi = styled.div`
  text-decoration: none;
  /* margin-right: 25px; */
  height: 60%;
  /* background:red; */
  display: flex;
  align-items: center;
  /* color: #009587; */
  color:#fff;
  :hover{
    /* background:#009587; */
  }

  &.active {
    /* border-bottom: 1px solid skyblue; */
    /* color: skyblue; */

    transition: all 550ms;
    transform: scale(1);
    transform-origin: center left;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
const Navig = styled.div`
  display: none;

  /* background:brown; */
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 80%;
    width: 80%;
    /* background: yellow; */
  }
`;

const Container = styled.div`
  display: none ;

  @media Screen and (max-width: 768px){
    width: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  }
  /* margin-bottom: 50px; */
  /* background: darkcyan; */
`;
const Wrapp = styled.div`
  display: flex;
  width: 100%;
  min-height: 600px;
  height: 100%;
  flex-direction: column;
  /* justify-content: space-between; */
  /* background: peachpuff; */
  align-items: center;
`;