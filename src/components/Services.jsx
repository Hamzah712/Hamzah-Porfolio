import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layers, Monitor, MessageCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites built with the latest technologies and best practices.',
      features: [
        'Custom website development',
        'Responsive design implementation',
        'SEO optimization',
        'Performance optimization',
        'Content management systems',
        'Ongoing maintenance & support'
      ],
      buttonText: 'Get Quote',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Layers,
      title: 'Full-Stack Development',
      description: 'End-to-end web applications with robust backend systems and intuitive frontends.',
      features: [
        'ASP.NET Core development',
        'React & modern JavaScript',
        'Database design & integration',
        'API development',
        'Authentication systems',
        'Cloud deployment'
      ],
      buttonText: 'Get Quote',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Monitor,
      title: 'Desktop Applications',
      description: 'Powerful desktop solutions for business needs with intuitive user interfaces.',
      features: [
        'C# & .NET development',
        'Cross-platform applications',
        'Database integration',
        'User-friendly interfaces',
        'Testing & deployment',
        'Version updates & support'
      ],
      buttonText: 'Get Quote',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MessageCircle,
      title: 'Consultation & Support',
      description: 'Expert guidance and ongoing support to help you achieve your technology goals.',
      features: [
        'Technical consulting',
        'Code review & optimization',
        'Architecture planning',
        'Team training sessions',
        'Best practices guidance',
        'Ongoing support'
      ],
      buttonText: 'Schedule Call',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Services I Offer
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full" />
          <p className="text-neutral-600 mt-6 max-w-2xl mx-auto">
            Comprehensive development services tailored to your specific needs, 
            from concept to deployment and beyond.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200 card-hover group"
              >
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`p-4 rounded-xl bg-gradient-to-r ${service.color} text-white`}
                  >
                    <Icon size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <div className="grid grid-cols-1 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                        <span className="text-neutral-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-2 bg-white border-2 border-neutral-300 text-neutral-700 py-3 rounded-xl font-semibold transition-all duration-200 hover:border-primary-500 hover:text-primary-600 group-hover:border-primary-500 group-hover:text-primary-600"
                >
                  <span>{service.buttonText}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
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