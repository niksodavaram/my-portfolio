import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const careerSteps = [
    {
        id: 1,
        years: "2004 - 2006",
        title: "Software Engineer",
        company: "Company Name 1",
        description: "Led development of core applications and implemented new features using Java and Spring Framework.",
        skills: ["Java", "Spring", "SQL", "Agile"],
    },
    {
        id: 2,
        years: "2006 - 2010",
        title: "Senior Software Engineer",
        company: "Company Name 2",
        description: "Oversaw a team of developers and introduced CI/CD pipelines for faster deployments.",
        skills: ["Leadership", "CI/CD", "DevOps"],
    },
    // Add more steps here...
];

const Career = () => {
    return (
        <div className="relative top-[80px] min-h-screen bg-black text-white">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <div className="pt-12">
                    <h1 className="text-4xl font-bold mb-16 text-center">Career Journey</h1>

                    {/* Scrollable container */}
                    <div className="overflow-x-auto">
                        {/* Content container with fixed width to ensure scrolling */}
                        <div className="relative min-w-[1500px] h-[800px] px-8">
                            {/* Curved Road SVG */}
                            <svg
                                className="absolute w-full h-[600px]"
                                viewBox="0 0 1200 600"
                                preserveAspectRatio="none"
                            >
                                {/* Road */}
                                <path
                                    d="M0,300 C300,100 600,500 900,200 S1200,400 1200,300"
                                    fill="none"
                                    stroke="#1F2937"
                                    strokeWidth="40"
                                    className="drop-shadow-2xl"
                                />
                                {/* Dashed line */}
                                <path
                                    d="M0,300 C300,100 600,500 900,200 S1200,400 1200,300"
                                    fill="none"
                                    stroke="#EAB308"
                                    strokeWidth="2"
                                    strokeDasharray="10,10"
                                />
                            </svg>

                            {/* Career Steps */}
                            <div className="relative z-10">
                                {careerSteps.map((step, index) => {
                                    // Alternate between top and bottom positions
                                    const isTop = index % 2 === 0;
                                    const stepX = `${10 + index * 30}%`;
                                    // Adjusted Y positions to be further from the road
                                    const stepY = isTop ? "100px" : "500px";
                                    // Calculate the connection line height based on position
                                    const connectionHeight = isTop ? "200px" : "200px";

                                    return (
                                        <motion.div
                                            key={step.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.2 }}
                                            className="absolute w-48" // Reduced width from w-60 to w-48
                                            style={{
                                                left: stepX,
                                                top: stepY,
                                                transform: "translate(-50%, -50%)",
                                            }}
                                        >
                                            {/* Connection Line */}
                                            <div 
                                                className="absolute left-1/2 w-1 bg-yellow-500"
                                                style={{
                                                    height: connectionHeight,
                                                    top: isTop ? '100%' : 'auto',
                                                    bottom: isTop ? 'auto' : '100%',
                                                    transform: "translateX(-50%)"
                                                }}
                                            >
                                                <div className="w-3 h-3 bg-yellow-500 rounded-full absolute left-1/2 transform -translate-x-1/2"
                                                    style={{
                                                        [isTop ? 'bottom' : 'top']: '-6px'
                                                    }}
                                                />
                                            </div>

                                            {/* Content Card */}
                                            <motion.div
                                                className="bg-gray-900/90 rounded-lg p-4 border border-gray-800 shadow-xl backdrop-blur-sm" // Reduced padding
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <div className="flex items-center gap-2 mb-3"> {/* Reduced gap and margin */}
                                                    <div className="p-1.5 bg-yellow-500/20 rounded-lg"> {/* Reduced padding */}
                                                        <Briefcase className="w-4 h-4 text-yellow-500" /> {/* Reduced icon size */}
                                                    </div>
                                                    <span className="font-mono text-sm text-yellow-500">{step.years}</span>
                                                </div>

                                                <h2 className="text-lg font-bold mb-1">{step.title}</h2>
                                                <h3 className="text-sm text-gray-400 mb-2">{step.company}</h3>
                                                <p className="text-xs text-gray-300 mb-3">{step.description}</p>

                                                <div className="flex flex-wrap gap-1.5">
                                                    {step.skills.map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className="px-2 py-0.5 bg-yellow-500/10 rounded-full text-xs text-yellow-400"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 flex items-center gap-2 bg-gray-900/80 px-4 py-2 rounded-full backdrop-blur-sm">
                        <span className="text-sm">Scroll horizontally to see more</span>
                        <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="text-yellow-500"
                        >
                            →
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Career;