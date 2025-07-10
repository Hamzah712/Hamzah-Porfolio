import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Mail, Code, ExternalLink } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: Calendar, label: 'Born', value: 'August 16, 2001' },
    { icon: MapPin, label: 'Location', value: 'Islamabad, Pakistan' },
    { icon: Mail, label: 'Email', value: 'hamzah.712680678@gmail.com' },
    { icon: Code, label: 'Focus', value: 'C#, Java, Full-Stack Development' },
  ];

  const achievements = [
    { number: '11+', label: 'Projects Done' },
    { number: '40+', label: 'Courses Covered' },
    { number: '10+', label: 'Certificates' },
    { number: '60 Kg', label: 'Bench Press' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Personal Information</h3>
            
            <div className="space-y-4 mb-8">
              {personalInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-dark-light rounded-lg hover:bg-dark-lighter transition-colors duration-300"
                  >
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">{info.label}:</span>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 text-primary hover:text-yellow-400 transition-colors duration-300"
            >
              <ExternalLink size={16} />
              <a
                href="https://hamzah712.github.io/temp1_dark-theme/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium"
              >
                View Portfolio Website
              </a>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">My Story</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm Hamzah, a driven and detail-oriented software engineering student with a strong passion for full-stack development. My expertise lies in building robust and scalable backend systems using C# and ASP.NET Core, while also enjoying the creative process of designing intuitive and responsive user interfaces with modern front-end technologies like HTML5, CSS3, and JavaScript.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I stay updated with the latest industry trends, ensuring my skills remain relevant and cutting-edge. Beyond coding, I'm committed to continuous improvement, actively honing both my technical abilities and soft skills. Whether tackling complex projects or exploring emerging technologies, I approach each challenge with a growth mindset and a relentless drive to innovate.
            </p>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center text-primary mb-12">Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-dark-light rounded-lg hover:bg-dark-lighter transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <motion.h4
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-primary mb-2"
                >
                  {achievement.number}
                </motion.h4>
                <p className="text-gray-400 font-medium">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;