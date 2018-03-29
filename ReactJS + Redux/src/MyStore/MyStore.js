import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {} from './MyStore.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { productActions } from '../_actions';

class MyStore extends Component {
    constructor(props){
        super(props);
    }

    handleOnDelete(id){
        console.log('id', id);
        const {dispatch} = this.props;
        dispatch(productActions.deleteProducts(id))
    }
    onClickEdit = () => {
        this.props.history.push({
            pathname: '/product',
            state: {edit:false}
        })
    }

    handleNavigate = (id) => {
        this.props.history.push({
            pathname: '/details/'+id,
            state: {id}
        })
    }
    //TODO: EDIT , DELETE (without connection to place in array --> id)
    render(){
        const {storeReducer, products} = this.props;
        return(
            <div>
                <div className="container-box">
                    <div className="text col-md-6">
                    <p className="lead" style={{marginTop:'25px'}}>
                        
                        Name of your store: <strong>{storeReducer.payload.store}</strong>
                        </p>
                            <p className="lead">
                                Address of your store: <strong>{storeReducer.payload.city}, {storeReducer.payload.street}, {storeReducer.payload.house}</strong>
                                    </p>
                                    <p className="lead">
                                        Country: <strong>{storeReducer.payload.country}</strong>
                                            </p>
                    </div>
                        <div className="buttons" style={{marginTop: "25px"}}>
                                <p>
                                <Link to="/store">
                                    <Button bsStyle="info">
                                            Edit Store
                                    </Button>
                                </Link>
                                </p>
                                <p>    
                                    <Button bsStyle="info" onClick={this.onClickEdit.bind(this)}>
                                            Add Product
                                    </Button>
                                </p>
                            </div>
                    </div>
                    <div>
                    {products.myProducts &&
                    <div> 
                        {products.myProducts.map((x)=>
                           <div key={x.id} className="products">
                                <div className="image">
                                        {<img src="https://www.siteimage.com.ua/uploads/images/blog/08-2017/internet-magazin-1391231123412331313825.jpg" className="img-thumbnail image-detail" style={{width: '150px', height: '125px'}}/>} <br/>
                                </div>
                                    <div className="text-prod">
                                        <p>  
                                            {x.title} {x.price}$
                                        </p>
                                        <p>
                                            <Button bsStyle="info" onClick={this.handleNavigate.bind(this, x.id)}>More details</Button>
                                        </p>
                                    </div>
                            </div>
                        )}
                    </div>
                    }
                        </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('My state', state);

    const {storeReducer, products} = state;
    return {
        storeReducer,
        products
    }
}
export default connect(mapStateToProps)(MyStore);