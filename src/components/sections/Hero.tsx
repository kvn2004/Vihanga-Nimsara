import React from "react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { TypingEffect } from "../ui/TypingEffect";

const Hero: React.FC = () => {
  // Generate floating particles for background animation
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <Section
      id="home"
      className="flex items-center min-h-[90vh] py-0 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-white/20 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Available for work
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Vihanga Nimsara</span>
          </h1>

          <div className="text-xl text-muted mb-8 max-w-lg leading-relaxed h-[60px]">
            <TypingEffect
              text="Computer Science Undergraduate & Full Stack Developer."
              speed={100}
              delay={100}
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              Download CV <Download className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="mt-12 flex gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">5+</span>
              <span className="text-sm text-muted">Projects Completed</span>
            </div>
            {/* <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">1+</span>
              <span className="text-sm text-muted">Years Experience</span>
            </div> */}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Abstract Shapes behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl -z-10 transform scale-110" />

          <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] backdrop-blur-sm">
            <img
              src="public\assets\Group 46.png"
              alt="Vihanga Nimsara"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://ui-avatars.com/api/?name=Vihanga+Nimsara&background=0D8ABC&color=fff&size=512";
              }}
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
