import Header from "./Components/Header";
import Home from "./Components/HomePage"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from "./Components/Register";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import CreateElection from "./Components/CreateElection";
import Compiler from "./Components/CategoryPage/Compiler";
import Create from "./Components/CandidatesPage/Create";
import SeePolls from "./Components/SeePolls";
import Categories from "./Components/Categories";
import SeeResults from "./Components/SeeResults"
import Results from "./Components/Results"
import { useState } from "react";
import SignUpSuccess from "./Components/SignUpSuccess";
import Authentication from "./Components/Authentication";
import ViewElections from "./Components/ViewElections";
import SuccessCreate from "./Components/SuccessCreate";
import ViewElectTok from "./Components/ViewElectTok";
import ResultsCat from "./Components/ResultCategegories"


function App() {
  const [cont, setCont] = useState(false)
  const showOff = () =>{
    if(window.scrollY >= 70){
        setCont(true)
    } else {
        setCont(false)
    }
}
window.addEventListener('scroll', showOff)
  return (
    <div>
    <Router>
    <Header bc={cont? '': 'bc'}/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Candidates/:id" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Create" element={<CreateElection/>}/>
        <Route path="/CreateCandidate/:id" element={<Compiler/>}/>
        <Route path="/Creating/:id" element={<Create/>}/>
        <Route path="/see/:ID" element={<SeePolls/>}/>
        <Route path="/categories/:id" element={<Categories/>}/>
        <Route path="/seeResult/:id" element={<SeeResults />}/>
        <Route path="/Result/:id" element={<Results />}/>
        <Route path="/Success" element={<SignUpSuccess/>}/>
        <Route path="/auth/:id/:token" element={<Authentication/>}/>
        <Route path="/ElectTok" element={<ViewElections/>} />
        <Route path="/SucCreate" element={<SuccessCreate/>} />
        <Route path="/ResultsTok" element={<ViewElectTok/>}/>
        <Route path="/ResultsCat/:id" element={<ResultsCat/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
