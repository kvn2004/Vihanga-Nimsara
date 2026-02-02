import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, SchoolIcon } from 'lucide-react';

const experiences = [
    {
        year: "2024 - Present",
        title: "Computer Science Student",
        company: "IJSE - Institute of Software Engineering",
        description: "Pursuing a degree in Computer Science, focusing on Software Engineering, Data Structures, and Algorithms.",
        icon: GraduationCap
    },
    {
        year: "2023 - 2024",
        title: "Freelance Developer",
        company: "Self-Employed",
        description: "Built custom web solutions for clients using HTML, CSS, and JavaScript. Developed a key interest in backend technologies.",
        icon: Briefcase
    },
    {
        year: "2010 - 2023",
        title: "School Student",
        company: "Ananda Sastralaya, Matugama",
        description: "Completed G.C.E. Ordinary Level and Advanced Level examinations.",
        icon: SchoolIcon
    }
];

const Experience: React.FC = () => {
    return (
        <Section id="experience">
           <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & <span className="text-primary">Education</span></h2>
                <p className="text-muted max-w-2xl mx-auto">
                    My academic journey and professional milestones.
                </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-8">
                {experiences.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <Card className="p-6 md:p-8 flex gap-4 md:gap-6 items-start relative overflow-visible">
                            {/* Timeline connector (visual only) */}
                            {index !== experiences.length - 1 && (
                                <div className="absolute left-8 top-16 bottom-[-2rem] w-0.5 bg-white/10 md:left-12 -z-10" />
                            )}
                            
                            <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full text-primary mt-1 border border-primary/20">
                                <item.icon size={24} />
                            </div>
                            <div>
                                <span className="text-sm text-primary font-mono mb-1 block">{item.year}</span>
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-gray-300 font-medium mb-2">{item.company}</p>
                                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
