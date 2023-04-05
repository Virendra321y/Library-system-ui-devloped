import React from "react";
import { Card, CardBody } from "reactstrap";
function Header({name,title}){
    return(
        <div>
            <Card className="my-2 bg-info">
                <CardBody>
                  <h2 className="text-center my-3">Library Book mannangment System Devloped by Virendra Yadav it help to store the record of Books </h2>
                </CardBody>
           </Card>
        </div>
    );
}

export default Header;