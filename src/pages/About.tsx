import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="relative top-[80px] min-h-screen bg-black text-white p-8"> {/* Reduced from 120px to 80px */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="space-y-16">
          <div className="pt-12"> {/* Reduced from pt-20 to pt-12 */}
            <h1 className="text-4xl font-bold mb-8">About Me</h1>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
              <p className="text-gray-300 mb-4">
                Innovative and detail-oriented Full Stack Developer with comprehensive experience in developing and implementing cutting-edge solutions. Specialized in UI/UX design, AI/ML integration, and software-hardware interface development. Proven track record of delivering robust, scalable applications while maintaining high standards of code quality and user experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Core Competencies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Technical Skills</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Full Stack Development</li>
                    <li>UI/UX Design</li>
                    <li>AI/ML Implementation</li>
                    <li>Hardware Integration</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Soft Skills</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Problem Solving</li>
                    <li>Team Leadership</li>
                    <li>Project Management</li>
                    <li>Communication</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Education & Certifications</h2>
              <div className="bg-white/5 p-4 rounded-lg">
                {/* Add your education details here */}
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;