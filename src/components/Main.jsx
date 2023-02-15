import { useEffect, useRef } from "react"


const Main = ({width, setModal, setModalIsMounted, carousel}) => {
    // const carousel = useRef(null)
    useEffect(() => {
        if(carousel === null) return
        width
    }, [width])
    const handleLeftClick = () => {
        const clientWidth = carousel.current.clientWidth
        const scrollLeft = carousel.current.scrollLeft
        if(scrollLeft !== 0 && scrollLeft % clientWidth !== 0) return
        carousel.current.scrollLeft = scrollLeft - clientWidth
    }
    const handleRightClick = () => {
        const clientWidth = carousel.current.clientWidth
        const scrollLeft = carousel.current.scrollLeft
        if(scrollLeft !== 0 && scrollLeft % clientWidth !== 0) return
        carousel.current.scrollLeft = scrollLeft + clientWidth
    }
    const handleClickModal = () => {
        if(width < 768) return
        setModalIsMounted(true)
        setModal(true)
    }
    return (
        <main>
            <div className="main__grid">
                <div className="grid__left">
                    {/* <div className="images" onClick={handleClickModal}>
                        <img src="images/image-product-1.jpg" alt="product-1" className="images__image active" />
                        <img src="images/image-product-2.jpg" alt="product-2" className="images__image" />
                        <img src="images/image-product-3.jpg" alt="product-3" className="images__image" />
                        <img src="images/image-product-4.jpg" alt="product-4" className="images__image" />
                        <a className="images__button images__prev" id="button-prev">
                            <span className="images__buttonimg images__previmg"></span>
                        </a>
                        <a className="images__button images__next" id="button-next">
                            <span className="images__buttonimg images__nextimg"></span>
                        </a>
                    </div> */}
                    <div className='carousel' onClick={handleClickModal}>
                        <ul className='carousel__container' ref={carousel}>
                            <li className='carousel__image'>
                                <img src="images/image-product-1.jpg" alt="image product 1" width={1000} height={1000} />
                            </li>
                            <li className='carousel__image'>
                                <img src="images/image-product-2.jpg" alt="image product 1" width={1000} height={1000} />
                            </li>
                            <li className='carousel__image'>
                                <img src="images/image-product-3.jpg" alt="image product 1" width={1000} height={1000} />
                            </li>
                            <li className='carousel__image'>
                                <img src="images/image-product-4.jpg" alt="image product 1" width={1000} height={1000} />
                            </li>
                        </ul>
                        <button className='carousel__arrow carousel__arrow-left' onClick={handleLeftClick}>
                            <span>&#60;</span>
                        </button>
                        <button className='carousel__arrow carousel__arrow-right' onClick={handleRightClick}>
                            <span>&#62;</span>
                        </button>
                    </div>
                    {width > 767 && (
                        <div className="thumbnail">
                            <button className="thumbnail__button thumbnail__button--active">
                                <img src="images/image-product-1-thumbnail.jpg" alt="product-1" className="thumbnail__image thumbnail__image--active" />
                            </button>
                            <button className="thumbnail__button">
                                <img src="images/image-product-2-thumbnail.jpg" alt="product-2" className="thumbnail__image" />
                            </button>
                            <button className="thumbnail__button">
                                <img src="images/image-product-3-thumbnail.jpg" alt="product-3" className="thumbnail__image" />
                            </button>
                            <button className="thumbnail__button">
                                <img src="images/image-product-4-thumbnail.jpg" alt="product-4" className="thumbnail__image" />
                            </button>
                        </div>
                    )}
                </div>
                <div className="cart">
                    <p className="cart__sneaker">Sneaker company</p>
                    <h2 className="cart__title">Fall Limited Edition Sneakers</h2>
                    <p className="cart__description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                    <div className="prices">
                        <div className="prices__left">
                            <p className="prices__price">&#36;125.00</p>
                            <p className="prices__percentage">50%</p>
                        </div>
                        <p className="prices__right">&#36;250.00</p>
                    </div>
                    <div className="cart__items">
                        <div className="items">
                            <button className="items__button" id="minus-button">
                                <img src="images/icon-minus.svg" alt="minus" className="items__buttonimg" />
                            </button>
                            <p className="items__quantity" id="items-quantity">0</p>
                            <button className="items__button" id="plus-button">
                                <img src="images/icon-plus.svg" alt="plus" className="items__buttonimg" />
                            </button>
                        </div>
                        <button className="button cart__button" id="cart-button">Add to cart</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main