import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  TagIcon,
  ClockIcon,
  FireIcon,
  EyeIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

const DealCard = ({ deal, index, onClick }) => {
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

      {/* View count badge */}
      <div className="absolute top-0 left-4 bg-indigo-600/80 text-indigo-100 px-2 py-1 text-xs font-medium rounded-b-lg flex items-center">
        <EyeIcon className="h-3 w-3 mr-1" /> {deal.views || 0}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-700/20 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-600/20 rounded-tr-full"></div>

      <div className="p-6 relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider flex items-center">
              <ClockIcon className="h-3 w-3 mr-1 text-[#000]" /> {deal.timeLeft}
            </span>
            <h3 className="text-2xl font-bold mt-2 text-amber-400">{deal.title}</h3>
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

        <p className="text-[#000] mb-6 flex-grow">{deal.description}</p>

        <div className="space-y-4 mb-6">
          <motion.div
            className="bg-[#000] rounded-xl p-4 backdrop-blur-sm"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono flex items-center gap-2 text-indigo-200">
                <TagIcon className="h-5 w-5" /> {deal.code}
              </span>
              <button
                className="text-indigo-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigator.clipboard.writeText(deal.code);
                }}
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
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-linear-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-indigo-900 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
          onClick={(e) => {
            e.stopPropagation();
            onClick(deal.id);
            // Redirect to Oraimo store with affiliate code
            window.open(
              "https://ng.oraimo.com/?affiliate_code=8tnqovz0",
              "_blank"
            );
          }}
        >
          Claim Offer
          <ArrowRightIcon className="h-5 w-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const PopularDeals = ({ clickedDeals }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-linear-to-b from-[#8BC53F] to-[#00E5A0] rounded-2xl p-6 backdrop-blur-sm border border-indigo-700/50 mt-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <ChartBarIcon className="h-6 w-6 text-amber-400" />
        <h3 className="text-xl font-bold text-[#000]">
          Popular Deals Right Now
        </h3>
      </div>

      {clickedDeals.length > 0 ? (
        <div className="space-y-4">
          {clickedDeals.slice(0, 3).map((click, index) => {
            const deal = initialDeals.find((d) => d.id === click.dealId);
            if (!deal) return null;

            return (
              <div
                key={index}
                className="flex items-center gap-4 p-3 bg-indigo-900/30 rounded-xl hover:bg-indigo-800/50 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-700/50 flex items-center justify-center">
                  <span className="text-xl font-bold text-amber-400">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-white">{deal.title}</h4>
                    <span className="text-xs text-[#000]">
                      {new Date(click.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs bg-indigo-700/50 px-2 py-1 rounded-full flex items-center">
                      <TagIcon className="h-3 w-3 mr-1 text-amber-400" /> {deal.code}
                    </span>
                    <span className="text-xs bg-amber-400/20 text-amber-400 px-2 py-1 rounded-full">
                      {deal.discount}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-6 text-indigo-300">
          <p>No deals clicked yet. Click on offers to see them here!</p>
        </div>
      )}
    </motion.div>
  );
};

const initialDeals = [
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

const Deal = () => {
  const [deals, setDeals] = useState(initialDeals);
  const [clickedDeals, setClickedDeals] = useState([]);

  // Load clicked deals from localStorage on component mount
  useEffect(() => {
    const savedClicks = localStorage.getItem("clickedDeals");
    if (savedClicks) {
      setClickedDeals(JSON.parse(savedClicks));
    }
  }, []);

  const handleDealClick = (dealId) => {
    // Update view count
    setDeals((prevDeals) =>
      prevDeals.map((deal) =>
        deal.id === dealId ? { ...deal, views: (deal.views || 0) + 1 } : deal
      )
    );

    // Add to clicked deals with timestamp
    const newClick = {
      dealId,
      timestamp: new Date().toISOString(),
    };

    const updatedClicks = [newClick, ...clickedDeals].slice(0, 10); // Keep only last 10
    setClickedDeals(updatedClicks);

    // Save to localStorage
    localStorage.setItem("clickedDeals", JSON.stringify(updatedClicks));

    // In a real app, you would also send this data to your analytics/backend
    console.log(`Deal ${dealId} clicked at ${newClick.timestamp}`);
  };

  return (
    <section className="min-h-screen py-16 bg-linear-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 max-w-7xl mt-[70px]">
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
            <DealCard
              key={deal.id}
              deal={deal}
              index={index}
              onClick={handleDealClick}
            />
          ))}
        </div>

        <PopularDeals clickedDeals={clickedDeals} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-indigo-400 mb-6">More deals coming soon...</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Deal;
