import { motion } from 'framer-motion';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const ProductCard = ({ product, index }) => {
  // Define affiliate links for each product category
  const getAffiliateLink = (productName) => {
    const baseUrl = 'https://ng.oraimo.com';
    const affiliateCode = '?affiliate_code=8tnqovz0';
    
    switch(productName.toLowerCase()) {
      case 'personal care':
        return `${baseUrl}/shop-personal-care${affiliateCode}`;
      case 'smart watch se':
        return `${baseUrl}/shop-wearables${affiliateCode}`;
      case 'power bank 10k':
        return `${baseUrl}/shop-power${affiliateCode}`;
      case 'home appliances':
        return `${baseUrl}/shop-home${affiliateCode}`;
      default:
        return `${baseUrl}/shop${affiliateCode}`;
    }
  };

  const handleClick = () => {
    window.open(getAffiliateLink(product.name), '_blank');
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent triggering the card click
    // Add your cart functionality here
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer relative"
      onClick={handleClick}
    >
      <div className="aspect-auto w-full relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <button 
          onClick={handleAddToCart}
          className="absolute top-2 right-2 bg-white/90 p-2 rounded-full shadow-md hover:bg-indigo-100 transition-colors"
          aria-label="Add to cart"
        >
          <ShoppingCartIcon className="h-5 w-5 text-gray-700" />
        </button>
      </div>
      <div className="p-3 text-center">
        <p className="font-medium text-gray-800 truncate">{product.name}</p>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Personal Care',
      image: 'https://cdn-img.oraimo.com/2024/11/15/pc-cl560.jpg'
    },
    {
      id: 2,
      name: 'Smart Watch SE',
      image: 'https://cdn-img.oraimo.com/2024/08/22/670x330-1.jpg'
    },
    {
      id: 3,
      name: 'Power Bank 10K',
      image: 'https://cdn-img.oraimo.com/2024/08/22/670x330-2.jpg'
    },
    {
      id: 4,
      name: 'Home Appliances',
      image: 'https://cdn-img.oraimo.com/2024/08/22/20240822-161319.jpg'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Oraimo <span className="text-amber-600">Collection</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Premium quality accessories with authentic warranty
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;