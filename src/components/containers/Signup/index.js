import React from 'react';
import Layouts from '../../Layouts/index';
import {Container,Form,Button,Row,Col} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import Input from '../../UI/input/index';
import {
    signUpSuccess,
  } from "../../../store/modules/auth/auth.action";
/**
* @author
* @function Signup
**/

const Signup = (props) => {
    const dispatch = useDispatch();
    const [email, setemail] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [password, setpassword] = useState("");
    const [contactNo, setcontactNo]=useState("");
    const HandleChange = (e) => {
      // console.log(e.target);
      const { name, value } = e.target;
      if (name === "email") {
        setemail(value);
      }
       else if(name === "password") {
        setpassword(value);
      }
      else if(name === "firstName") {
        setfirstName(value);
      }
      else if(name === "lastName") {
        setlastName(value);
      }
      else if(name === "contactNo") {
        setcontactNo(value);
      }
    };
    const HandleSubmit = (e) => {
      e.preventDefault();
      const data = {
        email: email,
        password: password,
      };
      const resp = axios.post(requests["doLogin"], data);
      resp
        .then((res) => {
          const data = res.data;
          const { token: token, profile: userinfo } = res.data;
          window.location.href = "/";
          dispatch(signUpSuccess({ token, userinfo }));
        })
        .catch((err) => {
          alert("Something Went Wrong");
          window.location.href = "/login";
        });
    };
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