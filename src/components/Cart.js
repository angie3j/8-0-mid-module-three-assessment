import { Component } from "react"

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            productCount: 0,
        };
    }

    render () {

        return (
            <div>
                <section className="products">
                    <h3>Subtotal</h3>
                    <h3>Tax</h3>
                    <h3>Total</h3>
                </section>

            </div>
        )


    }

}
    export default Cart
  

