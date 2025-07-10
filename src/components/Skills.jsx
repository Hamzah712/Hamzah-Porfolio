import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Monitor } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: 'Full-Stack Development',
      percentage: 80,
      color: 'from-blue-500 to-purple-600',
      skills: [
        'Back-End: C#, .NET 8, ASP.NET Core, Web API',
        'Frameworks: React, Angular, Blazor',
        'ORM: Entity Framework Core',
        'Tools: Visual Studio, Git, Azure DevOps',
        'Architecture: Microservices, RESTful APIs'
      ]
    },
    {
      icon: Monitor,
      title: 'Desktop Application Development',
      percentage: 75,
      color: 'from-green-500 to-teal-600',
      skills: [
        'Languages: Java, C#',
        'Frameworks: JavaFX, Swing, WPF, WinForms',
        'Tools: Visual Studio, IntelliJ IDEA, Eclipse',
        'Patterns: MVVM, MVC',
        'Other: Unit Testing'
      ]
    },
    {
      icon: Code,
      title: 'Web Development',
      percentage: 75,
      color: 'from-orange-500 to-red-600',
      skills: [
        'Languages: HTML5, CSS3, JavaScript',
        'Frameworks: Bootstrap, Node.js',
        'Tools: Git, Visual Studio Code',
        'Other: Responsive Design'
      ]
    },
    {
      icon: Database,
      title: 'Database Management',
      percentage: 70,
      color: 'from-purple-500 to-pink-600',
      skills: [
        'RDBMS: SQL Server, MySQL, PostgreSQL',
        'NoSQL: MongoDB, Firebase',
        'Tools: SSMS, pgAdmin, MongoDB Compass',
        'Other: Database Design, Query Optimization, Data Modeling'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-light/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
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
                whileHover={{ scale: 1.02 }}
                className="bg-dark-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-primary/20"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  <span className="text-2xl font-bold text-primary">{category.percentage}%</span>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="w-full bg-dark-lighter rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.percentage}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                    >
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-white/20 rounded-full"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="text-sm text-gray-400 flex items-start space-x-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{skill}</span>
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