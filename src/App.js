import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Container,Row, Col, Form } from "reactstrap";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer,toast} from "react-toastify";
import Home from  "./Component/Home";
import Course from './Component/Course';
import Allcourses from './Component/Allcourses';
import AddCourse from './Component/AddCourse';
import Header from './Component/Header';
import Menus from './Component/Menus';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";

function App() {
  const btnHandle=()=>{
    toast.error("done",{
       position:"top-center",
    });
  };
  return (
    
    
      <div>
        <Router>       
       <ToastContainer/>
      
       <Container>
       <Header/>
        <Row>
          <Col md={4}>
            <Menus/>
            </Col>
            <Col md={8}>
               <Home/>  
               <Allcourses/> 
               <AddCourse/>
            <Routes>    
            {/* <Route path='/' component={<Home/>} exact/>
            <Route path='/add-course' component={<AddCourse/>} exact/>
            <Route path='/view-courses' component={<Allcourses/>} exact/> */}
          </Routes>   
          </Col> 
        </Row>
       </Container>
       </Router>
       </div>

      
 );
}

export default App;
