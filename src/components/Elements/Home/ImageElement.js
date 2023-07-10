    import React, { useEffect, useState, useRef } from "react";
    import { animated, useSpring } from "react-spring";
    import thoughtBubbleImage from "../../../assets/thought_bubble.png";

    const ImageElement = ({ startInterview, onAnimationComplete, state }) => {
        const isMobileDevice = () => {
            return /Mobi|Android|iPhone/i.test(navigator.userAgent);
        };


        const animatePhoto = useSpring({
            transform: startInterview && !isMobileDevice() ? "translateX(-55%)" : "translateX(70%)",
            from: { transform: "translateX(-100%)" },
            config: { duration: 1000 },
            immediate: !startInterview,
            onRest: onAnimationComplete,
        });

        const [opacity, setOpacity] = useState([1, 0, 0]);
        const [index, setIndex] = useState(0);

        useEffect(() => {
            if (state === "stopped_recording") {
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
                if (!isMobileDevice()) {
                    if (imageRef.current) {
                        const scaleFactor = window.innerWidth * 0.25 / imageRef.current.offsetWidth;
                        imageRef.current.style.transform = `scale(${scaleFactor})`;
                    }
                }
            };

            window.addEventListener("resize", handleResize);

            // Call the function initially to set the scale
            handleResize();

            // Clean up the event listener when the component unmounts
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        useEffect(() => {
            console.log(navigator.userAgent)
            if (isMobileDevice()) {
                if (imageRef.current) {
                    imageRef.current.style.transform = "translateX(-65%)";
                }
            }
        }, []);

        // Ref to store the previous state
        const prevState = useRef(state);

        useEffect(() => {
            if (prevState.current !== "speaking" && state === "speaking") {
                if (imageRef.current) {
                    // Remove the 'talking' class
                    imageRef.current.classList.remove('talking');

                    // Force a reflow to make sure the removal of the class is rendered
                    void imageRef.current.offsetWidth;

                    // Add the 'talking' class again to trigger the animation
                    imageRef.current.classList.add('talking');
                }
            }

            // Update the previous state
            prevState.current = state;
        }, [state]);

        const thoughtBubbleStyle = isMobileDevice() 
        ? { transform: 'scale(0.6) translateX(-40px) translateY(-200px)' } 
        : {};

        return (
            <animated.div className="" style={animatePhoto}>
                <div
                    ref={imageRef}
                    className={`u-image-1 ${state === "speaking" ? "talking"  : ""} ${isMobileDevice() ? "mobile-device" : ""}`}
                    style={{
                        ...animatePhoto,
                        backgroundImage: state == "speaking" ? 
                            (isMobileDevice() ?  
                            'url("https://cvfrontendstorage.blob.core.windows.net/front-end-photos/mohamed_talking_15fps.png")' 
                            : 'url("https://cvfrontendstorage.blob.core.windows.net/front-end-photos/Mohamad_talking.png")')
                        : 'url("https://cvfrontendstorage.blob.core.windows.net/front-end-photos/Myproject.png")'
                    }}
                    
                >
                    <div className="u-container-layout-2"></div>
                    {state === "stopped_recording" && (
                        <div className="thought-bubble"  style={thoughtBubbleStyle}>
                            <div className="cloud">Let me think</div>
                            <div className="bubble" style={{ opacity: opacity[0] }}></div>
                        </div>
                    )}
                </div>
            </animated.div>
        );
    };

    export default ImageElement;
