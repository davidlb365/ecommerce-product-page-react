import { useEffect, useRef } from "react"

const Main = ({width, setModal, setModalIsMounted, quantity, setQuantity, productCart, setProductCart, currentImage, setCurrentImage, prevImage, setPrevImage, handleModalImageAnimationEnd, handleThumbnailClick, handleButtonImageClick}) => {
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
            q: productCart['q'] + quantity || quantity
        }
        obj.total = obj.q * obj.price
        setProductCart(obj)
    }
    return (
        <main>
            <div className="main__grid">
                <div className="grid__left">
                    <div className='images'>
                        <div className="pointerEvents" onClick={handleClickModal}>
                            {(currentImage === 1 || prevImage === 1) && (
                                <picture>
                                    <source srcSet="images/image-product-1.avif" type="image/avif" />
                                    <source srcSet="images/image-product-1.webp" type="image/webp" />
                                    <img src="images/image-product-1.jpg" width={1000} height={1000} alt="product-1" className={`images__image ${currentImage !== 1 && 'fadeoutOpacityFullZ'}`} onAnimationEnd={() => handleModalImageAnimationEnd(1)} />
                                </picture>
                            )}
                            {(currentImage === 2 || prevImage === 2) && (
                                <picture>
                                    <source srcSet="images/image-product-2.avif" type="image/avif" />
                                    <source srcSet="images/image-product-2.webp" type="image/webp" />
                                    <img src="images/image-product-2.jpg" width={1000} height={1000} alt="product-2" className={`images__image ${currentImage !== 2 && 'fadeoutOpacityFullZ'}`} onAnimationEnd={() => handleModalImageAnimationEnd(2)} />
                                </picture>
                            )}
                            {(currentImage === 3 || prevImage === 3) && (
                                <picture>
                                    <source srcSet="images/image-product-3.avif" type="image/avif" />
                                    <source srcSet="images/image-product-3.webp" type="image/webp" />
                                    <img src="images/image-product-3.jpg" width={1000} height={1000} alt="product-3" className={`images__image ${currentImage !== 3 && 'fadeoutOpacityFullZ'}`} onAnimationEnd={() => handleModalImageAnimationEnd(3)} />
                                </picture>
                            )}
                            {(currentImage === 4 || prevImage === 4) && (
                                <picture>
                                    <source srcSet="images/image-product-4.avif" type="image/avif" />
                                    <source srcSet="images/image-product-4.webp" type="image/webp" />
                                    <img src="images/image-product-4.jpg" width={1000} height={1000} alt="product-4" className={`images__image ${currentImage !== 4 && 'fadeoutOpacityFullZ'}`} onAnimationEnd={() => handleModalImageAnimationEnd(4)} />
                                </picture>
                            )}
                        </div>
                        {width < 768 && (
                            <>
                                <button className='carousel__arrow carousel__arrow-left' aria-label="left arrow" onClick={() => handleButtonImageClick(-1)}>
                                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                                </button>
                                <button className='carousel__arrow carousel__arrow-right' aria-label="right arrow" onClick={() => handleButtonImageClick(1)}>
                                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                                </button>
                            </>
                        )}   
                    </div>
                    {width > 767 && (
                        <div className="thumbnail">
                            <button className={`thumbnail__button ${currentImage === 1 && 'thumbnail__button--active'}`} onClick={() => handleThumbnailClick(1)}>
                                <picture>
                                    <source srcSet="images/image-product-1-thumbnail.avif" type="image/avif" />
                                    <source srcSet="images/image-product-1-thumbnail.webp" type="image/webp" />
                                    <img src="images/image-product-1-thumbnail.jpg" width={176} height={176} alt="product-1" className="thumbnail__image" />
                                </picture>
                            </button>
                            <button className={`thumbnail__button ${currentImage === 2 && 'thumbnail__button--active'}`} onClick={() => handleThumbnailClick(2)}>
                                <picture>
                                    <source srcSet="images/image-product-2-thumbnail.avif" type="image/avif" />
                                    <source srcSet="images/image-product-2-thumbnail.webp" type="image/webp" />
                                    <img src="images/image-product-2-thumbnail.jpg" width={176} height={176} alt="product-2" className="thumbnail__image" />
                                </picture>
                            </button>
                            <button className={`thumbnail__button ${currentImage === 3 && 'thumbnail__button--active'}`} onClick={() => handleThumbnailClick(3)}>
                                <picture>
                                    <source srcSet="images/image-product-3-thumbnail.avif" type="image/avif" />
                                    <source srcSet="images/image-product-3-thumbnail.webp" type="image/webp" />
                                    <img src="images/image-product-3-thumbnail.jpg" width={176} height={176} alt="product-3" className="thumbnail__image" />
                                </picture>
                            </button>
                            <button className={`thumbnail__button ${currentImage === 4 && 'thumbnail__button--active'}`} onClick={() => handleThumbnailClick(4)}>
                                <picture>
                                    <source srcSet="images/image-product-4-thumbnail.avif" type="image/avif" />
                                    <source srcSet="images/image-product-4-thumbnail.webp" type="image/webp" />
                                    <img src="images/image-product-4-thumbnail.jpg" width={176} height={176} alt="product-4" className="thumbnail__image" />
                                </picture>
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
                                <img src="images/icon-minus.svg" alt="minus" width={12} height={4} className="items__buttonimg" />
                            </button>
                            <p className="items__quantity" id="items-quantity">{quantity}</p>
                            <button className="items__button" id="plus-button" onClick={() => handleClickQuantity(1)}>
                                <img src="images/icon-plus.svg" alt="plus" width={12} height={12} className="items__buttonimg" />
                            </button>
                        </div>
                        <button className="button cart__button" id="cart-button" onClick={handleClickCart}>
                            <img src="/images/icon-cart.svg" width={22} height={20} alt="icon cart" />
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main