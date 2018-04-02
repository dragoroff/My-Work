import React, { Component } from 'react';
import './App.css';
import data from './data';
import Person from './Person';
import AddPerson from './AddPerson';
import {Navbar, Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      persons: data.friends
    }
    this.onDelete = this.onDelete.bind(this);
    this.addUser = this.addUser.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }
  
  getPeople = () => {
    return this.state.persons;
  }

  onDelete = (id) => {
    const persons = this.getPeople();
    let person = persons.filter(x=>{
      return x.id !== id
    })
    this.setState({
      persons: person
    })
  }

  addUser = (name, email, age, gender, id) => {
    age = Number(age)
    const persons = this.getPeople();
    persons.push({
      age, 
      name, 
      gender,
      email, 
      id
    })
    this.setState({
      persons
    });
  }
  
  onEdit = (name, email, age, gender, id) => {
    let persons = this.getPeople();
    persons = persons.map(x=>{
      if (x.id === id){
        x.name = name;
        x.email = email;
        x.age = age;
        x.gender = gender;
      }
      return x
    })
    this.setState({
      persons
    });
  }

  render() {
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
       <Grid>
              <Row style={{marginTop: "10px"}}>
              <Col xs={3} md={2}>
                  <p className="lead">Name</p>
              </Col>
              <Col xs={3} md={2}>
                  <p className="lead">Age</p>
              </Col>
              <Col xs={3} md={3}>
                  <p className="lead">Email</p>
              </Col>
              <Col xs={3} md={2}>
                  <p className="lead">Gender</p>
              </Col>
              </Row>
          </Grid>
        {
          this.state.persons.map(person=>{
            return (
              <Person 
                key={person.name+person.age+person.gender+person.email+person.id}
                {...person}
                onDelete={this.onDelete}
                onEdit={this.onEdit}
              />            
              )
          })
        }
      </div>
    );
  }
}

export default App;
