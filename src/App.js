
import { Component } from "react";
import "./App.css";
import Cart from "./components/Cart";
import SelectedProduct from "./components/SelectedProduct";
import ProductCard from "./components/ProductCard";
import productData from "./data/productData"
import Checkout from "./components/Checkout"


class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      inventory: productData,
      selectedProduct: {
        name: '',
        image: "https://via.placeholder.com/100",
      },
    };
  };

  handleProductClick = (product) => {
    this.setState({
      selectedProduct: product,
    });
  };

addProduct = () => {
  const { cart, selectedProduct } = this.state;
  this.setState({cart: [...cart, selectedProduct] });
};

addInventory = (inventory) => {
  inventory.id = this.state.inventory.length + 1;
  this.setState({ inventory: [...this.state.inventory, inventory] });
}


  render() {
      const { selectedProduct, cart } = this.state;
      const inventory = this.state.inventory.map((product) => {
        return (
        <ProductCard
        key={product.id}
        product={product}
        handleProductClick={this.handleProductClick}
        />
        );
      })

    return (
        <div className='app' id='app-container'>
          <h1>My Garage Sale</h1>
          <SelectedProduct product={selectedProduct}/>
          {selectedProduct.name && (
            <button onClick={this.addProduct}>Add To Cart</button>
          )}
        
          <div id="cart">{inventory}</div>
          {cart.length > 0 && <Cart products={cart} />}
          <Checkout clickHandler={this.addProduct} />
      </div>
    
    );
}
}

export default App;
