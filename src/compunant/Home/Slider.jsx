import images from "../Home/images.jsx";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Slider = () => {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);
  return (
    <div className="slider">
      <motion.div
        ref={carouselRef}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;
