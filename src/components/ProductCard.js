const ProductCard = (props) => {
    const { name, price, image, description } = props.product;
    
    return (
      <div
        className="product-item-container"
        onClick={() => props.handleProductClick(props.product)}
      >
        <img className="product-image" src={image} alt={name} />
        <div>{name}</div>
        <div>{price}</div>
        <div>{description}</div>
      </div>
    );
  };
  
  export default ProductCard;
  