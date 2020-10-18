import React from 'react';
import { Form, Group, Row, Label, Button, Col } from "react-bootstrap";
import "./TForm.css";

class TForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      university: "",
      year: "",
      phone: "",
      linkedin: "",
      web: false,
      ios: false,
      android: false,
      data_s: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.name);
    console.log(this.state);
    event.preventDefault();
  }
  render() {
    return (
      <div className="teamForm">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="formHorizontalName">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control name="name" type="string" placeholder="Name" onChange={this.handleInputChange}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control name="email" type="email" placeholder="Email" onChange={this.handleInputChange}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formUniversity">
            <Form.Label column sm={2}>
              University
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="university"
                type="string"
                placeholder="University Name"

                onChange={this.handleInputChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formYearSelect">
            <Form.Label column sm={2}>
              University Year
            </Form.Label>
            <Col sm={10}>
              <Form.Control name="year" as="select" value={this.state.year} onChange={this.handleInputChange} custom>
                <option value="Freshman">Freshman</option>
                <option value="Sophmore">Sophmore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
              </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPhoneNumber">
            <Form.Label column sm={2}>
              Phone Number
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="phone"
                type="string"
                placeholder="Phone Number"
                onChange={this.handleInputChange}
              />
              <Form.Text className="text-muted">
                We'll share your phone number with only your teammates.
              </Form.Text>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formLinkedIn">
            <Form.Label column sm={2}>
              LinkedIn
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="linkedin"
                type="string"
                placeholder="Profile Link"
                onChange={this.handleInputChange}
              />
              <Form.Text className="text-muted"></Form.Text>
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
                    <Form.Check
                      name="web"
                      checked={this.state.web}
                      label="Web Development"
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formIOS">
                  <Col sm={{ span: 10, offset: 0 }}>
                    <Form.Check name="ios" checked={this.state.ios} label="IOS Development" onChange={this.handleInputChange} />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formAndroid">
                  <Col sm={{ span: 10, offset: 0 }}>
                    <Form.Check name="android" checked={this.state.android} label="Android Development" onChange={this.handleInputChange}/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formAndroid">
                  <Col sm={{ span: 10, offset: 0 }}>
                    <Form.Check name="data_s" checked={this.state.data_s} label="Data Science" onChange={this.handleInputChange}/>
                  </Col>
                </Form.Group>
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group as={Row} controlId="formTermsConditions">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check required label="Agree to Terms & Conditions" />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 0, offset: 2 }}>
              <Button type="submit">Submit</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default TForm;
