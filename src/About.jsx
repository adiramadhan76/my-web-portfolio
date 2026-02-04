import React from "react";
import { motion } from "framer-motion";
import IconHtml from "./assets/my-skills/HTML.png";
import IconCss from "./assets/my-skills/CSS.png";
import IconJs from "./assets/my-skills/JavaScript.png";
import IconPhp from "./assets/my-skills/PHP.png";
import IconPython from "./assets/my-skills/Python.png";
import IconCI from "./assets/my-skills/CodeIgniter.png";
import IconLaravel from "./assets/my-skills/Laravel.png";
import IconReactJS from "./assets/my-skills/ReactJS.png";
import IconDjango from "./assets/my-skills/Django.png";
import IconBootstrap from "./assets/my-skills/Bootstrap.png";
import IconTailwindCSS from "./assets/my-skills/TailwindCSS.png";
import IconMySQL from "./assets/my-skills/MySQL.png";
import IconSQLite from "./assets/my-skills/SQLite.png";

const skills = [
  { icon: IconHtml, name: "HTML" },
  { icon: IconCss, name: "CSS" },
  { icon: IconJs, name: "JavaScript" },
  { icon: IconPhp, name: "PHP" },
  { icon: IconPython, name: "Python" },
  { icon: IconCI, name: "CodeIgniter" },
  { icon: IconLaravel, name: "Laravel" },
  { icon: IconDjango, name: "Django" },
  { icon: IconReactJS, name: "ReactJS" },
  { icon: IconBootstrap, name: "Bootstrap" },
  { icon: IconTailwindCSS, name: "TailwindCSS" },
  { icon: IconMySQL, name: "MySQL" },
  { icon: IconSQLite, name: "SQLite" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="
        px-6 md:px-16 lg:px-24 xl:px-32
        bg-black min-h-screen
        pt-28 md:pt-32
      "
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-14">

        {/* ABOUT TITLE */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl md:text-4xl font-extrabold tracking-widest"
        >
          ABOUT
        </motion.h1>

        {/* JOURNEY & SKILLS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* MY JOURNEY */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-white text-2xl font-bold">My Journey</h2>
            <p className="text-[#939393] leading-relaxed">
              I started my journey in technology at a vocational high school,
              where I was first introduced to software development.
            </p>
            <p className="text-[#939393] leading-relaxed">
              That early experience sparked my curiosity and led me to continue
              my studies in Informatics Engineering.
            </p>
            <p className="text-[#939393] leading-relaxed">
              I enjoy building meaningful digital experiences through the web.
            </p>
          </motion.div>

          {/* MY SKILLS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-white text-2xl font-bold">My Skills</h2>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={fadeUp}
                  className="
                    group relative
                    w-14 h-14 sm:w-14 sm:h-16 md:w-16 md:h-16
                    flex items-center justify-center
                    rounded-xl bg-neutral-900
                    cursor-pointer
                    hover:scale-110
                    transition-transform duration-300
                  "
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="max-w-full max-h-full object-contain"
                  />

                  {/* Tooltip */}
                  <span
                    className="
                      absolute -top-9 z-20
                      px-2 py-1 text-xs font-medium
                      bg-white text-black rounded-md shadow-md
                      opacity-0 scale-95
                      transition-all duration-200
                      group-hover:opacity-100 group-hover:scale-100
                      pointer-events-none whitespace-nowrap
                    "
                  >
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* QUOTE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-white text-xl md:text-2xl italic font-[Playfair_Display]">
            “You don’t have to know everything, you just need to know how to
            learn and find solutions.”
          </h3>
        </motion.div>

      </div>
    </section>
  );
}

