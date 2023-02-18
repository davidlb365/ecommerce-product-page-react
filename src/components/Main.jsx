import { useEffect, useRef } from "react"

const Main = ({width, setModal, setModalIsMounted, carousel, quantity, setQuantity, productCart, setProductCart, currentImage, setCurrentImage, prevImage, setPrevImage}) => {
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
    const handleThumbnailClick = position => {
        setCurrentImage(position)
        setPrevImage(position)
    }
    const handleClickModal = () => {
        setModalIsMounted(true)
        setModal(true)
    }
    const handleClickQuantity = value => {
        if(quantity + value >= 0) setQuantity(quantity + value)
    }
    const handleClickCart = e => {
        if(quantity === 0) return
        const selector = e.target.parentElement.parentElement
        const obj = {
            img: '../images/image-product-1-thumbnail.jpg',
            name: selector.querySelector('.cart__title').textContent,
            price: parseFloat(selector.querySelector('.prices__price').textContent.slice(1)),
        }
        obj['q'] = productCart['q'] + quantity || quantity
        obj.total = obj.q * obj.price
        setProductCart(obj)
    }
    return (
        <main>
            <div className="main__grid">
                <div className="grid__left">
                    <div className='carousel'>
                        <ul className='carousel__container' ref={carousel} onClick={handleClickModal}>
                            {width < 768 ? (<li className='carousel__image'>
                                <img src="images/image-product-1.jpg" alt="image product 1" width={1000} height={1000} />
                            </li>) : prevImage === 1 && (
                                <li className='carousel__image'>
                                    <img src="images/image-product-1.jpg" alt="image product 1" width={1000} height={1000} />
                                </li>
                            )}
                            {width < 768 ? (<li className='carousel__image'>
                                <img src="images/image-product-2.jpg" alt="image product 2" width={1000} height={1000} />
                            </li>) : prevImage === 2 && (
                                <li className='carousel__image'>
                                    <img src="images/image-product-2.jpg" alt="image product 2" width={1000} height={1000} />
                                </li>
                            )}
                            {width < 768 ? (<li className='carousel__image'>
                                <img src="images/image-product-3.jpg" alt="image product 3" width={1000} height={1000} />
                            </li>) : prevImage === 3 && (
                                <li className='carousel__image'>
                                    <img src="images/image-product-3.jpg" alt="image product 3" width={1000} height={1000} />
                                </li>
                            )}
                            {width < 768 ? (<li className='carousel__image'>
                                <img src="images/image-product-4.jpg" alt="image product 4" width={1000} height={1000} />
                            </li>) : prevImage === 4 && (
                                <li className='carousel__image'>
                                    <img src="images/image-product-4.jpg" alt="image product 4" width={1000} height={1000} />
                                </li>
                            )}
                        </ul>
                        {width < 768 && (
                            <>
                                <button className='carousel__arrow carousel__arrow-left' onClick={handleLeftClick}>
                                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                                </button>
                                <button className='carousel__arrow carousel__arrow-right' onClick={handleRightClick}>
                                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                                </button>
                            </>
                        )}
                        
                    </div>
                    {width > 767 && (
                        <div className="thumbnail">
                            <button className={`thumbnail__button ${prevImage === 1 && 'thumbnail__button--active'}`} onClick={() => handleThumbnailClick(1)}>
                                <img src="images/image-product-1-thumbnail.jpg" alt="product-1" className="thumbnail__image" />
                            </button>
                            <button className={`thumbnail__button ${prevImage === 2 && 'thumbnail__button--active'}`} onClick={() => handleThumbnailClick(2)}>
                                <img src="images/image-product-2-thumbnail.jpg" alt="product-2" className="thumbnail__image" />
                            </button>
                            <button className={`thumbnail__button ${prevImage === 3 && 'thumbnail__button--active'}`} onClick={() => handleThumbnailClick(3)}>
                                <img src="images/image-product-3-thumbnail.jpg" alt="product-3" className="thumbnail__image" />
                            </button>
                            <button className={`thumbnail__button ${prevImage === 4 && 'thumbnail__button--active'}`} onClick={() => handleThumbnailClick(4)}>
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
                            <button className="items__button" id="minus-button" onClick={() => handleClickQuantity(-1)}>
                                <img src="images/icon-minus.svg" alt="minus" className="items__buttonimg" />
                            </button>
                            <p className="items__quantity" id="items-quantity">{quantity}</p>
                            <button className="items__button" id="plus-button" onClick={() => handleClickQuantity(1)}>
                                <img src="images/icon-plus.svg" alt="plus" className="items__buttonimg" />
                            </button>
                        </div>
                        <button className="button cart__button" id="cart-button" onClick={handleClickCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main