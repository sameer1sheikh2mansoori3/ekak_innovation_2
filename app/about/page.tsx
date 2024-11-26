'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'
import { Button } from "@/components/ui/button"
import { Brain, Cpu, Network, Rocket, Zap, Globe } from 'lucide-react'
import Image from 'next/image'
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { FadeInText } from "@/components/ui/fade-in-text"


const AnimatedNumber = ({ n }: { n: number }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  })
  return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>
}

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div
    className="bg-gray-900 p-6 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="w-12 h-12 text-purple-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
)

export default function Page() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  return (
    <section className="relative bg-black text-white overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://media.istockphoto.com/id/2153255114/photo/humanlike-robot-cyborg.webp?a=1&b=1&s=612x612&w=0&k=20&c=g3ZiModTxkOsl6_y4qDgYck8q8O8Akynp6CwE66hEj4="
          alt="AI Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </motion.div>
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />
      <div className="container mx-auto px-4 py-24 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Pioneering the Future of AI
          </h2>
          <FadeInText text="At NeuraSphere, we're not just developing AI - we're shaping the future of human-machine collaboration." />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Our Mission</h3>
          <FadeInText text="NeuraSphere is committed to advancing the field of artificial intelligence through groundbreaking research and innovative applications. We strive to create AI systems that enhance human capabilities, solve complex global challenges, and push the boundaries of what's possible in technology and science." />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={Brain}
            title="Cognitive Computing"
            description="Our AI systems mimic human thought processes, learning and adapting in real-time to complex scenarios and data inputs."
          />
          <FeatureCard
            icon={Cpu}
            title="Quantum AI"
            description="Harnessing the power of quantum computing to solve complex problems at unprecedented speeds, revolutionizing fields like cryptography and drug discovery."
          />
          <FeatureCard
            icon={Network}
            title="Neural Networks"
            description="Developing advanced neural architectures that push the boundaries of machine learning, enabling more accurate predictions and decision-making."
          />
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-500 mb-2">
              <AnimatedNumber n={100} />+
            </div>
            <div className="text-gray-400">AI Patents</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-500 mb-2">
              <AnimatedNumber n={50} />M+
            </div>
            <div className="text-gray-400">Data Points Processed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-500 mb-2">
              <AnimatedNumber n={200} />+
            </div>
            <div className="text-gray-400">Global Partners</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Our Journey</h3>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                NeuraSphere Timeline
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Explore our journey from inception to becoming a leader in AI innovation.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-
4">
                <Image
                  src="https://media.istockphoto.com/id/1998660059/photo/ai-artificial-intelligence-security-sentinel-password-cyber-security-ransomware-email.webp?a=1&b=1&s=612x612&w=0&k=20&c=b38xp_lw0-upEvjodUgwq9NNC8Lw4uDAS-SATyfr1hI="
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="NeuraSphere Timeline"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Our Innovations</h3>
          <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <FadeInText text="Join us on our mission to create AI systems that augment human capabilities, solve global challenges, and push the boundaries of what's possible." />
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 mt-8"
          >
            Join Our Journey
          </Button>
        </motion.div>
      </div>

      <motion.div
        style={{ y }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-30"
      />
    </section>
  )
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "AI-Powered Healthcare",
    description: "Revolutionizing diagnostics and treatment plans with advanced machine learning algorithms.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <Brain className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Quantum Cryptography",
    description: "Developing unbreakable encryption methods using quantum entanglement principles.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <Zap className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Neuro-Symbolic AI",
    description: "Combining neural networks with symbolic reasoning for more interpretable AI decisions.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <Cpu className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Autonomous Systems",
    description: "Creating self-learning robots and drones for complex environments and tasks.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <Rocket className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Global AI Ethics Framework",
    description: "Leading the development of international standards for responsible AI deployment.",
    header: <Skeleton />,
    className: "md:col-span-3",
    icon: <Globe className="h-4 w-4 text-neutral-500" />,
  },
];

