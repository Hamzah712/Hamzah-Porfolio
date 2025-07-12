import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Mail, Code, ExternalLink, Award, Target, Heart } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: Calendar, label: 'Born', value: 'August 16, 2001' },
    { icon: MapPin, label: 'Location', value: 'Islamabad, Pakistan' },
    { icon: Mail, label: 'Email', value: 'hamzah.712680678@gmail.com' },
    { icon: Code, label: 'Focus', value: 'C#, Java, Full-Stack Development' },
  ];

  const achievements = [
    { number: '11+', label: 'Projects Completed', icon: Target },
    { number: '40+', label: 'Courses Covered', icon: Award },
    { number: '10+', label: 'Certificates Earned', icon: Award },
    { number: '60 Kg', label: 'Bench Press PR', icon: Heart },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">My Journey</h3>
            
            <div className="prose prose-lg text-neutral-600">
              <p className="leading-relaxed mb-6">
                I'm Hamzah, a passionate software engineering student with a deep love for creating 
                elegant digital solutions. My journey in technology began with curiosity and has 
                evolved into expertise in full-stack development.
              </p>
              
              <p className="leading-relaxed mb-6">
                I specialize in building robust backend systems using <strong>C#</strong> and 
                <strong> ASP.NET Core</strong>, while crafting intuitive user experiences with 
                modern frontend technologies. My approach combines technical excellence with 
                creative problem-solving.
              </p>
              
              <p className="leading-relaxed">
                Beyond coding, I'm committed to continuous learning and staying current with 
                industry trends. I believe in writing clean, maintainable code and building 
                applications that make a real difference.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-200 font-medium"
            >
              <ExternalLink size={16} />
              <a
                href="https://hamzah712.github.io/temp1_dark-theme/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Previous Portfolio
              </a>
            </motion.div>
          </motion.div>

          {/* Personal Information & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Personal Info */}
            <div className="bg-neutral-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-neutral-900 mb-6">Personal Information</h4>
              <div className="space-y-4">
                {personalInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4"
                    >
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Icon className="text-primary-600" size={18} />
                      </div>
                      <div>
                        <span className="text-neutral-500 text-sm font-medium">{info.label}</span>
                        <p className="text-neutral-900 font-medium">{info.value}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200 text-center card-hover"
                  >
                    <Icon className="text-primary-500 mx-auto mb-3" size={24} />
                    <h4 className="text-2xl font-bold text-neutral-900 mb-1">
                      {achievement.number}
                    </h4>
                    <p className="text-neutral-600 text-sm font-medium">{achievement.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;