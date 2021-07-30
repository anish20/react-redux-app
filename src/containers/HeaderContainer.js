import React from 'react';
import {connect} from 'react-redux';
import {addToCart,removeToCart} from '../services/actions/actions'
import Header from '../components/Header';

const mapSateToProps=state=>({
    cartData:state.cartItem
});

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
});





export default connect(mapSateToProps,mapDispatchToProps)(Header);