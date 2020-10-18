import React from "react";
import { Form, Group, Row, Label, Button, Col } from "react-bootstrap";
import './TeamForm.css';

function TeamForm() {
  return (
    <div className="teamForm">

    <Form>

    <Form.Group as={Row} controlId="formHorizontalName">
      <Form.Label column sm={2}>
        Name
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="string" placeholder="Name" />
      </Col>
    </Form.Group>
      <Form.Group as={Row} controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalPhoneNumber">
        <Form.Label column sm={2}>
          Phone Number
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="string" placeholder="Phone Number" />
        </Col>
      </Form.Group>
      <fieldset>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={2}>
            Interests
          </Form.Label>
          <Col sm={10}>
          <Form.Group as={Row} controlId="formWebDevelopment">
            <Col sm={{ span: 10, offset: 0 }}>
              <Form.Check label="Web Development" />
            </Col>
          </Form.Group>
            <Form.Group as={Row} controlId="formIOS">
              <Col sm={{ span: 10, offset: 0 }}>
                <Form.Check label="IOS Development" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formAndroid">
              <Col sm={{ span: 10, offset: 0 }}>
                <Form.Check label="Android Development" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formAndroid">
              <Col sm={{ span: 10, offset: 0 }}>
                <Form.Check label="Data Science" />
              </Col>
            </Form.Group>
          </Col>
        </Form.Group>
      </fieldset>

      <Form.Group as={Row} controlId="Agree to Terms & Conditions">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check required label="Remember me" />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>

    </div>
  );
}

export default TeamForm;
