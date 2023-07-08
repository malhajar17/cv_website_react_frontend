import React, { useEffect, useState, useRef } from "react";
import { animated, useSpring } from "react-spring";
import thoughtBubbleImage from "../../../assets/thought_bubble.png";

const ImageElement = ({ startInterview, onAnimationComplete, state }) => {
    const animatePhoto = useSpring({
        transform: startInterview ? "translateX(-55%)" : "translateX(70%)",
        from: { transform: "translateX(-100%)" },
        config: { duration: 1000 },
        immediate: !startInterview,
        onRest: onAnimationComplete,
    });

    const [opacity, setOpacity] = useState([1, 0, 0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (state === "stopped_Recording") {
            const interval = setInterval(() => {
                setIndex((prevIndex) => (prevIndex + 1) % 3);
            }, 1000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [state]);

    useEffect(() => {
        setOpacity((prevOpacity) => {
            let newOpacity = [...prevOpacity];
            newOpacity[index] = 1;
            newOpacity[(index + 1) % 3] = 0;
            newOpacity[(index + 2) % 3] = 0;
            return newOpacity;
        });
    }, [index]);

    const imageRef = useRef();

    useEffect(() => {
        const handleResize = () => {
            if (imageRef.current) {
                const scaleFactor = window.innerWidth * 0.25 / imageRef.current.offsetWidth;
                imageRef.current.style.transform = `scale(${scaleFactor})`;
            }
        };

        window.addEventListener('resize', handleResize);

        // Call the function initially to set the scale
        handleResize();

        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <animated.div className="" style={animatePhoto}>
            <div ref={imageRef} className={`u-image-1 ${state === "speaking" ? "talking" : ""}`}>
                <div className="u-container-layout-2"></div>
                {state === "stopped_recording" && (
                    <div className="thought-bubble">
                        <div className="cloud">
                            Let me think
                        </div>
                        <div className="bubble" style={{ opacity: opacity[0] }}></div>


                    </div>
                )}
            </div>
        </animated.div>
    );
};

export default ImageElement;
