import axios from "axios";
import React from "react";
import {toast} from "react-toastify";
import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";
import SERVER_URL from "../api/bootapi";

const Course=({course, update})=>{
    const deleteCourse = (id) =>{
        axios.delete(`${SERVER_URL}/courses/${id}`).then(
            (response) => {
                toast.success("course deleted");
                update(id);
            },
            (error) => {
                toast.error("course not deleted !! Server problem");
            }
        );
    };

    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button 
                    color="danger" outline 
                    onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button color="warning mi-3">Update</Button>
                </Container>
            </CardBody>
        </Card>
    );

};
export default Course;