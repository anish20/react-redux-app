import React from 'react';
import {connect} from 'react-redux';
import {addToCart,removeToCart} from '../services/actions/actions'
import Home from '../components/Home';

const mapSateToProps=state=>({
    cartData:state.cartItem
})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart())
    

})





export default   connect(mapSateToProps,mapDispatchToProps)(Home);