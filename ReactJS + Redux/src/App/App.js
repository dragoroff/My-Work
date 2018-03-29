import React, { Component } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MyStore from '../MyStore/MyStore';
import ProductInput from '../ProductInput/ProductInput';
import StoreInput from '../StoreInput/StoreInput';
import ProductInfo from '../ProductInfo/ProductInfo';


import {} from './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        console.log("dispatch in App ctor", dispatch);

        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    routHandler(x){

        return (
            localStorage.getItem('user')
                ? <HomePage {...x} />
                : <Redirect to={{ pathname: '/login', state: { from: x.location } }} />
        )
    };
    routHandlerStore(x){
    
        const {storeReducer} = this.props;

       return (
            !storeReducer.payload.addedStore
                ? <MyStore {...x} />
                : <Redirect to={{ pathname: '/store', state: { from: x.location } }} />
        )
    };

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container-fluid">
                    <div className="col-sm-8 col-sm-offset-2">
                        <Router history={console.log("history", history) || history}>
                            <div>
                                <Header/>
                                {alert.message &&
                                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                                }
                                    <Route exact path="/" render={this.routHandler} />
                                    <Route path="/login" component={LoginPage} />
                                    <Route path="/register" component={RegisterPage} />
                                    <Route path="/mystore" component={MyStore} />
                                    <Route path="/product" component={ProductInput} />
                                    <Route path="/details/:id" component={ProductInfo} />
                                    <Route path="/store" component={StoreInput} />
                                <Footer/>
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {

    const { alert, storeReducer } = state;

    return {
        alert,
        storeReducer,
    };
}


/**
 * 
 * -------------connect function----------------
 * Connects a React component to a Redux store.
 *
 * - Without arguments, just wraps the component, without changing the behavior / props
 *
 * - If 2 params are passed (3rd param, mergeProps, is skipped), default behavior
 * is to override ownProps (as stated in the docs), so what remains is everything that's
 * not a state or dispatch prop
 *
 * - When 3rd param is passed, we don't know if ownProps propagate and whether they
 * should be valid component props, because it depends on mergeProps implementation.
 * As such, it is the user's responsibility to extend ownProps interface from state or
 * dispatch props or both when applicable
 *
 * @param mapStateToProps
 * @param mapDispatchToProps
 * @param mergeProps
 * @param options
 */
const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 