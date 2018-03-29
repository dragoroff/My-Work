import React, {Component} from 'react'
import {connect} from 'react-redux';
import {productActions} from '../_actions/products.actions';
import {Button} from 'react-bootstrap';
import {} from './ProductInfo.css';

class ProductInfo extends React.Component{
    constructor(props){
        super(props);
    }
    
    handleOnDelete(id){
        console.log('id', id);
        const {dispatch} = this.props;
        dispatch(productActions.deleteProducts(id));
        this.props.history.push('/mystore');
    }
    handleOnEdit = () => {
        const {id} = this.props.match.params;
        this.props.history.push({
            pathname: '/product',
            state: {edit:true, id: Number(id)}
        })
    }

    render(){
        const {products} = this.props;
        const {id} = this.props.match.params;
        return(
            <div className="product"> 
                        <div className="photo">
                                <img src="https://www.siteimage.com.ua/uploads/images/blog/08-2017/internet-magazin-1391231123412331313825.jpg" className="img-thumbnail" style={{width: '150px', height: '125px'}}/> <br/>
                                <p>
                                    <Button bsStyle="info" onClick={this.handleOnEdit.bind(this)}>Edit product</Button>
                                </p>
                                <p>
                                    <Button bsStyle="info" onClick={this.handleOnDelete.bind(this, Number(id))}>Delete product</Button>
                                </p>
                        </div>
                                {products.myProducts &&
                                <ul>
                                    {products.myProducts.map((x)=>
                                    { return x.id === this.props.history.location.state.id?
                                            <li key={x.id} className="content">
                                                <p>  
                                                    {x.title}
                                                </p>
                                                {/* <p>
                                                    {x.subtitle} 
                                                </p>
                                                <p> 
                                                    {x.manufacturer} 
                                                </p>
                                                <p>
                                                    {x.marketer} 
                                                </p>
                                                <p>
                                                    {x.date} 
                                                </p>
                                                <p>
                                                    {x.description} 
                                                </p>
                                                <p>
                                                    {x.size} 
                                                </p>
                                                <p>
                                                    {x.price}$
                                                </p> */}
                                        </li>
                                        :null
                                     })
                                }
                                </ul>
                                }
                    </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {products} = state;
    return {
        products
    }
}

export default connect(mapStateToProps)(ProductInfo);