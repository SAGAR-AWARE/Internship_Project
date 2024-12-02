import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Enrollment.css"; 
import * as Icon from "react-bootstrap-icons";


export function Enrollment() {
  return (
 <div className="enrollment-container ">
<div className="enrollment-form">
      <h1 className="enrollment-title">Enrollment Form</h1>
      <Form>
       <div className="col-lg-12 ">
       <Form.Group className="col-md-12 col-sm-12  ">
          <Form.Control
            size="lg"
            type="text"
            placeholder=" Full name"
            name="name"
            required
            pattern="[a-zA-Z' ]*"
            className="input-controls"
          />
        </Form.Group>
       </div>

        <Form.Group className="col-md-12 col-sm-12">
          <Form.Control
            size="lg"
            type="text"
            placeholder="Phone No"
            name="phNo"
            required
            pattern="[0-9 ()+-]*"
            className="input-controls"
          />
        </Form.Group>

        <Form.Group className="col-md-12 col-sm-12">
          <Form.Control
            size="lg"
            type="email"
            placeholder=" Email"
            name="email"
            required
            className="input-controls"
          />
        </Form.Group>
        <Form.Group className="col-md-12 col-sm-12">
          <Form.Control
            size="lg"
            type="text"
            placeholder="Courses "
            name="course"
            required
            as="select"
            className="input-controls"
          >
            <option value="">Choose Courses</option>
            <option value="online">React JS</option>
            <option value="classroom">Angular</option>
            <option value="classroom">Web Designing</option>
            <option value="classroom">JAVA</option>
            <option value="classroom">Python</option>
            <option value="classroom">Web Development</option>
            <option value="classroom">Software Testing</option>
            <option value="classroom">PHP MySql</option>
            <option value="classroom">Graphic Design</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="col-md-12 col-sm-12">
          <Form.Control
            size="lg"
            type="text"
            placeholder="Prefered way of Learning"
            as="select"
            required
            className="input-controls"
          >
            <option value="">Prefered way of Learning</option>
            <option value="online">Online</option>
            <option value="classroom">Classroom</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="col-md-12 col-sm-12">
          <Form.Control
            size="lg"
            type="text"
            placeholder="Qualification"
            name="qualification"
            required
            className="input-controls"
          />
        </Form.Group>
        <Form.Group className="col-md-12 col-sm-12">
          <Form.Control
            size="lg"
            type="number"
            placeholder="Year of Pass Out"
            name="passout"
            required
            min="2000"
            mb-4
          ></Form.Control>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          size="lg"
          className=" form-btn col-md-12 col-sm-12"
        >
          Submit Now <Icon.ArrowRight size={20} />
        </Button>
      </Form>
    </div>
    </div>
    
  );
  
}

export default Enrollment;
