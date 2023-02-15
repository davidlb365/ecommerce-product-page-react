

const Overlay = ({setOverlay, isMounted, setIsMounted}) => {
    
    const handleAnimationEnd = () => {
        if(!isMounted) setOverlay(false)
    }
    return (
        <div className={`overlay ${isMounted ? 'fadeinOpacity' : 'fadeoutOpacity'}`} id="overlay">
            <div className={`overlay__div ${isMounted ? 'fadein' : 'fadeout'}`} onAnimationEnd={handleAnimationEnd}>
                <button className="overlay__close" id="overlay-close" onClick={() => setIsMounted(false)}>
                    <img src="images/icon-close.svg" alt="close icon" className="overlay__closeimg" />
                </button>
                <nav className="header__nav header__nav--overlay">
                    <a href="#" className="header__link">Collections</a>
                    <a href="#" className="header__link">Men</a>
                    <a href="#" className="header__link">Women</a>
                    <a href="#" className="header__link">About</a>
                    <a href="#" className="header__link">Contact</a>
                </nav>
            </div>
        </div>
    )
}

export default Overlay