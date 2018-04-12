import React, { Component } from 'react';
import {Button, Grid, Col, Row, Form, FormControl} from 'react-bootstrap';
import './App.css'

class filteredPerson extends Component {
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
            this.name.value, this.address.value, this.phone.value, this.picture.value, this.props.id
    );
    this.setState({
        isEdit: false
    });
  }
    handleBack = () => {
        this.setState({
        isEdit: false
    });
  }

  render() {
      const {name, address, phone, picture, id} = this.props;
    return (
      <div>
          {
            this.state.isEdit ? (
        <Grid className="grid">
            <Row>
                <Col xs={2} md={0.5}/>
                <Col xs={14} md={11}>
                <Form onSubmit={this.editHandler} inline>
                    <FormControl className="FormControl" placeholder="name" inputRef={inputValue=>this.name = inputValue} defaultValue={name}/>
                    <FormControl className="FormControl" placeholder="address" inputRef={inputValue=>this.address = inputValue} defaultValue={address}/>
                    <FormControl className="FormControl" placeholder="phone" inputRef={inputValue=>this.phone = inputValue} defaultValue={phone}/>
                    <FormControl className="FormControl" placeholder="picture" inputRef={inputValue=>this.picture = inputValue} defaultValue={picture}/>
                    <Button bsStyle="success" className="button" type="submit">Save</Button>
                    <Button bsStyle="danger" className="button" onClick={this.handleBack}>Cancel</Button>
                </Form>
                </Col>
                <Col xs={2} md={0.5}/>
            </Row>
        </Grid>
              ) :(
                <Grid className="grid">
                    <Row>
                    <Col xs={3} md={2}>
                        {name} 
                    </Col>
                    <Col xs={3} md={2}>
                        {address}
                    </Col>
                    <Col xs={3} md={3}>
                        {phone} 
                    </Col>
                    <Col xs={3} md={2}>
                        <img src={picture} alt=""/>
                    </Col>
                    <Col xs={6} md={3}>
                        <Button 
                            bsStyle="success" className="button" onClick={this.onEdit}>
                                Update
                        </Button>
                        <Button bsStyle="danger" className="button" onClick={this.onDelete.bind(this, id)}>Delete</Button>
                    </Col>
                    </Row>
                </Grid>
              )
          }
      </div>
    );
  }
}

export default filteredPerson;
