import React from 'react';
import Layouts from '../../Layouts/index';
import {Container,Form,Button,Row,Col} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import Input from '../../UI/input/index';
/**
* @author
* @function Signup
**/

const Signup = (props) => {
  return(
    <Layouts>
       <Container >
        <Form>
           <Row style={{marginTop:'30px'}}>
               <Col md={{span:4,offset:4}}>
                   <Form>
                       <Row>
                           <Col md={6}>
                           <Input
                               label="First Name"
                               type="text"
                               placeholder="First Name"
                               textMessage=""
                               value=""
                               onChange={()=>{}}
                           />
                           </Col>
                           <Col md={6}>
                           <Input
                               label="Last Name"
                               type="text"
                               placeholder="Last Name"
                               textMessage=""
                               value=""
                               onChange={()=>{}}
                           />
                           </Col>
                       </Row>
                   </Form>
                   <Input
                               label="Email Address"
                               type="Email"
                               placeholder="@gmail.com"
                               textMessage="We'll never share your email with anyone else."
                               value=""
                               onChange={()=>{}}
                           />
                            <Input
                               label="Contact Number"
                               type="text"
                               placeholder="Contact Number"
                               textMessage=""
                               value=""
                               onChange={()=>{}}
                            />
                

                            <Input
                               label="Password"
                               type="password"
                               placeholder="password"
                               textMessage="We'll never share your password with anyone else."
                               value=""
                               onChange={()=>{}}
                            />
                            <Input
                               label="Confirm Password"
                               type="password"
                               placeholder="Confirm password"
                               textMessage="Please enter the same keys as above "
                               value=""
                               onChange={()=>{}}
                            />
                            <Input
                               label="Are you from MNIT?"
                               type="checkbox"
                               placeholder=""
                               textMessage=""
                               value=""
                               onChange={()=>{}}
                            />
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Are you from MNIT?" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Row style={{marginTop:'10px'}}>
                    <Col>
                    <Form.Text className="text-muted">
                    I have already an account
                    </Form.Text>
                    
                <NavLink to="/signin" className="nav-link">Signin</NavLink>
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

export default Signup