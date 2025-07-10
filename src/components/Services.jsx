import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layers, Monitor, MessageCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Creating modern, responsive websites tailored to your business needs.',
      features: [
        'Custom website development with HTML, CSS, and JavaScript',
        'Responsive design for mobile and desktop platforms',
        'Integration of front-end frameworks like Bootstrap',
        'Basic to advanced SEO implementation',
        'Content Management System (CMS) integration',
        'Ongoing maintenance and updates'
      ],
      buttonText: 'Get a Quote',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Layers,
      title: 'Full Stack Development',
      description: 'Complete end-to-end solutions for web applications, from frontend to backend.',
      features: [
        'Development using ASP.NET Core and JavaScript frameworks',
        'Database design and integration (SQL Server, MySQL)',
        'API development and integration',
        'User authentication and authorization systems',
        'Deployment and cloud hosting setup',
        'Scalable architecture for growing businesses'
      ],
      buttonText: 'Get a Quote',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Monitor,
      title: 'Desktop App Development',
      description: 'Robust and efficient desktop applications for various business needs.',
      features: [
        'Custom desktop application development in C# or Java',
        'Integration with databases for data management',
        'Cross-platform development (Windows, Linux, MacOS)',
        'Intuitive user interface design',
        'Comprehensive testing and deployment',
        'Maintenance and version updates'
      ],
      buttonText: 'Get a Quote',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: MessageCircle,
      title: 'Consultation & Support',
      description: 'Expert advice and support to help you achieve your tech goals.',
      features: [
        'Technical consulting for software projects',
        'Code review and optimization',
        'Project planning and architecture design',
        'Ongoing support and troubleshooting',
        'Training sessions for teams or individuals',
        'Guidance on best practices and industry standards'
      ],
      buttonText: 'Schedule a Session',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            My Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-dark-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-primary/20 flex flex-col h-full"
              >
                {/* Header */}
                <div className="text-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-4 rounded-full bg-gradient-to-r ${service.color} mb-4`}
                  >
                    <Icon className="text-white" size={32} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-primary mb-3 uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="flex-grow mb-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="text-sm text-gray-300 flex items-start space-x-2"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 border-2 border-primary text-primary rounded-lg font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-primary hover:text-dark"
                >
                  {service.buttonText}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;