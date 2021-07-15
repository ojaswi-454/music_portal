import React, { useState } from "react";
import Layouts from "../../Layouts/index";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "../../utils/axios";
import { requests } from "../../utils/requests";
import { useDispatch } from "react-redux";
import {
  logOutSuccess,
  signInSuccess,
} from "../../../store/modules/auth/auth.action";
/**
 * @author
 * @function Signin
 **/

const Signin = (props) => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const HandleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    if (name === "email") {
      setemail(value);
    } else {
      setpassword(value);
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
        dispatch(signInSuccess({ token, userinfo }));
      })
      .catch((err) => {
        alert("Something Went Wrong");
        window.location.href = "/login";
      });
  };

  return (
    <Layouts>
      <Container>
        <Form>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 4, offset: 4 }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={HandleChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={HandleChange}
                />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Are you from MNIT?" />
              </Form.Group> */}
              <Button variant="primary" type="submit" onClick={HandleSubmit}>
                Submit
              </Button>
              <Row style={{ marginTop: "10px" }}>
                <Col>
                  <Form.Text className="text-muted">
                    I haven't an account
                  </Form.Text>

                  <NavLink to="/signup" className="nav-link">
                    Signup
                  </NavLink>
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
  );
};

export default Signin;
