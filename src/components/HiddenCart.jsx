

const HiddenCart = () => {
    return (
        <div className="hiddenCart" id="hidden-cart">
            <h3 className="hiddenCart__title">Cart</h3>
            <div className="hiddenCart__list" id="hidden-cart-list">
                <p className="hiddenCart__text">Your cart is empty.</p>
            </div>
        </div>
    )
}

export default HiddenCart