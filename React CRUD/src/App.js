import React, { Component } from 'react';
import './App.css';
import data from './data';
import Person from './Person';
import FilteredPerson from './filteredPersons';
import AddPerson from './AddPerson';
import {Navbar, Grid, Row, Col, Form, FormControl, DropdownButton, MenuItem} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      persons: data,
      filteredPersons: ''
    }
    this.onDelete = this.onDelete.bind(this);
    this.addUser = this.addUser.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.filterHandler = this.filterHandler.bind(this);
  }

  getPeople = () => {
    return this.state.persons;
  }
  getFilteredPeople = () => {
    return this.state.filteredPersons;
  }

  onDelete = (id) => {
    const persons = this.getPeople();
    const filt = this.getFilteredPeople();
    let person = persons.filter(x=>{
      return x.id !== id
    });
    let filtered = filt.filter(x=>{
      return x.id !== id
    });
    this.setState({
      persons: person,
      filteredPersons: filtered
    })
  }

  addUser = (name, address, phone, picture, id) => {
    const persons = this.getPeople();
    const filtered = this.getFilteredPeople();
    persons.push({
      name, address, phone, picture, id
    });
    if (filtered){
      filtered.push({
        name, address, phone, picture, id
      });
    }
    this.setState({
      persons,
      filteredPersons: filtered
    });
  }
  
  onEdit = (name, address, phone, picture, id) => {
    let persons = this.getPeople();
    let filtered = this.getFilteredPeople();
    persons = persons.map(x=>{
      if (x.id === id){
        x.picture = picture;
        x.name = name;
        x.phone = phone;
        x.address = address;
      }
      return x
    });
    if (filtered){
      filtered = filtered.map(z=>{
        if (z.id === id){
          z.picture = picture;
          z.name = name;
          z.phone = phone;
          z.address = address;
        }
        return z
      })
    }
    this.setState({
      persons,
      filteredPersons: filtered
    });
    this.filterHandler();
  }
  filterHandler = () => {
    let people = this.getPeople();;
    people = people.filter(x=>{
      return x.name.toLowerCase().indexOf(this.filterInput.value.toLowerCase()) !== -1;
    });
    this.setState({
      filteredPersons: people
    })
  }

  render() {
    console.log('State', this.state);
    return (
      <div className="App">
      <Navbar style={{backgroundColor:"#3b5998", marginBottom: '15px'}}>
        <Navbar.Brand>
          <Navbar.Header style={{color: 'white'}}>
           Facebook
          </Navbar.Header>
        </Navbar.Brand>
      </Navbar>
      <AddPerson
      onSubmit={this.addUser}
      />
       <Grid className="grid">
              <Row style={{marginTop: "10px"}}>
              <Col xs={3} md={2}>
                  <DropdownButton
                  title="Name">
                    <MenuItem eventKey="1">Active</MenuItem>
                    <MenuItem eventKey="2">ActiveNat</MenuItem>
                  </DropdownButton>
              </Col>
              <Col xs={3} md={2}>
                  <p className="lead">Address</p>
              </Col>
              <Col xs={3} md={3}>
                  <p className="lead">Phone</p>
              </Col>
              <Col xs={3} md={2}>
                  <p className="lead">Picture</p>
              </Col>
              </Row>
          </Grid>
          <Grid>
            <Row>
              <Col xs={6} md={4}/>
                <Col xs={6} md={4}>
                    <Form onSelect={this.filterHandler}>
                        <FormControl placeholder="Find name..." inputRef={input => this.filterInput = input}/>
                    </Form>
                </Col>
                </Row>
            </Grid>
        {this.state.filteredPersons ? (
          this.state.filteredPersons.map(person=>{
            return (
              <FilteredPerson
              {...person}
              onDelete={this.onDelete}
              onEdit={this.onEdit}
              />
            )
          })
        ) : (
          this.state.persons.map(person=>{
            return (
              <Person 
                key={person.name+person.address+person.phone+person.picture+person.id}
                {...person}
                onDelete={this.onDelete}
                onEdit={this.onEdit}
              />            
              )
          }) 
        )
        }
      </div>
    );
  }
}

export default App;
