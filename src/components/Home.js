import React from 'react';

function Home(props) {
    return (
        <div style={{overflow: 'hidden',}}>
            <h1>Home Component</h1>
            <div className="add-cart-icon">
                <img src="https://media.istockphoto.com/vectors/shopping-cart-line-icon-black-editable-stroke-trolley-basket-business-vector-id1201806395?k=6&m=1201806395&s=612x612&w=0&h=DcCZM8RLkgeNquexqUOGISCEt0l8FDEbyyD946yjykM=" />
            </div>
            <div className="cart-wrapper">
                <div className="image-wrapper item">
                    <img  src="https://www.thechennaimobiles.com/image/cache/catalog/f19p-slr-600x600.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>Redmi F3 </span>
                    <span>Price : $12</span>
                </div>
                <div className="button-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Home;