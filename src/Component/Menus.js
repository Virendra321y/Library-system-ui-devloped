import React from "react";
import { Link } from "react-router-dom";
import { List, ListGroup, ListGroupItem } from "reactstrap";


const Menus = () =>{
    return (
        <ListGroup>
               <Link className="list-group-item list-group-item-action" tag="a" to="/bbb" action>
                Home
               </Link>
               <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>
                Add Course 
               </Link>
               <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" action>
                View Course
               </Link>
               <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>
                About
               </Link>
               <Link className="list-group-item list-group-item-action" tag="a" to="#!*****" action>
                Contact
               </Link>
               {/* <ListGroupItem tag="a" href="/" action>
                Home
               </ListGroupItem>
               <ListGroupItem tag="a" href="/add-course" action>
                Add Course
               </ListGroupItem>
               <ListGroupItem tag="a" href="/view-courses" action>
                View Course
               </ListGroupItem>
               <ListGroupItem tag="a" href="#!" action>
                About
               </ListGroupItem>
               <ListGroupItem tag="a" href="#!" action>
                Contact
               </ListGroupItem> */}
        </ListGroup>
    );
};

export default Menus;