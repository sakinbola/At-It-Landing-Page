export default function Hamburger( {isOpen}) {
    return (
        <> 
        <div className="hamburger-icon">
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>

        <style jsx>{`
                .hamburger-icon {
                        width: 2rem;
                        height: 2rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: center;
                        cursor: pointer;
                        padding: 0.25rem;
                    }
                    
                    .bar {
                        width: 1.8rem;
                        height: 0.2rem;
                        background: white;
                        border-radius: 2px;
                        transition: all 0.3s ease;
                        transform-origin: center;
                    }
                    
                    .bar.open:nth-child(1) {
                        transform: rotate(45deg) translate(0.4rem, 0.4rem);
                    }
                    
                    .bar.open:nth-child(2) {
                        opacity: 0;
                        transform: scaleX(0);
                    }
                    
                    .bar.open:nth-child(3) {
                        transform: rotate(-45deg) translate(0.4rem, -0.4rem);
                    }
                    
                    .hamburger-icon:hover .bar {
                        background: rgba(255, 255, 255, 0.8);
                    }
                `}
                    
                    
        
        </style>
</>
    )
}
