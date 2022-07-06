import React from "react"
import styled from "styled-components"
import image from "./Images/TopImage.jpg"
import hero from "./Images/newBottom.jpg"
import {Link, useNavigate} from "react-router-dom"


const LandingPage = () =>{
    const navigate = useNavigate()
    const sendId = () =>{
        navigate("/ElectTok")
    }
    return(
        <Container>
            <Wrapper>
                <HeroHolder>
                <Text>
                <Div>Create an Election</Div>
                <Div2>Easily in Seconds</Div2>
                </Text>
                <Hold>
                <Hero src={image} alt=""/>
                </Hold>
                </HeroHolder>
                <Holder>
                <Blue>ELECTIONS MADE EASY</Blue>
                <White>Intuitive elections with powerful configuration</White>
                <Grey>Our Elections here are as simple and beautiful as possible, we also offer powerful customization options to enable integration for different purposes</Grey>
                    <InfoHold>
                    <Info>
                        <Title>Fake Detection</Title>
                        <Take>By default, bots and VPN users are blocked from voting on this app.</Take>
                    </Info>
                    <Info>
                        <Title>Deadlines</Title>
                        <Take>Our elections can run indefinitely. You can also set a deadline</Take>
                    </Info>
                    <Info>
                        <Title>Live Results</Title>
                        <Take>Evaluate your election results real time, whenever you want</Take>
                    </Info>
                    <Info>
                        <Title>Election API</Title>
                        <Take>We provide an easy to use API for poll creation and result analysis</Take>
                    </Info>
                    <Info>
                        <Title>Privacy</Title>
                        <Take>You can choose to make your Elections public or Private.</Take>
                    </Info>
                    <Info>
                        <Title>Development</Title>
                        <Take>We are continuously working on additional features and updates to our app.</Take>
                    </Info>
                    </InfoHold>
                </Holder>
                <Hero3>
                <Holding>
                    <Card to="/Create">
                        <Content>Create Election <span>Create a new Election Campagne</span></Content>
                    </Card>
                    <Cards onClick={()=>{ sendId()}}>
                        <Content>See Polls <span>View and Participate in Ongoing Polls</span></Content>
                    </Cards>
                    <Card to="/ResultsTok">
                        <Content>See Results <span>View results of concluded Polls</span></Content>
                    </Card>
                </Holding>
                </Hero3>
                <InfoHolder>
                        <How>
                        <Title>How it Works</Title>
                        <Take>We have designed oneVote to be as easy and intuitive to use as possible. At the same time, we are constantly improving our service to make it more seamless.</Take>
                        </How>
                    <Diva>
                    <Infos>
                        <Num><Nu>1.</Nu></Num>
                        <Word>
                        <Title>Create a Election</Title>
                        <Takes>Click on "Create an Election" Button, choose a name and give it a description.</Takes>
                        </Word>
                    </Infos>
                    <Infos>
                        <Num><Nu>2.</Nu></Num>
                        <Word>
                        <Title>Share Election ID</Title>
                        <Takes>After you create an Election, you will get an Election Id in your mail that you can share with participants.</Takes>
                        </Word>
                    </Infos>
                    <Infos>
                        <Num><Nu>3.</Nu></Num>
                        <Word>
                        <Title>Customize Election</Title>
                        <Takes>Go to "view Elections", you get the options to create as many Categories and Candidates for your Election</Takes>
                        </Word>
                    </Infos>
                    <Infos>
                        <Num><Nu>4.</Nu></Num>
                        <Word>
                        <Title>Get Results</Title>
                        <Takes>You can monitor results real time and after the Election by going to "See Results" page.</Takes>
                        </Word>
                    </Infos>
                    </Diva>
                    </InfoHolder>
                <Hero2>
                    <img src={hero} alt=""/>
                </Hero2>
                <InfoHolder>
                        <How>
                        <Title>Other ways to use it</Title>
                        <Take>We have designed oneVote to be flexible also for your organization, especially if you want some customized rules for your special elections</Take>
                        </How>
                    <Diva>
                    <Infos>
                        <Num><Nu>1.</Nu></Num>
                        <Word>
                        <Title>Reach out to us</Title>
                        <Takes>Send a mail to oneVote94@gmail.com with your organization details and contacts.</Takes>
                        </Word>
                    </Infos>
                    <Infos>
                        <Num><Nu>2.</Nu></Num>
                        <Word>
                        <Title>Connect with us</Title>
                        <Takes>Discuss with the team on how your specifications and discuss terms and conditions.</Takes>
                        </Word>
                    </Infos>
                    <Infos>
                        <Num><Nu>3.</Nu></Num>
                        <Word>
                        <Title>Get your oneVote</Title>
                        <Takes>Get access to your customized oneVote platform for your organization</Takes>
                        </Word>
                    </Infos>
                    </Diva>
                    </InfoHolder>
                <Hero4>
                    {/* <img src={hero} alt=""/> */}
                </Hero4>
                <Footer>Powered By <span> CodeLab</span></Footer>
            </Wrapper>
        </Container>
    )
}

export default LandingPage

const Container = styled.div`
    width: 100%;
    min-height: 100%;
`
const Wrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const HeroHolder = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 50px;

    
    @media Screen and (max-width: 425px){
        height: 400px;
        margin-top: 150px;
        margin-bottom: 50px;
    }
`
const Text = styled.div`
    position: absolute;
    left: 200px;
    top: 150px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    @media Screen and (max-width: 838px){
        left: 150px;
        top: 200px
    }
    @media Screen and (max-width: 425px){
        left: 80px;
        top: 200px;
    }
    
`
const Div = styled.div`
    font-family: poppins;
    font-size: 60px;
    color: #fff; 
    font-weight: bold;

    @media Screen and (max-width: 1024px){
        font-size: 3rem;
    }
    @media Screen and (max-width: 425px){
        font-size: 2rem;
    }
    @media Screen and (max-width: 375px){
        font-size: 1.6rem;
    }
    @media Screen and (max-width: 320px){
        font-size: 1.3rem;
    }
`
const Div2 = styled.div`
    font-family: poppins;
    font-size: 60px;
    color: rgb(225,225,225); 
    font-weight: bold;

    @media Screen and (max-width: 1024px){
        font-size: 3rem;
    }
    @media Screen and (max-width: 425px){
        font-size: 2rem;
    }
    @media Screen and (max-width: 375px){
        font-size: 1.6rem;
    }
    @media Screen and (max-width: 320px){
        font-size: 1.3rem;
    }
`
const Hold = styled.div`
    width: 80%;
    height: 500px;
    border-radius: 10px;

    @media Screen and (max-width: 425px){
       /* width: 100%; */
    }
`
const Hero = styled.img`
    width: 100%;
    height: 500px;
    border-radius: 10px;
    object-fit: cover;
    
`
const Hero2 = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content:center;

    img{
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
`
const Hero3 = styled.div`
    width: 100%;
    height: 700px;
    background-image: url("/images/counter-back-img.jpg");
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content:center;
`
const Hero4 = styled.div`
    width: 100%;
    height: 700px;
    background-image: url("/images/banner-1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content:center;
`

const Holder = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column ;
    min-height: 400px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
` 
const Holding = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    /* flex-direction: column ; */
    min-height: 400px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
const Card = styled(Link)`
    text-decoration: none;
    width: 400px;
    height: 300px;
    border-radius: 10px;
    background-color: rgba(125, 125, 125, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 50px;
    transition: all 500ms;

    :hover{
        cursor: pointer;
        box-shadow: 2px 10px 15px rgba(0, 0, 0, 0.4);
        transition: all 500ms;
    }

    @media Screen and (max-width: 425px){
        width: 300px;
        height: 200px;
    }
    @media Screen and (max-width: 768px){
        width: 300px;
        height: 200px;
    }
`
const Cards = styled.div`
    text-decoration: none;
    width: 400px;
    height: 300px;
    border-radius: 10px;
    background-color: rgba(125, 125, 125, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 50px;
    transition: all 350ms;

    :hover{
        cursor: pointer;
        box-shadow: 2px 10px 15px rgba(0, 0, 0, 0.4);
        transition: all 350ms;
    }

    @media Screen and (max-width: 425px){
        width: 300px;
        height: 200px;
    }
    @media Screen and (max-width: 768px){
        width: 300px;
        height: 200px;
    }
`
const Content = styled.div`
    width: 350px;
    height: 250px;
    border-radius: 10px;
    background-color: rgba(0,0,0 ,0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 15px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 50px;
    text-align: center;
    transition: all 350ms;

    span{
        font-size: 20px;
        color: transparent;
        transition: all 350ms;
    }

    :hover{
        cursor: pointer;
        transition: all 350ms;
            span{
                display: flex;
                color: darkgrey;
                transition: all 350ms;
            }
        }
    @media Screen and (max-width: 425px){
        width: 250px;
        height: 150px;
        font-size: 30px;

        span{
            font-size: 12px;
        }
    }
    @media Screen and (max-width: 768px){
        width: 250px;
        height: 150px;
        font-size: 30px;

        span{
            font-size: 12px;
        }
    }
`
const Footer = styled.div`
    width: 100%;
    height: 200px;
    background-color: rgb(0, 0, 0);
    margin-top: 10px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        margin-left: 3px;
        color: rgba(153, 82, 208, 0.7);
    }
`
const InfoHold = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
const InfoHolder = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #26282b;
`
const Info = styled.div`
    width: 350px;
    height: 180px;
    background-color: #26282b;
    border-radius: 10px;
    margin: 50px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column ;
    transition: all 350ms;

    :hover{
        cursor: pointer;
        /* box-shadow:10px 10px 20px rgba(153, 82, 208, 0.7); */
        box-shadow: rgba(153, 82, 208, 0.5) 0px 8px 40px, rgba(153, 82, 208, 0.5) 0px 16px 40px, rgba(153, 82, 208, 0.5) 0px 24px 40px;
        transition: all 350ms;
    }

    @media Screen and (max-width: 425px){
        margin: 20px 20px;
    }
    @media Screen and (max-width: 768px){
        margin: 20px 20px;
    }
`
const Infos = styled.div`
    width: 350px;
    height: 180px;
    border-radius: 10px;
    margin: 50px 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media Screen and (max-width: 375px){
        margin: 20px 10px;
    }
    @media Screen and (max-width: 768px){
        margin: 20px 10px;
    }
`
const Title = styled.div`
    color: white;
    font-size: 20px;
    font-weight: bold;

    @media Screen and (max-width: 425px){
        font-size: 16px;
    }
    @media Screen and (max-width: 768px){
        font-size: 16px;
    }
`
const Take = styled.div`
    font-size: 20px;
    color: grey;
    width: 80%;
    text-align: center;
    @media Screen and (max-width: 425px){
        font-size: 12px;
    }
    @media Screen and (max-width: 768px){
        font-size: 16px;
    }
`
const Takes = styled.div`
    font-size: 13px;
    color: grey;
    width: 80%;
    text-align: justify;
    @media Screen and (max-width: 425px){
        font-size: 12px;
    }
    @media Screen and (max-width: 768px){
        font-size: 12px;
    }
`
const Blue = styled.div`
    font-size: 20px;
    color: rgba(153, 82, 208);
    font-weight: bold;
    /* color: rgba(0, 0, 0); */
`
const White = styled.div`
    font-size: 40px;
    color: grey;
    font-weight: bold;
    @media Screen and (max-width: 425px){
        text-align: center;
        line-height: 40px;
        margin-bottom: 5px;
        margin-top: 20px;
        font-size: 30px;
    }
    @media Screen and (max-width: 768px){
        text-align: center;
        line-height: 40px;
        margin-bottom: 5px;
        margin-top: 20px;
        font-size: 35px;
    }
    
    /* margin-top: -150px; */
`
const Grey = styled.div`
    font-size: 20px;
    color: grey;
    width: 40%;
    text-align: center;
    @media Screen and (max-width: 425px){
        width: 100%;
        margin-top: 20px;
        font-size: 16px;
    }
    @media Screen and (max-width: 768px){
        width: 100%;
        margin-top: 20px;
    }
`
const How = styled.div`
    display: flex;
    flex-direction: column ;
    align-items: center;
    margin-top: 30px;
`
const Diva = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media Screen and (max-width: 375px){
        width: 100%;
        justify-content: center;
    }
`
const Num = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    @media Screen and (max-width: 425px){
        font-size: 10px;
    }
    @media Screen and (max-width: 768px){
        font-size: 12px;
    }
`
const Nu = styled.div`
    width: 30px;
    height: 30px ;
    border-radius: 50%;
    background-color: rgba(153, 82, 208, 0.7);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;

    @media Screen and (max-width: 375px){
        width: 20px;
        height: 20px;
    }
    @media Screen and (max-width: 768px){
        width: 20px;
        height: 20px;
    }
`
const Word = styled.div`
    display: flex;
    flex-direction: column ;
    align-items: center;
    flex: 2;

    /* @media Screen and (max-width: 375px){
        font-size: 10px;
    } */
`