import React, { useEffect } from "react";
import { jumbotron,Container, Button } from 'reactstrap';

const Home=()=>{
    useEffect(()=>{
        document.title="Home || Learncodewith Myself";
    },[]);
    return( 
        <div>
       <jumbotron className="text-center">
        <h1>LearnVackend_API_Call</h1>
        <p>this is virendra tody i am going to learn react js programming</p>
        <Container>
            <Button color="primary" outline>Start Using</Button>
        </Container>
      </jumbotron>

        </div>
    );
    
    
}
export default Home;