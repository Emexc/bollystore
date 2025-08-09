import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  ShoppingBagIcon,
  SparklesIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const EarbudsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6a7.975 7.975 0 015.657 2.343m0 0a7.975 7.975 0 010 11.314m-11.314 0a7.975 7.975 0 010-11.314m0 0a7.975 7.975 0 015.657-2.343" />
  </svg>
);


const SmartwatchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
);

const Hero = () => {
  const navigate = useNavigate();

  const handleShopClick = () => {
    window.open("https://ng.oraimo.com/?affiliate_code=8tnqovz0", "_blank");
  };

  const handleDealsClick = () => {
    // Navigate to another page using React Router
    navigate("/deals");
  };

  return (
    <section className="relative bg-indigo-700 text-white min-h-screen flex items-center py-20 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-indigo-400 mix-blend-screen blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-indigo-500 mix-blend-screen blur-xl animate-float animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-indigo-300 mix-blend-screen blur-xl animate-float animation-delay-4000"></div>
      </motion.div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-12 md:mb-0"
        >
          <div className="mb-2 flex items-center gap-2">
            <span className="px-3 py-1 bg-indigo-600 rounded-full text-sm font-medium">
              New Collection
            </span>
            <span className="flex items-center gap-1 text-indigo-200">
              <SparklesIcon className="h-4 w-4" />
              Premium Quality
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-indigo-200">Elevate Your</span> <br />
            <span className="text-white">Tech Experience</span>
          </h1>

          <p className="text-xl text-indigo-100 mb-8 max-w-lg">
            Discover our authentic Oraimo accessories with warranty protection
            and exclusive member deals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black px-8 py-3 rounded-lg font-bold shadow-lg shadow-indigo-500/30 transition-all"
              onClick={handleShopClick}
            >
              Shop Here <ShoppingBagIcon className="h-5 w-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border-2 border-amber-300 text-white hover:bg-amber-300 hover:text-indigo-800 px-8 py-3 rounded-lg font-bold transition-all"
              onClick={handleDealsClick}
            >
              View Deals <ArrowRightIcon className="h-5 w-5" />
            </motion.button>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-indigo-200">
              <DevicePhoneMobileIcon className="h-5 w-5" />
              <span>Power Banks</span>
            </div>
            <div className="flex items-center gap-2 text-indigo-200">
              <EarbudsIcon className="h-5 w-5" />
              <span>Earphones</span>
            </div>
            <div className="flex items-center gap-2 text-indigo-200">
              <SmartwatchIcon className="h-5 w-5" />
              <span>Smart Watches</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center relative"
        >
          {/* Product showcase */}
          <div className="relative w-full max-w-lg">
            <div className="relative bg-linear-to-br from-indigo-600 to-indigo-800 rounded-3xl p-8 backdrop-blur-sm border border-indigo-400/20 shadow-2xl shadow-indigo-900/50">
              <div className="flex flex-col items-center">
                {/* Main product circle */}
                <div className="relative mb-8">
                  <div className="w-64 h-64 bg-indigo-900/50 rounded-full flex items-center justify-center border-2 border-indigo-500/30">
                    <div className="w-56 h-56 bg-indigo-800 rounded-full flex items-center justify-center">
                      <SparklesIcon className="h-24 w-24 text-indigo-300 animate-pulse" />
                    </div>
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-indigo-400 rounded-full p-3 shadow-md">
                    <ShoppingBagIcon className="h-6 w-6 text-indigo-800" />
                  </div>
                </div>

                {/* Product variants */}
                <div className="flex justify-center gap-4 mb-6">
                  {["bg-indigo-500", "bg-indigo-400", "bg-indigo-300"].map(
                    (color, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className={`w-10 h-10 rounded-full ${color} cursor-pointer border-2 border-white/30 shadow-sm`}
                      />
                    )
                  )}
                </div>

                {/* Discount badge */}
                <motion.div
                  className="absolute -top-5 -right-5 bg-amber-400 text-indigo-900 px-4 py-2 rounded-lg shadow-lg font-bold flex items-center gap-1 z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <SparklesIcon className="h-4 w-4" />
                  <span>30% OFF</span>
                </motion.div>
              </div>
            </div>

            {/* Floating product icons around the main circle */}
            {[
              {
                icon: (
                  <DevicePhoneMobileIcon className="h-8 w-8 text-indigo-300" />
                ),
                class: "-top-5 left-10",
              },
              {
                icon: (
                  <EarbudsIcon className="h-8 w-8 text-indigo-200" />
                ),
                class: "top-1/4 -right-5",
              },
              {
                icon: (
                  <SmartwatchIcon className="h-8 w-8 text-indigo-400" />
                ),
                class: "bottom-10 -left-5",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`absolute ${item.class} bg-indigo-800/80 p-3 rounded-full border border-indigo-400/20 shadow-sm`}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3 + index,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                {item.icon}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex flex-col items-center text-indigo-300"
        >
          <span className="text-sm mb-1">Scroll down</span>
          <div className="w-5 h-8 border-2 border-indigo-300 rounded-full">
            <motion.div
              className="w-1 h-2 bg-indigo-300 rounded-full mx-auto mt-1"
              animate={{
                y: [0, 4, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
