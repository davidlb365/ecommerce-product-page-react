
const Modal = ({setModal, modalIsMounted, setModalIsMounted, currentImage, setCurrentImage, prevImage, setPrevImage, handleModalImageAnimationEnd, handleThumbnailClick, handleButtonImageClick}) => {
    const handleModalAnimationEnd = () => {
        if(!modalIsMounted) setModal(false)
    }
    return (
        <div className={`modal ${modalIsMounted ? 'fadeinOpacity' : 'fadeoutOpacity'}`} id="modal" onAnimationEnd={handleModalAnimationEnd}>
            <div className={`modal__div ${modalIsMounted ? 'fadeinOpacityFull' : 'fadeoutOpacityFull'}`}>
                <button className="modal__close" id="modal-close" onClick={() => setModalIsMounted(false)}></button>
                <div className="modal__images">
                    {(currentImage === 1 || prevImage === 1) && <img src="images/image-product-1.jpg" alt="product-1" width={1000} height={1000} className={`modal__image ${currentImage !== 1 && 'fadeoutOpacityFullZ'}`} onAnimationEnd={() => handleModalImageAnimationEnd(1)} />}
                    {(currentImage === 2 || prevImage === 2) && <img src="images/image-product-2.jpg" alt="product-2" width={1000} height={1000} className={`modal__image ${currentImage !== 2 && 'fadeoutOpacityFullZ'}`} onAnimationEnd={() => handleModalImageAnimationEnd(2)} />}
                    {(currentImage === 3 || prevImage === 3) && <img src="images/image-product-3.jpg" alt="product-3" width={1000} height={1000} className={`modal__image ${currentImage !== 3 && 'fadeoutOpacityFullZ'}`} onAnimationEnd={() => handleModalImageAnimationEnd(3)} />}
                    {(currentImage === 4 || prevImage === 4) && <img src="images/image-product-4.jpg" alt="product-4" width={1000} height={1000} className={`modal__image ${currentImage !== 4 && 'fadeoutOpacityFullZ'}`} onAnimationEnd={() => handleModalImageAnimationEnd(4)} />}

                    <button className='carousel__arrow carousel__arrow-left-modal' onClick={() => handleButtonImageClick(-1)}>
                        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                    </button>
                    <button className='carousel__arrow carousel__arrow-right-modal' onClick={() => handleButtonImageClick(1)}>
                        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                    </button>
                </div>
                <div className="thumbnail__modal">
                    <button className={`thumbnail__modalbutton ${currentImage === 1 && 'thumbnail__modalbutton--active'}`} onClick={() => handleThumbnailClick(1)}>
                        <img src="images/image-product-1-thumbnail.jpg" alt="product-1" className="thumbnail__modalimage" />
                    </button>
                    <button className={`thumbnail__modalbutton ${currentImage === 2 && 'thumbnail__modalbutton--active'}`} onClick={() => handleThumbnailClick(2)}>
                        <img src="images/image-product-2-thumbnail.jpg" alt="product-2" className="thumbnail__modalimage" />
                    </button>
                    <button className={`thumbnail__modalbutton ${currentImage === 3 && 'thumbnail__modalbutton--active'}`} onClick={() => handleThumbnailClick(3)}>
                        <img src="images/image-product-3-thumbnail.jpg" alt="product-3" className="thumbnail__modalimage" />
                    </button>
                    <button className={`thumbnail__modalbutton ${currentImage === 4 && 'thumbnail__modalbutton--active'}`} onClick={() => handleThumbnailClick(4)}>
                        <img src="images/image-product-4-thumbnail.jpg" alt="product-4" className="thumbnail__modalimage" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal