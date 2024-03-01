import AirForceOne from './images/air-force-1.png';
import AirForceShadow from './images/air-force-shadow.png';
import AirForce from './images/air-force.png';
import './Product.css';

const productMap = {
    AirForceOne,
    AirForceShadow,
    AirForce,
}


function Product({productName}) {
    // console.log(AirForceOne);
    // console.log(productName);
    // console.log(productMap[productName]);

    return ( <div className="productDiv">
        <img className="product" src={productMap[productName]} alt=""></img>
    </div> );
}

export default Product;