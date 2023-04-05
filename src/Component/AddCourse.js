import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import SERVER_URL from "./../api/bootapi";

const AddCourse = () => {

    useEffect(()=>{
        document.title= "Add Course || LearncodeWith MySelf";
    },[]);

    const [course, setCourse] = useState({});
    //form handler function
    const handleForm=(e)=>{
        console.log(course);
        postDatatoServer(course);
        e.preventDefault(); 
    };
    //creating function to post data on server
    const postDatatoServer = (data) => {
        axios.post(`${SERVER_URL}/courses`, data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Course added successfully");
                setCourse({id:"",title: "", description: ""});
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.error("Error Somthing went wrong");
            }
        );
    };

    return (
    <Fragment>
        <h1 className="text-center my-3">Fill course Detail</h1>
        <Form onSubmit={handleForm}>
            <FormGroup>
                <label for="userId">Course Id</label>
                <Input
                 type="text"
                 placeholder="Enter here"
                 name="userId"
                 id="userId"
                 onChange={(e)=>{
                    setCourse({...course, id: e.target.value});
                 }}
                 />
            </FormGroup>

            <FormGroup>
                <label for="title">Course Title</label>
                 <Input 
                   type="text" 
                   placeholder="Enter title here" 
                   id="title"
                   onChange={(e)=>{
                    setCourse({...course, title: e.target.value});
                   }} 
                   />
            </FormGroup>

            <FormGroup>
                <label for="description">Course Description</label>
                <Input
                 type="textarea"
                 placeholder="Enter description here" 
                 id="description"
                 style={{height:150}}
                 onChange={(e)=>{
                    setCourse({...course, description: e.target.value});
                 }}
                 />

          </FormGroup>

          <Container className="text-center">
            <Button type="submit" color="success">Add Course</Button>
            <Button type="reset" onClick={()=>{
                setCourse({id: "", title: "", description: ""});
            }} color="warning mi-2">
                Clear
                </Button>
          </Container>

        </Form>
    </Fragment>
    );
};

export default AddCourse;