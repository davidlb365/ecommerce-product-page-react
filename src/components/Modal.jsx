
const Modal = ({setModal, modalIsMounted, setModalIsMounted, currentImage, setCurrentImage, prevImage, setPrevImage, handleModalImageAnimationEnd, handleThumbnailClick, handleButtonImageClick}) => {
    const handleModalAnimationEnd = () => {
        if(!modalIsMounted) setModal(false)
    }
    return (
        <div className={`modal ${modalIsMounted ? 'fadeinOpacity' : 'fadeoutOpacity'}`} id="modal" onAnimationEnd={handleModalAnimationEnd}>
            <div className={`modal__div ${modalIsMounted ? 'fadeinOpacityFull' : 'fadeoutOpacityFull'}`}>
                <button className="modal__close" id="modal-close" onClick={() => setModalIsMounted(false)}></button>
                <div className="modal__images">
                    {(currentImage === 1 || prevImage === 1) && (
                        <picture>
                            <source srcSet="images/image-product-1.avif" type="image/avif" />
                            <source srcSet="images/image-product-1.webp" type="image/webp" />
                            <img src="images/image-product-1.jpg" width={1000} height={1000} alt="product-1" className={`modal__image ${currentImage !== 1 && 'fadeoutOpacityFullZ'}`} onAnimationEnd={() => handleModalImageAnimationEnd(1)} />
                        </picture>
                    )}
                    {(currentImage === 2 || prevImage === 2) && (
                        <picture>
                            <source srcSet="images/image-product-2.avif" type="image/avif" />
                            <source srcSet="images/image-product-2.webp" type="image/webp" />
                            <img src="images/image-product-2.jpg" width={1000} height={1000} alt="product-2" className={`modal__image ${currentImage !== 2 && 'fadeoutOpacityFullZ'}`} onAnimationEnd={() => handleModalImageAnimationEnd(2)} />
                        </picture>
                    )}
                    {(currentImage === 3 || prevImage === 3) && (
                        <picture>
                            <source srcSet="images/image-product-3.avif" type="image/avif" />
                            <source srcSet="images/image-product-3.webp" type="image/webp" />
                            <img src="images/image-product-3.jpg" width={1000} height={1000} alt="product-3" className={`modal__image ${currentImage !== 3 && 'fadeoutOpacityFullZ'}`} onAnimationEnd={() => handleModalImageAnimationEnd(3)} />
                        </picture>
                    )}
                    {(currentImage === 4 || prevImage === 4) && (
                        <picture>
                            <source srcSet="images/image-product-4.avif" type="image/avif" />
                            <source srcSet="images/image-product-4.webp" type="image/webp" />
                            <img src="images/image-product-4.jpg" width={1000} height={1000} alt="product-4" className={`modal__image ${currentImage !== 4 && 'fadeoutOpacityFullZ'}`} onAnimationEnd={() => handleModalImageAnimationEnd(4)} />
                        </picture>
                    )}

                    <button className='carousel__arrow carousel__arrow-left-modal' onClick={() => handleButtonImageClick(-1)}>
                        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                    </button>
                    <button className='carousel__arrow carousel__arrow-right-modal' onClick={() => handleButtonImageClick(1)}>
                        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                    </button>
                </div>
                <div className="thumbnail__modal">
                    <button className={`thumbnail__modalbutton ${currentImage === 1 && 'thumbnail__modalbutton--active'}`} onClick={() => handleThumbnailClick(1)}>
                        <picture>
                            <source srcSet="images/image-product-1-thumbnail.avif" type="image/avif" />
                            <source srcSet="images/image-product-1-thumbnail.webp" type="image/webp" />
                            <img src="images/image-product-1-thumbnail.jpg" width={176} height={176} alt="product-1" className="thumbnail__modalimage" />
                        </picture>
                    </button>
                    <button className={`thumbnail__modalbutton ${currentImage === 2 && 'thumbnail__modalbutton--active'}`} onClick={() => handleThumbnailClick(2)}>
                        <picture>
                            <source srcSet="images/image-product-2-thumbnail.avif" type="image/avif" />
                            <source srcSet="images/image-product-2-thumbnail.webp" type="image/webp" />
                            <img src="images/image-product-2-thumbnail.jpg" width={176} height={176} alt="product-2" className="thumbnail__modalimage" />
                        </picture>
                    </button>
                    <button className={`thumbnail__modalbutton ${currentImage === 3 && 'thumbnail__modalbutton--active'}`} onClick={() => handleThumbnailClick(3)}>
                        <picture>
                            <source srcSet="images/image-product-3-thumbnail.avif" type="image/avif" />
                            <source srcSet="images/image-product-3-thumbnail.webp" type="image/webp" />
                            <img src="images/image-product-3-thumbnail.jpg" width={176} height={176} alt="product-3" className="thumbnail__modalimage" />
                        </picture>
                    </button>
                    <button className={`thumbnail__modalbutton ${currentImage === 4 && 'thumbnail__modalbutton--active'}`} onClick={() => handleThumbnailClick(4)}>
                        <picture>
                            <source srcSet="images/image-product-4-thumbnail.avif" type="image/avif" />
                            <source srcSet="images/image-product-4-thumbnail.webp" type="image/webp" />
                            <img src="images/image-product-4-thumbnail.jpg" width={176} height={176} alt="product-4" className="thumbnail__modalimage" />
                        </picture>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal