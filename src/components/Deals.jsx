import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  TagIcon,
  ClockIcon,
  FireIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const DealCard = ({ deal, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="relative overflow-hidden rounded-2xl bg-linear-to-b from-[#8BC53F] to-[#00E5A0] text-white shadow-2xl hover:shadow-indigo-500/20 transition-all"
    >
      {/* Hot deal ribbon */}
      {deal.hot && (
        <div className="absolute top-0 right-6 bg-amber-500 text-indigo-900 px-3 py-1 text-xs font-bold rounded-b-lg shadow-md z-10 flex items-center">
          <FireIcon className="h-4 w-4 mr-1" /> HOT DEAL
        </div>
      )}

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-700/20 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-600/20 rounded-tr-full"></div>

      <div className="p-6 relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-semibold text-[#000000] uppercase tracking-wider flex items-center">
              <ClockIcon className="h-3 w-3 mr-1 text-[#000000]" /> {deal.timeLeft}
            </span>
            <h3 className="text-2xl font-bold mt-2 text-amber-500">{deal.title}</h3>
          </div>
          <motion.div
            className="bg-amber-400/90 text-indigo-900 px-4 py-2 rounded-full text-lg font-bold shadow-md"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {deal.discount}
          </motion.div>
        </div>

        <p className="text-[#000000] mb-6 flex-grow">{deal.description}</p>

        <div className="space-y-4 mb-6">
          <motion.div
            className="bg-[#000] rounded-xl p-4 backdrop-blur-sm"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono flex items-center gap-2 text-indigo-200">
                <TagIcon className="h-5 w-5 text-indigo-200" /> {deal.code}
              </span>
              <button
                className="text-indigo-200 hover:text-white transition-colors"
                onClick={() => navigator.clipboard.writeText(deal.code)}
                aria-label="Copy code"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                </svg>
              </button>
            </div>
          </motion.div>

          {deal.products && (
            <div className="flex -space-x-2">
              {deal.products.map((product, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={product}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <motion.button
          whileHover={{
            scale: 1.02,
            boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.3)",
          }}
          whileTap={{
            scale: 0.98,
            boxShadow: "0 5px 15px -5px rgba(245, 158, 11, 0.2)",
          }}
          className="w-full bg-linear-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-indigo-900 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 relative overflow-hidden"
          onClick={(e) => {
            e.stopPropagation();

            // Track the click (for analytics)
            console.log(`Claim offer clicked for deal ${deal.id}`);

            // Open in new tab with affiliate code
            window.open(
              "https://ng.oraimo.com/?affiliate_code=8tnqovz0",
              "_blank",
              "noopener,noreferrer"
            );

            // Optional: Add visual feedback
            e.currentTarget.classList.add("bg-amber-600");
            setTimeout(() => {
              e.currentTarget.classList.remove("bg-amber-600");
            }, 300);
          }}
        >
          {/* Ripple effect */}
          <motion.span
            className="absolute inset-0 bg-white opacity-0 rounded-xl"
            initial={{ opacity: 0, scale: 0 }}
            whileTap={{
              opacity: 0.3,
              scale: 1,
              transition: { duration: 0.5 },
            }}
          />
          Claim Offer
          <ArrowRightIcon className="h-5 w-5" />
          {/* Optional badge for mobile users */}
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse md:hidden">
            HOT
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
};

const Deals = () => {
  const deals = [
    {
      id: 1,
      title: "Flash Sale",
      code: "QJKWGFDT",
      discount: "25% OFF",
      description:
        "Get massive discounts on all Oraimo audio products this weekend only. Limited stock available!",
      timeLeft: "9d left",
      hot: true,
      products: [
        "https://cdn-img.oraimo.com/2025/07/11/oraimo-audio-3.jpg",
        "https://cdn-img.oraimo.com/2024/08/22/670x330-2.jpg",
      ],
    },
    {
      id: 2,
      title: "🔥 Best Seller Deal: Limited-Time Offer!",
      code: "QJKWGFDT", // Shorter, more memorable code
      discount: "20% OFF",
      description:
        "Shop our top-rated products at an exclusive discount! Perfect for first-time buyers. Use code **QJKWGFDT** at checkout. Hurry, this deal won’t last!",
      timeLeft: "Selling Fast⏳", // More urgency
      products: [
        "https://cdn-img.oraimo.com/2025/07/11/oraimo-watch-3.jpg",
        "https://cdn-img.oraimo.com/2024/08/22/670x330-2.jpg",
      ],
    },
    {
      id: 3,
      title: "Bundle Deal",
      code: "QJKWGFDT",
      discount: "40% OFF",
      description:
        "Special package discount when you buy any 3 Oraimo products together",
      timeLeft: "6 days left",
      hot: true,
    },
  ];

  return (
    <section className="py-16 bg-linear-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-amber-400 tracking-widest inline-flex items-center justify-center gap-2">
            <FireIcon className="h-4 w-4" /> LIMITED TIME OFFERS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Exclusive <span className="text-amber-400">Deals</span> Just For You
          </h2>
          <p className="text-indigo-300 max-w-2xl mx-auto">
            Don't miss out on these special offers. Limited quantities
            available!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <DealCard key={deal.id} deal={deal} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-indigo-300 mb-6">More deals coming soon...</p>
          <Link to={"/deals"}>
            <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-300 hover:bg-indigo-800/50 rounded-xl font-medium transition-all">
              View All Offers
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Deals;
