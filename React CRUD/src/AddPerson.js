import React, { Component } from 'react';
import {Button, Form, FormControl, Grid, Col, Row} from 'react-bootstrap';
import './App.css'

class AddPerson extends Component {
constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
}
onSubmit = (event) => {
    event.preventDefault();
    let id = Math.random() * 100;
    this.props.onSubmit(
        this.name.value, this.email.value, this.age.value, this.gender.value, id
    );
    this.name.value = ""; 
    this.age.value = ""; 
    this.email.value = "";
    this.gender.value = ""
}
  render() {
    return (
      <div className="add">
          <Grid>
            <Row>
                <Col xs={2} md={0.5}/>
                <Col xs={14} md={11}>
                    <Form onSubmit={this.onSubmit} inline style={{marginLeft: '1%'}}>
                            <FormControl className="FormControl" placeholder="name" inputRef={inputValue=>this.name = inputValue}/>
                            <FormControl className="FormControl" placeholder="age" type="number" inputRef={inputValue=>this.age = inputValue}/>
                            <FormControl className="FormControl" placeholder="email" inputRef={inputValue=>this.email = inputValue}/>
                            <FormControl className="FormControl" placeholder="gender" inputRef={inputValue=>this.gender = inputValue}/>
                            <Button type="submit" bsStyle="success">+Add new user</Button>
                    </Form>
                </Col>
                <Col xs={2} md={0.5}/>
            </Row>
          </Grid>
      </div>
    );
  }
}

export default AddPerson;
