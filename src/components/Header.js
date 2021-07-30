import React from 'react';
class Header extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const{cartData}=this.props;
        return (
            <div>
                <div className="add-cart-icon">
                <span className="item-count">{cartData.length}</span>
                <img src="https://media.istockphoto.com/vectors/shopping-cart-line-icon-black-editable-stroke-trolley-basket-business-vector-id1201806395?k=6&m=1201806395&s=612x612&w=0&h=DcCZM8RLkgeNquexqUOGISCEt0l8FDEbyyD946yjykM=" />
                 </div>
            </div>
        );
    }
}
export default Header
