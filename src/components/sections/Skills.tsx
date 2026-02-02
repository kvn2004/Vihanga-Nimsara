import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';

const skillsData = [
    {
        category: "Languages",
        items: ["TypeScript", "JavaScript", "Python", "Java","Dart"]
    },
    {
        category: "Frameworks & Libs",
        items: ["React", "Vue", "Express.js", "Flask", "Flutter","Node.js","Spring Boot","JavaFX","Tailwind CSS","Bootstrap","React Native"]
    },
    {
        category: "Databases",
        items: ["MongoDB", "MySQL","SQL"]
    },
    {
        category: "Tools & DevOps",
        items: ["Git", "Linux", "Docker", "Figma", "VS Code" ,]
    }
];

const Skills: React.FC = () => {
    return (
        <Section id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-primary">Skills</span></h2>
                <p className="text-muted max-w-2xl mx-auto">
                    A collection of technologies and tools I've worked with to build performant applications.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillsData.map((skillGroup, index) => (
                    <motion.div
                        key={skillGroup.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="h-full p-6 hover:border-primary/50 group">
                            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item) => (
                                    <span 
                                        key={item} 
                                        className="px-3 py-1 bg-white/5 rounded-md text-sm text-muted group-hover:bg-primary/10 group-hover:text-gray-200 transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
