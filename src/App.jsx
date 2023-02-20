import { useEffect, useRef, useState } from "react"
import Header from "./components/Header"
import HiddenCart from "./components/HiddenCart"
import Main from "./components/Main"
import Modal from "./components/Modal"
import Overlay from "./components/Overlay"


function App() {
    const [width, setWidth] = useState(window.innerWidth)
    const [overlay, setOverlay] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const [modal, setModal] = useState(false)
    const [modalIsMounted, setModalIsMounted] = useState(false)
    const [quantity, setQuantity] = useState(0)
    const [productCart, setProductCart] = useState({})
    const [cart, setCart] = useState(false)
    const [prevImage, setPrevImage] = useState(1)
    const [currentImage, setCurrentImage] = useState(1)

    const handleButtonImageClick = amount => {
        const pos = currentImage + amount
        if(pos < 1 || pos > 4) return
        setCurrentImage(pos)
    }

    const handleThumbnailClick = position => {
        setCurrentImage(position)
    }

    const handleModalImageAnimationEnd = position => {
        if(currentImage !== position) setPrevImage(currentImage)
    }

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))
        return () => window.removeEventListener("resize", () => setWidth(window.innerWidth))
    }, [])
    return (
        <>
            <Header 
                width={width}
                setOverlay={setOverlay}
                setIsMounted={setIsMounted}
                productCart={productCart}
                cart={cart}
                setCart={setCart}
            />
            <Main width={width} setModal={setModal} setModalIsMounted={setModalIsMounted} quantity={quantity} setQuantity={setQuantity} productCart={productCart} setProductCart={setProductCart} currentImage={currentImage} setCurrentImage={setCurrentImage} prevImage={prevImage} setPrevImage={setPrevImage} handleModalImageAnimationEnd={handleModalImageAnimationEnd} handleThumbnailClick={handleThumbnailClick} handleButtonImageClick={handleButtonImageClick} />
            {cart && <HiddenCart productCart={productCart} setProductCart={setProductCart} />}
            {modal && <Modal setModal={setModal} modalIsMounted={modalIsMounted} setModalIsMounted={setModalIsMounted} currentImage={currentImage} setCurrentImage={setCurrentImage} prevImage={prevImage} setPrevImage={setPrevImage} handleModalImageAnimationEnd={handleModalImageAnimationEnd} handleThumbnailClick={handleThumbnailClick} handleButtonImageClick={handleButtonImageClick} />}
            {overlay && <Overlay setOverlay={setOverlay} isMounted={isMounted} setIsMounted={setIsMounted}/>}
        </>
    )
}

export default App
