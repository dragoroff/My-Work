import React, {Component} from 'react';
import {FormGroup} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {storeRegister} from '../_actions';

class StoreInput extends Component{
    constructor(props){
        super(props);

        this.state = {
                myStore: {
                store:'', 
                country:'', 
                city:'',
                street:'', 
                house:'', 
                image:'',
            }
        }
    }
    onChange(event){
        const {name, value} = event.target;
        const {myStore} = this.state;
        this.setState({
            myStore:{
            ...myStore,
            [name]: value,
            }
        })
    }
    onSubmit(event){
        event.preventDefault();
            const {myStore} = this.state;

                const {dispatch} = this.props;
        dispatch(storeRegister(myStore.store, myStore.country, myStore.city, myStore.street, myStore.house));
            this.props.history.push('/mystore');
    }
    render(){
    const {myStore} = this.state; 
        return (
            <div>
                <h1>Store</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <FormGroup bsClass="form-group">
                        <label htmlFor="store">Store name</label>
                            <input name="store" type="text" style={{width:'45%'}} className="form-control" value={myStore.store} onChange={this.onChange.bind(this)} required/>  
                    </FormGroup>
                    <FormGroup bsClass="form-group">
                        <label htmlFor="country">Country</label>
                            <input name="country" type="text" style={{width:'45%'}} className="form-control" value={myStore.country} onChange={this.onChange.bind(this)} required/>  
                    </FormGroup>
                    <FormGroup bsClass="form-group">
                        <label htmlFor="city">City</label>
                            <input name="city" type="text" style={{width:'45%'}} className="form-control" value={myStore.city} onChange={this.onChange.bind(this)} required/>  
                    </FormGroup>
                    <FormGroup bsClass="form-group">
                        <label htmlFor="street">Street</label>
                            <input name="street" type="text" style={{width:'45%'}} className="form-control" value={myStore.street} onChange={this.onChange.bind(this)} required/>  
                    </FormGroup>
                    <FormGroup bsClass="form-group">
                        <label htmlFor="house">House №</label>
                            <input name="house" type="number" style={{width:'45%'}} className="form-control" value={myStore.house} onChange={this.onChange.bind(this)} required/>  
                    </FormGroup>
                    <p>
                        <input type="file"/>
                    </p>
                    <button className="btn btn-info">Submit</button>
                    <Link to="mystore" style={{marginLeft:"15px"}}>Cancel</Link>
                </form>
                </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(withRouter(StoreInput));