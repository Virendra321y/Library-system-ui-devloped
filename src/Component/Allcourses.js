import React,{useState, useEffect} from "react";
import Course from './Course';
import { Button } from "reactstrap";
import SERVER_URL from "./../api/bootapi";
import axios from "axios";
import {toast}  from "react-toastify";

const Allcourses = () => {
    useEffect(()=>{
        document.title= "All Courses || Learncodewith Myself";
    },[]);

    //function to call server:

    const getAllCoursesFromServer=()=>{
        axios.get(`${SERVER_URL}/courses`).then(
            (response)=>{
                //success
             //  console.log(response,'ytdyuytuy');
             //console.log(response);
               console.log(response.data);
               toast.success("courses has been loaded",{
                position:"top-right"
               });
               setCourses(response.data);
            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("somthing went wrong",{
                    position:"top-left",
                });
            }
        );
    };


    //calling loding course function
    useEffect(()=>{
        getAllCoursesFromServer();
    },[]);


    const [courses , setCourses] = useState([]);

    const updateCourses = (id) => {
        setCourses(courses.filter((c)=> c.id != id));
    };

    
    return(
        <div>
            <h1>All course</h1>
            <p>List of courses are follows</p>
            {courses.length > 0 
            ? courses.map((item)=>  ( 
            <Course key={item.id} course={item} update={updateCourses} />))
            : "No courses"}
        </div>

    );
};
export default Allcourses;





