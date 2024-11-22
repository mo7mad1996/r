import React, { useState, useRef, useEffect, useCallback } from "react";

const Magnifier = ({ src, width = 300, height = 300, zoomLevel = 2, fixedPosition = 'bottom-right' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [magnifierSize, setMagnifierSize] = useState(0); // Magnifier lens size
  const imageRef = useRef(null);
  const magnifierRef = useRef(null);

  // Calculate magnifier size based on screen size
  const updateMagnifierSize = useCallback(() => {
    const screenSize = Math.min(window.innerWidth, window.innerHeight); // Use the smaller screen dimension
    const newSize = screenSize * 0.2; // Set magnifier size to 20% of the smaller screen dimension
    setMagnifierSize(newSize);
  }, []);

  useEffect(() => {
    updateMagnifierSize();
    window.addEventListener("resize", updateMagnifierSize); // Update magnifier size on resize

    return () => {
      window.removeEventListener("resize", updateMagnifierSize); // Clean up event listener
    };
  }, [updateMagnifierSize]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleMouseMove = (e) => {
    if (magnifierRef.current && imageRef.current) {
      const { left, top, width: imgWidth , height: imgHeight } = imageRef.current.getBoundingClientRect();
      
      // Get mouse position relative to the image
      let x = e.clientX - left ;
      let y = e.clientY - top ;

      // Prevent magnifier from going out of bounds
      if (x < 0) x = 1;
      if (y < 0) y = 2;
      if (x > imgWidth) x = imgWidth;
      if (y > imgHeight) y = imgHeight;

      // Adjust background position of magnifier window to show the zoomed area
      // Add an offset of 30px to shift the magnified image to the right
      const offsetX = 30; // Amount to shift the image to the right
      magnifierRef.current.style.backgroundPosition = `-${(x * zoomLevel - magnifierSize * 2 ) + offsetX - 100}px -${y * zoomLevel - magnifierSize / 2}px`;
    }
  };

  // Set the fixed position for the magnifier window
  const setFixedPositionStyles = () => {
    const positions = {
      'top-left': { top: '1000px', left: '1000px' },
      'top-right': { top: '1000px', right: '1000px' },
      'bottom-left': { bottom: '1000px', left: '1500px' },
      'bottom-right': { bottom: '0px', right: '650px' },
      'center': { top: '50%', left: '10%', transform: 'translate(-50%, -100%)' },
    };
    return positions[fixedPosition] || positions['bottom-right'];
  };

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        cursor: "zoom-in",
      }}
    >
      <img
        ref={imageRef}
        src={src}
        alt="Product"
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      />
      {isHovered && (
        <div
          ref={magnifierRef}
          style={{
            position: "fixed", // Fix position of the magnifier
            width: `${magnifierSize * 7}px`, // Dynamic magnifier size
            height: `${magnifierSize * 5}px`, // Dynamic magnifier size
            backgroundImage: `url(${src})`,
            backgroundColor: "rgba(255, 255, 255, 1)",
            backgroundSize: `${width * zoomLevel}px ${height * zoomLevel}px`,
            backgroundRepeat: "no-repeat",
            pointerEvents: "none",
            display: "block",
            zIndex: 999999999,
            boxShadow: "0px 2px 10px 2px #00000040",
            ...setFixedPositionStyles(), // Apply fixed position styles
          }}
        ></div>
      )}
    </div>
  );
};

export default Magnifier;
