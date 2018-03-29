import React, {Component} from 'react';
import {FormGroup} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {productActions} from '../_actions';
import id from '../generateId';

////---------- id switching all time that we entering the page, try to push previous id setState() in case of EDIT
class ProductInput extends Component{
    constructor(props){
        super(props);
        const {state} = this.props.history.location;
        const {myProducts} = this.props.products;
        state.edit?
        myProducts.map(x => {
            x.id === state.id
                    this.state = {
                        myProducts: {
                        title: x.title, 
                        subtitle: x.subtitle, 
                        manufacturer: x.manufacturer,
                        marketer: x.marketer, 
                        date: x.date, 
                        description: x.description,
                        size: x.size, 
                        price: x.price,
                        image: x.image,
                        id: x.id
                    }
                }
})
        :this.state = {
                myProducts: {
                title:'', 
                subtitle:'', 
                manufacturer:'',
                marketer:'', 
                date:'', 
                description:'',
                size:'', 
                price:'',
                image:'',
                id
            }
        }
    }
    componentWillMount(){
        console.log('HISTORY------', this.props.history.location.state);
        this.props.history.location.state.edit?
        this.id = this.props.history.location.state.id
        :this.id = id();
    }
    onChange(event){
        const {name, value} = event.target;
        const {myProducts} = this.state;
        this.setState({
            myProducts:{
            ...myProducts,
            [name]: value,
            },
            id: this.id
        })
    }
  

    onSubmit(event){
        event.preventDefault();
            const {myProducts} = this.state;
                const {dispatch} = this.props;
                if (!this.props.history.location.state.edit){
                    dispatch(productActions.addProducts(myProducts.title, myProducts.subtitle, myProducts.manufacturer, myProducts.marketer, myProducts.date, myProducts.description, myProducts.size, myProducts.price, myProducts.image, this.state.id));
                }
                else {
                    dispatch(productActions.editProduct(myProducts.title, myProducts.subtitle, myProducts.manufacturer, myProducts.marketer, myProducts.date, myProducts.description, myProducts.size, myProducts.price, myProducts.image, this.state.id))
                }    
            this.props.history.push('/mystore');
    }
    render(){
        const {myProducts} = this.state; 
        return (
            <div>
                <h1>Product</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <FormGroup bsClass="form-group">
                        <label htmlFor="title">Title</label>
                            <input name="title" type="text" style={{width:'45%'}} className="form-control" value={myProducts.title} onChange={this.onChange.bind(this)} required/>  
                    </FormGroup>
                    <FormGroup bsClass="form-group">
                        <label htmlFor="subtitle">Subtitle</label>
                            <input name="subtitle" type="text" style={{width:'45%'}} className="form-control" value={myProducts.subtitle} onChange={this.onChange.bind(this)} required/>  
                    </FormGroup>
                    <FormGroup bsClass="form-group">
                        <label htmlFor="manufacturer">Manufacturer</label>
                            <input name="manufacturer" type="text" style={{width:'45%'}} className="form-control" value={myProducts.manufacturer} onChange={this.onChange.bind(this)} required/>  
                    </FormGroup>
                    <FormGroup bsClass="form-group">
                        <label htmlFor="marketer">Marketer</label>
                            <input name="marketer" type="text" style={{width:'45%'}} className="form-control" value={myProducts.marketer} onChange={this.onChange.bind(this)} required/>  
                    </FormGroup>
                    <FormGroup bsClass="form-group">
                        <label htmlFor="date">Production Date</label>
                            <input name="date" type="date" style={{width:'45%'}} className="form-control" value={myProducts.date} onChange={this.onChange.bind(this)} required/>  
                    </FormGroup>
                    <FormGroup bsClass="form-group">
                        <label htmlFor="description">Description</label>
                            <input name="description" type="text" style={{width:'45%'}} className="form-control" value={myProducts.description} onChange={this.onChange.bind(this)} required/>  
                    </FormGroup>
                    <FormGroup bsClass="form-group">
                        <label htmlFor="size">Product Size</label>
                            <input name="size" type="text" style={{width:'45%'}} className="form-control" value={myProducts.size} onChange={this.onChange.bind(this)} required/>  
                    </FormGroup>
                    <FormGroup bsClass="form-group">
                        <label htmlFor="price">Price</label>
                            <input name="price" type="number" style={{width:'45%'}} className="form-control" value={myProducts.price} onChange={this.onChange.bind(this)} required/>  
                    </FormGroup>
                    <p>
                        {this.id}
                    </p>
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
    console.log('STATE----------', state);
    return state;
}

export default connect(mapStateToProps)(withRouter(ProductInput));