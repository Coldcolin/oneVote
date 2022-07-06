import React, {useState} from 'react'
import styled from "styled-components"
import logo from "./Images/oneVoteLogo.svg"
import { NavLink, useNavigate, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { signOut } from "./Global/IdReducer"
import MenuIcon from "@mui/icons-material/Menu"
import Swal from 'sweetalert2'

const Header = ({bc}) => {
    const navigate  = useNavigate()
    const [toggle, setToggle] = useState(false);
    const myID = useSelector((state) => state.Id.Id);
    const dispatch = useDispatch();

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

  return (
    <Container bc={bc}>
        <Wrapper>
            <Holder to="/">
            <Logo src={logo} alt="logo"/>
            </Holder>
            {/* {myID} */}
            <Navs>
            <Vote to="/Create"><span>Create Election</span></Vote>
            <Vote to="/ElectTok"><span>Join Election</span></Vote>
            <Vote to="/ResultsTok"><span>View Results</span></Vote>
            </Navs>
            <Holders>
                {!myID? <Sign to="/register">Register</Sign>: null}
                
                 { !myID? <Sign to="/Login">log In</Sign>:<Signs 
                    onClick={() => {
								dispatch(signOut());
                                Toast.fire({
                                    icon: 'success',
                                    title: 'Logged out successfully'
                                })
                                navigate("/")
							}}
                    >log Out</Signs>}
                    
            </Holders>
            <MenuHolder>
            <MenuIcon/>
            </MenuHolder>
        </Wrapper>
    </Container>
  )
}

export default Header

const Container = styled.div`
    width: 100%;
    height: 70px;
    /* background-color:  ${({bc})=>( bc? "#000": "rgba(0, 0, 0, 0.6)")}; */
    background-color:  ${({bc})=>( bc? "rgba(0, 0, 0, 0.6)": "#000")};
    font-family: poppins;
    z-index: 1;
    position: fixed;
    border-bottom: 1.5px solid rgba(225, 225, 225, 0.6);
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media Screen and (max-width: 425px){
        
    }
`
const Logo = styled.img`
    /* width: 150px;
    height: 50px; */
    object-fit: cover;
    /* margin-left: 30px; */
`
const Navs = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-around;
    /* background-color: yellow; */

    @media Screen and (max-width: 425px){
        display: none
    }
`
const Vote = styled(NavLink)`
    text-decoration: none;
    border-radius: 4px;
    transition: all 350ms;
    font-weight: 600;
    color: lightgrey;
    /* flex: 1; */

    span {
        position: relative;

        :before{
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            height: 2px;
            /* background-color:#fff; */
            background-color: rgb(153, 82, 208);
            transform: scaleX(0);
            transition: transform 0.5s ease;
            top: 0;
            transform-origin: center right;
        };
        :after{
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            height: 2px;
            /* background-color: #fff; */
            background-color: rgb(153, 82, 208);
            transform: scaleX(0);
            transition: transform 0.5s ease;
            bottom: 0;
            transform-origin: center left;
        }
    }

    :hover{
        cursor: pointer;
        transition: all 350ms;
        color: white;
        
        span {
            :before{
                transform-origin: center left;
                transform: scaleX(1);
            };
            :after{
                transform-origin: center right;
                transform: scaleX(1)
            }
        }
    }
    &.active{
        color: white;
    }

    
`
const Holder = styled(Link)`
    /* width: 70px; */
    flex: 1;
    height: 70px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    margin-left: 20px;
    /* background-color: green; */
`
const Holders = styled.div`
    width: 25%;
    display: flex;
    justify-content: space-around;
    /* background-color: pink; */

    @media Screen and (max-width: 425px){
        display: none;
    }
    @media Screen and (max-width: 830px){
        margin-right: 20px;
        width: 27%;
        /* background-color: red; */
    }
    @media Screen and (max-width: 704px){
        margin-right: 20px;
        width: 20%;
        height: 80%;
        align-items: center;
        /* background-color: red; */
    }

    @media Screen and (min-width: 920px){
        margin-right: 50px;
    }
`
const Sign = styled(NavLink)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 35px ;
    background-color: #19151a;
    border-radius: 4px;
    transform: scale(1) ;
    transition: all 350ms;
    font-weight: 600;
    color: white;

    :hover{
        cursor: pointer;
        transform: scale(1.005);
        background-color: rgb(153, 82, 208);
        transition: all 350ms;
    }

    &.active{
        background-color: white;
        color: grey;
    }
    @media Screen and (max-width: 768px){
        padding: 10px 20px;
        margin-left: 5px;
    }
    @media Screen and (max-width: 704px){
        margin-right: 20px;
        width: 20%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        font-size: 12px;
    }
    
`
const Signs = styled.div`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 50px ;
    background-color: #19151a;
    border-radius: 4px;
    transform: scale(1) ;
    transition: all 350ms;
    font-weight: 600;
    color: white;

    :hover{
        cursor: pointer;
        transform: scale(1.005);
        background-color: darkgrey ;
        transition: all 350ms;
        color: grey
    }

    &.active{
        background-color: white;
        color: grey;
    }
    @media Screen and (max-width: 768px){
        padding: 10px 20px;
        margin-left: 5px;
    }
    @media Screen and (max-width: 704px){
        margin-right: 20px;
        width: 20%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        font-size: 12px;
    }
    
`
const MenuHolder = styled.div`
    display: none;
    @media Screen and (max-width: 425px){
        display: flex;
        margin-right: 20px;
        color: white;
    }
`