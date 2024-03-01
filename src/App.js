import Product from './Product';
import './App.css';
import {useState} from 'react';


function getRandomProducts(){
  const productArray = ['AirForceOne','AirForceShadow','AirForce'];
  return productArray[Math.floor(Math.random()*productArray.length)]
}


function App() {
  const [products, setProducts] = useState([]);

  const handleClick = () => {
    setProducts([...products, getRandomProducts()])

  };

  const productList = products.map((product,index) => 
    {
      return <Product key={index} productName={product}/>;

  });

  return (
    <div className="App">
      <button className="appButton" onClick={handleClick}> Rastgele Ürün Ekle</button>
      <div className="productList">{productList}</div>
    </div>
  );
}

export default App;
