import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Monitor, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: 'Full-Stack Development',
      percentage: 85,
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      skills: [
        'ASP.NET Core & Web API',
        'React & Modern JavaScript',
        'Entity Framework Core',
        'RESTful API Design',
        'Microservices Architecture'
      ]
    },
    {
      icon: Monitor,
      title: 'Desktop Applications',
      percentage: 80,
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      skills: [
        'C# & .NET Framework',
        'WPF & WinForms',
        'Java & JavaFX',
        'MVVM Pattern',
        'Cross-platform Development'
      ]
    },
    {
      icon: Code,
      title: 'Web Technologies',
      percentage: 75,
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      skills: [
        'HTML5 & CSS3',
        'JavaScript ES6+',
        'Bootstrap & Tailwind',
        'Responsive Design',
        'Modern Build Tools'
      ]
    },
    {
      icon: Database,
      title: 'Database Management',
      percentage: 75,
      color: 'bg-gradient-to-r from-orange-500 to-orange-600',
      skills: [
        'SQL Server & MySQL',
        'PostgreSQL & MongoDB',
        'Database Design',
        'Query Optimization',
        'Data Modeling'
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-neutral-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Technical Expertise
          </h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full" />
          <p className="text-neutral-600 mt-6 max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks, with a focus on creating 
            scalable, maintainable solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-200 card-hover"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-neutral-100 rounded-xl">
                      <Icon className="text-neutral-700" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">{category.title}</h3>
                  </div>
                  <span className="text-2xl font-bold text-primary-600">{category.percentage}%</span>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="w-full bg-neutral-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.percentage}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className={`h-full ${category.color} rounded-full relative`}
                    />
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                      <span className="text-neutral-600 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;