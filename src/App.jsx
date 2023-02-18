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

    const carousel = useRef(null)

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
            const {clientWidth, scrollWidth, scrollLeft} = carousel.current
            carousel.current.classList.add('smoothauto')
            for(let i = 0; i < scrollWidth; i += clientWidth) {
                if(Math.abs(scrollLeft - i) < clientWidth / 2) {
                    carousel.current.scrollLeft = i
                    break
                }
            }
            carousel.current.classList.remove('smoothauto')
        })
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
            <Main width={width} setModal={setModal} setModalIsMounted={setModalIsMounted} carousel={carousel} quantity={quantity} setQuantity={setQuantity} productCart={productCart} setProductCart={setProductCart} currentImage={currentImage} setCurrentImage={setCurrentImage} prevImage={prevImage} setPrevImage={setPrevImage} />
            {cart && <HiddenCart productCart={productCart} setProductCart={setProductCart} />}
            {modal && <Modal setModal={setModal} modalIsMounted={modalIsMounted} setModalIsMounted={setModalIsMounted} currentImage={currentImage} setCurrentImage={setCurrentImage} prevImage={prevImage} setPrevImage={setPrevImage} />}
            {overlay && <Overlay setOverlay={setOverlay} isMounted={isMounted} setIsMounted={setIsMounted}/>}
        </>
    )
}

export default App
