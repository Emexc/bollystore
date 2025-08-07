import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FullScreenCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Optimized images with responsive breakpoints in URL parameters
  const images = [
    {
      mobile: "https://cdn-img.oraimo.com/2025/07/11/oraimo-audio-3.jpg?w=600&h=1000&fit=crop&q=30",
      desktop: "https://cdn-img.oraimo.com/2025/07/11/oraimo-audio-3.jpg?w=1920&h=1080&fit=crop&q=70",
      title: "PREMIUM AUDIO",
      link: "https://ng.oraimo.com/shop-audio?affiliate_code=8tnqovz0"
    },
    {
      mobile: "https://cdn-img.oraimo.com/2025/07/11/oraimo-watch-3.jpg?w=600&h=1000&fit=crop&q=80",
      desktop: "https://cdn-img.oraimo.com/2025/07/11/oraimo-watch-3.jpg?w=1920&h=1080&fit=crop&q=70",
      title: "SMART WEARABLES",
      link: "https://ng.oraimo.com/shop-wearables?affiliate_code=8tnqovz0"
    },
    {
      mobile: "https://cdn-img.oraimo.com/2025/07/11/oraimo-wireless-earbuds-SpaceBuds-neo-plus-1.jpg",
      desktop: "https://cdn-img.oraimo.com/2025/07/11/oraimo-wireless-earbuds-SpaceBuds-neo-plus-1.jpg",
      title: "WIRELESS EARBUD",
      link: "https://ng.oraimo.com/shop-earbuds?affiliate_code=8tnqovz0"
    },
  ];

  // Handle swipe navigation for touch devices
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  // Auto-rotation with pause on hover
  useEffect(() => {
    let interval;
    const startInterval = () => {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    };

    startInterval();
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle click on image
  const handleImageClick = () => {
    window.open(images[currentIndex].link, '_blank');
  };

  return (
    <div
      className="relative w-full h-screen max-h-[100dvh] overflow-hidden"
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
          {/* Responsive image loading */}
          <picture>
            <source
              media="(max-width: 468px)"
              srcSet={images[currentIndex].mobile}
            />
            <source
              media="(min-width: 769px)"
              srcSet={images[currentIndex].desktop}
            />
            <img
              src={images[currentIndex].desktop}
              alt={`Slide ${currentIndex + 1}`}
              className="aspect-auto w-full h-full object-cover"
              loading="lazy"
            />
          </picture>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent"></div>

          {/* Click prompt indicator - shows on desktop */}
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 hidden md:block">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
              <span className="ml-2 text-white font-medium">Click to shop now</span>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation controls - hidden on very small screens */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white w-6 md:w-8" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide indicator text - hidden on mobile */}
      <motion.div
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center text-white hidden sm:block z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-sm md:text-base font-medium tracking-widest">
          {images[currentIndex].title}
        </p>
      </motion.div>

      {/* Manual navigation arrows - hidden on mobile */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors hidden md:block z-10"
        onClick={() =>
          setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
        }
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors hidden md:block z-10"
        onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default FullScreenCarousel;