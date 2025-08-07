import { motion } from 'framer-motion';
import { SparklesIcon, CubeIcon, ShieldCheckIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const FeatureCard = ({ icon, title, description, color }) => {
  const IconComponent = icon;
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-gradient-to-br from-${color}-900 to-${color}-800 p-6 rounded-2xl shadow-lg`}
    >
      <div className={`w-12 h-12 bg-${color}-700 rounded-xl flex items-center justify-center mb-4`}>
        <IconComponent className={`h-6 w-6 text-${color}-300`} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className={`text-${color}-200`}>{description}</p>
    </motion.div>
  );
};

const About = () => {
  const stats = [
    { value: '1,000+', label: 'Happy Customers' },
    { value: '3 Years', label: 'In Business' },
    { value: '100%', label: 'Authentic Products' },
    { value: '24/7', label: 'Customer Support' }
  ];

  const features = [
    {
      icon: CubeIcon,
      title: 'Premium Products',
      description: 'We source only the highest quality accessories from trusted manufacturers.',
      color: 'indigo'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Verified Authenticity',
      description: 'Every product comes with official warranty and authenticity verification.',
      color: 'emerald'
    },
    {
      icon: LightBulbIcon,
      title: 'Tech Innovation',
      description: 'We stay ahead of trends to bring you cutting-edge technology.',
      color: 'amber'
    }
  ];

  return (
    <section className="bg-linear-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-indigo-500/10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center text-indigo-400 font-medium mb-4">
            <SparklesIcon className="h-5 w-5 mr-2" /> ABOUT BOLLYSTORE
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Powering Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-400">Tech Lifestyle</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We're more than just an accessories store - we're your partner in staying connected and powered up in today's digital world.
          </p>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center"
            >
              <div className="text-3xl font-bold text-indigo-400 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Bollystore?</h2>
          <p className="text-gray-400">
            We're committed to excellence in every aspect of our business, from product selection to customer service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Founded in 2022, Bollystore began as a small passion project to bring quality tech accessories to our community. 
                What started as a modest online store has grown into a trusted name in the industry.
              </p>
              <p>
                Our journey hasn't been without challenges, but our commitment to authenticity and customer satisfaction has 
                remained unwavering. Every product we sell meets our strict quality standards.
              </p>
              <p>
                Today, we're proud to serve thousands of customers across the region, helping them stay connected with reliable 
                tech accessories that enhance their daily lives.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-indigo-900/50 to-transparent p-8 rounded-2xl border-l-4 border-indigo-500"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <SparklesIcon className="h-6 w-6 mr-2 text-amber-400" />
              Our Mission
            </h3>
            <p className="text-gray-300">
              To empower individuals and businesses with high-quality tech accessories that combine innovative design, 
              reliable performance, and exceptional value - all backed by our commitment to customer satisfaction.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;