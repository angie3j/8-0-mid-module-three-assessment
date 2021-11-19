const SelectedProduct = (props) => {
    const { name, price, image, description } = props.product;
    
    
    
return (
        <div className="products">
            <section>
                <h3>{name}</h3>
                <p>{price}</p>
                <img className='product-image' src={image} alt='Selected Product' />
                <p>{description}</p>
            </section>
        </div>
    )

}

export default SelectedProduct