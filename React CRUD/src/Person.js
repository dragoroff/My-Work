import React, { Component } from 'react';
import {Button, Grid, Col, Row, Form, FormControl} from 'react-bootstrap';
import './App.css'

class Person extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEdit: false
        }
        this.onEdit = this.onEdit.bind(this);
        this.editHandler = this.editHandler.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    onDelete = (id) => {
        this.props.onDelete(id);
  }
    onEdit = () => {
        this.setState({
        isEdit: true
    })
  }
    editHandler = (event) => {
        event.preventDefault();
        this.props.onEdit(
            this.name.value, this.email.value, this.age.value, this.gender.value, this.props.id
    )
  }
    handleBack = () => {
        this.setState({
        isEdit: false
    });
  }

  render() {
      const {name, age, email, gender, id} = this.props;
    return (
      <div>
          {
            this.state.isEdit ? (
        <Grid style={{marginBottom: '1%', marginTop: '1%'}}>
            <Row>
                <Col xs={2} md={0.5}/>
                <Col xs={14} md={11}>
                <Form onSubmit={this.editHandler} inline>
                    <FormControl className="FormControl" placeholder="name" inputRef={inputValue=>this.name = inputValue} defaultValue={name}/>
                    <FormControl className="FormControl" placeholder="age" type="number" inputRef={inputValue=>this.age = inputValue} defaultValue={age}/>
                    <FormControl className="FormControl" placeholder="email" inputRef={inputValue=>this.email = inputValue} defaultValue={email}/>
                    <FormControl className="FormControl" placeholder="gender" inputRef={inputValue=>this.gender = inputValue} defaultValue={gender}/>
                    <Button bsStyle="success" style={{marginRight: "5px"}} type="submit">Save</Button>
                    <Button bsStyle="danger" onClick={this.handleBack}>Back</Button>
                </Form>
                </Col>
                <Col xs={2} md={0.5}/>
            </Row>
        </Grid>
              ) :(
                <Grid>
                    <Row style={{marginTop: "10px"}}>
                    <Col xs={3} md={2}>
                        {name} 
                    </Col>
                    <Col xs={3} md={2}>
                        {age}
                    </Col>
                    <Col xs={3} md={3}>
                        {email} 
                    </Col>
                    <Col xs={3} md={2}>
                        {gender}
                    </Col>
                    <Col xs={6} md={3}>
                        <Button 
                            bsStyle="success" style={{marginRight: "5px"}} onClick={this.onEdit}>
                                Edit
                        </Button>
                        <Button bsStyle="danger" onClick={this.onDelete.bind(this, id)}>Delete</Button>
                    </Col>
                    </Row>
                </Grid>
              )
          }
       
      </div>
    );
  }
}

export default Person;
