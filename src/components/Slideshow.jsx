import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FullScreenCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Optimized images with proper dimensions for mobile (9:16 aspect ratio)
  const images = [
    {
      mobile: `https://cdn-img.oraimo.com/2025/07/11/oraimo-audio-1.jpg?w=${Math.min(414, windowSize.width)}&h=${Math.round(Math.min(414, windowSize.width) * 1.77)}&fit=crop&q=80&auto=format`,
      desktop: "https://cdn-img.oraimo.com/2025/07/11/oraimo-audio-3.jpg?w=1920&h=1080&fit=crop&q=70&auto=format",
      title: "PREMIUM AUDIO",
      link: "https://ng.oraimo.com/shop-audio?affiliate_code=8tnqovz0"
    },
    {
      mobile: `https://cdn-img.oraimo.com/2025/07/11/oraimo-watch-1.jpg?w=${Math.min(414, windowSize.width)}&h=${Math.round(Math.min(414, windowSize.width) * 1.77)}&fit=crop&q=80&auto=format`,
      desktop: "https://cdn-img.oraimo.com/2025/07/11/oraimo-watch-3.jpg?w=1920&h=1080&fit=crop&q=70&auto=format",
      title: "SMART WEARABLES",
      link: "https://ng.oraimo.com/shop-wearables?affiliate_code=8tnqovz0"
    },
    {
      mobile: `https://cdn-img.oraimo.com/2025/07/11/oraimo-wireless-earbuds-SpaceBuds-neo-plus-1.jpg?w=${Math.min(414, windowSize.width)}&h=${Math.round(Math.min(414, windowSize.width) * 1.77)}&fit=crop&q=80&auto=format`,
      desktop: "https://cdn-img.oraimo.com/2025/07/11/oraimo-wireless-earbuds-SpaceBuds-neo-plus-1.jpg?w=1920&h=1080&fit=crop&q=70&auto=format",
      title: "WIRELESS EARBUD",
      link: "https://ng.oraimo.com/shop-earbuds?affiliate_code=8tnqovz0"
    },
  ];

  // Handle swipe navigation
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) setCurrentIndex((prev) => (prev + 1) % images.length);
    if (touchStart - touchEnd < -50) setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageClick = () => {
    window.open(images[currentIndex].link, '_blank');
  };

  const isMobile = windowSize.width <= 768;

  return (
    <div
      className="relative mt-[100px] w-full h-[70vh] md:h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 cursor-pointer"
          onClick={handleImageClick}
        >
          {/* Dynamic image loading based on screen size */}
          <img
            src={isMobile ? images[currentIndex].mobile : images[currentIndex].desktop}
            alt={images[currentIndex].title}
            className={`w-full h-full object-cover ${isMobile ? 'object-top' : 'object-center'}`}
            loading={isMobile ? 'eager' : 'lazy'}
            decoding="async"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>

          {/* Desktop-only click prompt */}
          {!isMobile && (
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1.1 }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="bg-white/20 backdrop-blur-sm rounded-full p-3 flex items-center justify-center"
              >
                <span className="text-white text-sm font-medium">Click to shop now</span>
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white w-6" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide title - visible on all devices */}
      <motion.div
        className="absolute bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2 text-center text-white z-10 px-4 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-sm md:text-base font-medium tracking-wide whitespace-nowrap overflow-hidden text-ellipsis max-w-[90vw]">
          {images[currentIndex].title}
        </p>
      </motion.div>
    </div>
  );
};

export default FullScreenCarousel;