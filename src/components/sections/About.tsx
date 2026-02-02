import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-surface/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 flex justify-center"
        >
             {/* Using Group 50.svg from assets */}
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                 <img 
                    src="\assets\Group 50.svg" 
                    alt="About Me Illustration" 
                    className="w-full h-full object-contain drop-shadow-2xl"
                 />
            </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2"
        >
          <div className="flex items-center gap-2 mb-4">
             <span className="text-primary font-mono text-lg">01.</span>
             <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
             <span className="h-px bg-white/10 flex-grow ml-4"></span>
          </div>

          <div className="space-y-4 text-muted text-lg leading-relaxed">
            <p>
              Hello! I’m <span className="text-gray-100 font-medium">Vihanga Nimsara</span>, a passionate Computer Science student aiming to become a Full Stack or Backend Software Engineer.
            </p>
            <p>
              With a strong foundation in programming and web development, I specialize in building <span className="text-primary">scalable, efficient, and user-focused</span> software solutions. I love leveraging modern technologies to solve complex problems and create impactful applications.
            </p>
            <p>
              Constantly learning and evolving, I’m dedicated to delivering high-quality code and innovative solutions. Let’s connect and create something amazing!
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
