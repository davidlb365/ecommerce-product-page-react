

const Modal = ({setModal, modalIsMounted, setModalIsMounted}) => {
    const handleModalAnimationEnd = () => {
        if(!modalIsMounted) setModal(false)
    }
    return (
        <div className={`modal ${modalIsMounted ? 'fadeinOpacity' : 'fadeoutOpacity'}`} id="modal" onAnimationEnd={handleModalAnimationEnd}>
            <div className={`modal__div ${modalIsMounted ? 'fadeinOpacityFull' : 'fadeoutOpacityFull'}`}>
                <button className="modal__close" id="modal-close" onClick={() => setModalIsMounted(false)}></button>
                <div className="modal__images">
                    <img src="images/image-product-1.jpg" alt="product-1" className="modal__image active" />
                    <img src="images/image-product-2.jpg" alt="product-2" className="modal__image" />
                    <img src="images/image-product-3.jpg" alt="product-3" className="modal__image" />
                    <img src="images/image-product-4.jpg" alt="product-4" className="modal__image" />
                    <a className="modal__button modal__prev" id="modal-prev">
                        <span className="modal__buttonimg modal__previmg"></span>
                    </a>
                    <a className="modal__button modal__next" id="modal-next">
                        <span className="modal__buttonimg modal__nextimg"></span>
                    </a>
                </div>
                <div className="thumbnail__modal">
                    <button className="thumbnail__modalbutton thumbnail__modalbutton--active">
                        <img src="images/image-product-1-thumbnail.jpg" alt="product-1" className="thumbnail__modalimage thumbnail__modalimage--active" />
                    </button>
                    <button className="thumbnail__modalbutton">
                        <img src="images/image-product-2-thumbnail.jpg" alt="product-2" className="thumbnail__modalimage" />
                    </button>
                    <button className="thumbnail__modalbutton">
                        <img src="images/image-product-3-thumbnail.jpg" alt="product-3" className="thumbnail__modalimage" />
                    </button>
                    <button className="thumbnail__modalbutton">
                        <img src="images/image-product-4-thumbnail.jpg" alt="product-4" className="thumbnail__modalimage" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal