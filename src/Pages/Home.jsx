import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone,
  Instagram
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
// import Img from "Image.jpg";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "With great power comes great electricity bill";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      title: "Food Delivery App",
      description: "A web application for food delivery services",
      color: "from-orange-500 to-red-500",
      icon: <Code className="w-6 h-6" />,
      link: "https://foodorder-seven.vercel.app/",
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce application",
      color: "from-blue-500 to-purple-500",
      icon: <Database className="w-6 h-6" />,
      link: "https://e-commerce-eta-dusky-91.vercel.app/",
    },
    {
      title: "Weather App",
      description: "A web application to check weather updates",
      color: "from-purple-500 to-pink-500",
      icon: <Globe className="w-6 h-6" />,
      link: "https://weather-app-zeta-tan-49.vercel.app/",
    },
  ];

  const skills = {
    languages: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C++",
      "HTML/CSS",
    ],
    frameworks: ["React", "Next.js", "Node.js", "Express", "Django", "Flask"],
    tools: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Figma"],
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen sm:flex items-center sm:justify-between px-6 max-w-6xl mx-auto grid place-content-center"
      >
        <motion.div 
          className="flex-1 space-y-6"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.div className="space-y-2" variants={item}>
            <h1 className="text-4xl md:text-6xl font-bold">
              Sohaib is a <span className="text-green-400">web designer</span>{" "}
              and
              <br />
              <span className="text-green-400">front-end developer</span>
            </h1>
          </motion.div>

          <motion.p className="text-gray-400 text-lg max-w-lg" variants={item}>
            He crafts responsive websites where technologies meet creativity
          </motion.p>

          <motion.button 
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact me!!
          </motion.button>

          {/* Quote Box */}
          <motion.div 
            className="mt-12 p-4 border border-gray-700 rounded-lg max-w-md"
            variants={item}
            whileHover={{ y: -5 }}
          >
            <div className="text-gray-300 font-mono">
              "{typedText}"<span className="animate-pulse">|</span>
            </div>
            <div className="text-gray-500 text-sm mt-2">- Dr. Me</div>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          className="flex-1 flex justify-center"
          initial="hidden"
          animate="show"
          variants={slideInFromRight}
        >
          <div className="relative">
            <motion.div 
              className="w-80 h-80 rounded-full opacity-20 blur-3xl bg-green-400"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <div className="absolute inset-0 sm:flex items-center justify-center grid place-items-center">
              <motion.div 
                className="w-64 h-64 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={"Image.jpg"}
                  alt=""
                  className="w-full h-full object-cover rounded-lg bg-gray-700 shadow-lg shadow-green-600 transition-shadow duration-300"
                />
              </motion.div>
            </div>
            <motion.div 
              className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div 
          className="flex justify-between items-center mb-12"
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true }}
        >
          <motion.h2 className="text-3xl font-bold" variants={item}>
            <span className="text-green-400">#</span>My Projects
          </motion.h2>
          <motion.a 
            href="#" 
            className="text-green-400 hover:underline"
            variants={item}
            whileHover={{ x: 5 }}
          >
            View all ~~&gt;
          </motion.a>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="group cursor-pointer"
              variants={item}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className={`h-48 bg-gradient-to-br ${project.color} rounded-t-lg opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}
                whileHover={{ scale: 1.02 }}
              >
                <iframe src={project.link} frameborder="0" className="w-full h-full" scrolling="no"></iframe>
              </motion.div>
              <div className="bg-gray-800 border border-gray-700 rounded-b-lg p-4">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-2">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 border border-green-400 text-green-400 rounded text-sm hover:bg-green-400 hover:text-gray-900 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live &lt;~&gt;
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12"
          initial="hidden"
          whileInView="show"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <span className="text-green-400">#</span>My-Skills
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true }}
        >
          <motion.div className="space-y-8" variants={slideInFromLeft}>
            <div className="flex flex-wrap">
              <div className="grid grid-cols-5 gap-6 w-fit">
                {[...Array(25)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-3 h-3 border border-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.02 }}
                    viewport={{ once: true }}
                  ></motion.div>
                ))}
              </div>
              <motion.div 
                className="box border w-40 h-40 ms-auto border-green-400"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
            </div>
            <div className="text-gray-300">
              <p className="text-lg font-semibold mb-2">My Skills</p>
              <p className="text-sm">
                I have a diverse skill set that includes web development,
                design, and project management. I am proficient in various
                programming languages and frameworks, and I continuously strive
                to learn new technologies.
              </p>
            </div>
            <div className="flex flex-wrap">
              <motion.div 
                className="box border w-40 h-40 border-green-400"
                animate={{
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <div className="grid grid-cols-5 gap-6 w-fit ms-auto">
                {[...Array(25)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-3 h-3 border border-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.02 }}
                    viewport={{ once: true }}
                  ></motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className="space-y-4" variants={slideInFromRight}>
            <motion.div 
              className="border border-gray-700 rounded-lg"
              whileHover={{ y: -5 }}
            >
              <div className="bg-gray-800 px-4 py-2 font-semibold text-white border-b border-gray-700">
                Languages
              </div>
              <div className="p-4">
                <div className="text-gray-300 space-y-1">
                  <div>JavaScript TypeScript </div>
                  <div>Java C++ Kotlin Python</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="border border-gray-700 rounded-lg"
              whileHover={{ y: -5 }}
            >
              <div className="bg-gray-800 px-4 py-2 font-semibold text-white border-b border-gray-700">
                Frameworks
              </div>
              <div className="p-4">
                <div className="text-gray-300 space-y-1">
                  <div>React Vue Next.js</div>
                  <div>Node.js Express</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="border border-gray-700 rounded-lg"
              whileHover={{ y: -5 }}
            >
              <div className="bg-gray-800 px-4 py-2 font-semibold text-white border-b border-gray-700">
                Tools
              </div>
              <div className="p-4">
                <div className="text-gray-300 space-y-1">
                  <div>VSCode Figma Git</div>
                  <div>MySql MongoDB</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12"
          initial="hidden"
          whileInView="show"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <span className="text-green-400">#</span>About-Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="show"
            variants={slideInFromLeft}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 leading-relaxed">Hello, I'm Sohaib!</p>
            <p className="text-gray-300 leading-relaxed">
              I'm a self-taught front-end developer based in Islamabad, Pakistan. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Transforming my creativity and knowledge into websites has been my
              passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            <motion.button 
              className="mt-6 px-6 py-3 border border-green-400 text-green-400 rounded-lg hover:bg-green-400 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read more -&gt;
            </motion.button>
          </motion.div>

          <motion.div 
            className="flex justify-center"
            initial="hidden"
            whileInView="show"
            variants={slideInFromRight}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div 
                className="w-80 h-80 flex items-center justify-center"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={"Image.jpg"}
                  alt="Project Preview"
                  className="w-full h-full object-cover rounded-lg bg-gray-700 shadow-lg shadow-green-600 transition-shadow duration-300"
                />
              </motion.div>
              <motion.div 
                className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <div className="grid grid-cols-4 gap-2 absolute -bottom-8 -left-8">
                {[...Array(16)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-2 h-2 border border-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                  ></motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12"
          initial="hidden"
          whileInView="show"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <span className="text-green-400">#</span>Contact Me
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: true }}
        >
          <motion.div variants={item}>
            <p className="text-gray-300 mb-6">
              I'm interested in freelance opportunities. However, if you have
              other request or question, don't hesitate to contact me
            </p>
          </motion.div>

          <motion.div 
            className="border border-gray-700 rounded-lg p-6"
            variants={item}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-bold mb-4">Message me here</h3>
            <div className="space-y-3">
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <Github className="w-5 h-5 text-gray-400" />
                <a href="https://github.com/SohaibRaza66" target="_blank" className="text-gray-300">@SohaibRaza66</a>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-gray-400" />
                <a href="mailto:sohaibraza236@gmail.com" className="text-gray-300">sohaibraza236@gmail.com</a>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <Linkedin className="w-5 h-5 text-gray-400" />
                <a href="https://www.linkedin.com/in/sohaib-raza-87a229239" target="_blank" className="text-gray-300">@Sohaib Raza</a>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <Instagram className="w-5 h-5 text-gray-400" />
                <a href="https://www.instagram.com/s.raza2212?igsh=MXUzNzN2ZXQ3bnR0OA==" target="_blank" className="text-gray-300">@S.Raza2212</a>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <FaWhatsapp className="w-5 h-5 text-gray-400" />
                <a href="https://api.whatsapp.com/send?phone=923185194533" target="_blank" className="text-gray-300">+92 318 5194533</a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;