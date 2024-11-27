'use client'
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ThreeDCardDemo } from './../../components/ThreeDCardDemo';

export default function AboutPage () {
  return (
   
      <div className="relative  h-auto bg-black text-white">
      {/* Background Animation */}
   <div className="my-20">
   <div className="absolute inset-0">
        <canvas id="electricity-bg" className="absolute inset-0"></canvas>
      </div>

      {/* Page Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        {/* Section 1: Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl mb-50 md:text-6xl font-bold "
          >
            Welcome to <span className="text-blue-500">EKAK

            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl text-gray-300"
          >
            <Typewriter
              options={{
                strings: [
                  "Empowering industries with AI.",
                  "Shaping the future with innovation.",
                  "Driving solutions with intelligent automation.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>
        </section>

        {/* Section 2: Our Mission */}
        <section className="py-20 max-w-6xl text-center">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-semibold mb-6"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            At <span className="text-blue-500">EKAK</span>, we strive to
            bridge the gap between technology and businesses by creating
            state-of-the-art AI solutions. Our mission is to simplify decision
            making, automate processes, and enable smarter solutions for a
            better tomorrow.
          </motion.p>
        </section>

        {/* Section 3: Our Services */}
        <section className="py-20 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-semibold mb-6 text-center"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Automation",
                description:
                  "Streamline workflows with our intelligent automation tools.",
              },
              {
                title: "Predictive Analytics",
                description:
                  "Leverage data to predict outcomes and optimize decisions.",
              },
              {
                title: "Conversational AI",
                description:
                  "Create interactive customer experiences with AI chatbot.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-gray-800 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold text-blue-500 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 4: About the Team */}
        <section className="py-20 max-w-6xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-semibold mb-6"
          >
            Meet the Visionaries
          </motion.h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our team consists of AI enthusiasts, data scientists, and engineers
            dedicated to driving innovation and creating impactful solutions.
            With expertise and passion, we aim to redefine industries through
            the power of AI.
          </p>
        </section>

{/* Section 4: About the Team */}
<section className="py-20 max-w-6xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-semibold mb-6"
          >
            Some memorable events
          </motion.h2>
          <div className="flex flex-col">
          
          <div className="flex flex-row justify-center space-x-2">
            <ThreeDCardDemo title="Oct 2021   3d Printing" description="Ekak began its journey as a specialized 3D printing service, focusing on delivering high-quality prototypes and solutions." urlSection="https://i.all3dp.com/wp-content/uploads/2023/05/01123825/MalkMotta-resin-purple.jpg"/>
            <ThreeDCardDemo title="May 2019  chakki project"  description="This project aimed at improving their product
line. The system incorporates modern
technology, ensuring efficient processing.

"  urlSection="https://wallpapers.com/images/hd/village-girl-pictures-1rfyhw0s42twl4aj.jpg"/>
           
          </div>
          <div className="flex flex-row justify-center space-x-2">
            <ThreeDCardDemo title="Sept 2018 spi lamp" description="Sagar Energy Solution partners with SABI to offer solar-powered lighting, boosting access to sustainable energy solutions." linkUrl="https://home.ekak.in/gaia" urlSection="https://plus.unsplash.com/premium_photo-1675802755792-a7cfd346b5be?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9hdHxlbnwwfHwwfHx8MA%3D%3D"/>
            <ThreeDCardDemo title="April 2021 Dev prototyping" description="Dedicated to developing innovative solutions for enhancing road safety through cutting-edge technology" urlSection="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?cs=srgb&dl=pexels-mikebirdy-120049.jpg&fm=jpg" linkUrl="https://home.ekak.in/gaia"/>
           
          </div>
          </div>
         
        </section>
        {/* Section 5: Contact Us */}
        <section className="py-20 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-semibold mb-6"
          >
            Get in Touch
          </motion.h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Have questions or want to collaborate? Contact us today and let&apos;s
            build the future together.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg"
          >
            Contact Us
          </motion.button>
        </section>
      </div>
   </div>
    </div>
   
  );
};

