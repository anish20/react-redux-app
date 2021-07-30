import React from 'react';

function Home(props) {
    console.warn("Home",props.cartData);
    return (
        <div style={{overflow: 'hidden',}}>
            <h1>Home Component</h1>
            
            <div className="cart-wrapper">
                <div className="image-wrapper item">
                    <img  src="https://www.thechennaimobiles.com/image/cache/catalog/f19p-slr-600x600.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>Redmi F3 </span>
                    <span>Price : $1200</span>
                </div>
                <div className="button-wrapper item">
                    <button onClick={()=>props.addToCartHandler({id:1,name:"Redmi F3",price:1200 })}>Add To Cart</button>
                    <button className="remove-cart-btn" onClick={()=>props.removeToCartHandler()}>Remove To Cart</button>
                </div>
                
            </div>
        </div>
    );
}

export default Home;