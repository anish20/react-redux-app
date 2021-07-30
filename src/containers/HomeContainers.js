import React from 'react';
import {connect} from 'react-redux';
import {addToCart,removeToCart} from '../services/actions/actions'
import Home from '../components/Home';

const mapSateToProps=sate=>({

})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})





export default   connect(mapSateToProps,mapDispatchToProps)(Home);