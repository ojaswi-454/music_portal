import React from 'react';
import Layouts from '../../Layouts/index';
import {Container,Form,Button,Row,Col} from "react-bootstrap";
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Signin
**/

const Signin = (props) => {
  return(
    <Layouts>
       <Container >
        <Form>
           <Row style={{marginTop:'50px'}}>
               <Col md={{span:4,offset:4}}>
                   
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Are you from MNIT?" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Row style={{marginTop:'10px'}}>
                    <Col>
                    <Form.Text className="text-muted">
                    I haven't an account
                    </Form.Text>
                    
                <NavLink to="/signup" className="nav-link">Signup</NavLink>
                    </Col>
                
                </Row>
                {/* <Button variant="danger" type="submit">
                    Back
                </Button>{' '} */}
                       
               </Col>
           </Row>
           </Form>
       </Container>
    </Layouts>
   )

 }

export default Signin