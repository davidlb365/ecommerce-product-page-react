
const HiddenCart = ({productCart, setProductCart}) => {
    return (
        <div className="hiddenCart" id="hidden-cart">
            <h3 className="hiddenCart__title">Cart</h3>
            <div className="hiddenCart__list" id="hidden-cart-list">
                {productCart?.q ? (
                    <>
                        <div className="hiddenObj" id="hiddenobj">
                            <img src={productCart.img} className="hiddenObj__img" />
                            <div className="hiddenObj__content">
                                <p className="hiddenObj__text">{productCart.name}</p>
                                <p className="hiddenObj__price">${productCart.price.toString()} x {productCart.q.toString()} <span className="hiddenObj__span">${productCart.total.toString()}</span></p>
                            </div>
                            <button aria-label="delete">
                                <img src="/images/icon-delete.svg" alt="delete button" width={14} height={16} onClick={() => setProductCart({})}/>
                            </button>
                        </div>
                        <button className="button checkout__button">Checkout</button>
                    </>
                ) :
                (   
                    <p className="hiddenCart__text">Your cart is empty.</p>
                )
                }
            </div>
        </div>
    )
}

export default HiddenCart