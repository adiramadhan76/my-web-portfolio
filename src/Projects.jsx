import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ImgProject1 from "./assets/project-kuliah.png";
import ImgProject2 from "./assets/project-smk.png";

// Tech icons
import IconDjango from "./assets/my-skills/Django.png";
import IconPython from "./assets/my-skills/Python.png";
import IconSQLite from "./assets/my-skills/SQLite.png";
import IconCI from "./assets/my-skills/CodeIgniter.png";
import IconPhp from "./assets/my-skills/PHP.png";
import IconMySQL from "./assets/my-skills/MySQL.png";

const projects = [
  {
    image: ImgProject1,
    title: "YouFin",
    description:
      "Aplikasi web yang membantu mahasiswa dan generasi muda mengelola keuangan pribadi secara mudah melalui fitur pencatatan pengeluaran, perencanaan anggaran, dan tips keuangan untuk membangun kebiasaan finansial yang bijak.",
    technologies: [
      { icon: IconDjango, name: "Django" },
      { icon: IconPython, name: "Python" },
      { icon: IconSQLite, name: "SQLite" },
    ],
    github: "https://github.com/adiramadhan76/project-youfin-with-django",
  },
  {
    image: ImgProject2,
    title: "E-PKL11",
    description:
      "Website untuk memudahkan siswa mengelola jurnal dan laporan PRAKERIN secara online, serta membantu sekolah memantau dan memetakan siswa yang melaksanakan PRAKERIN.",
    technologies: [
      { icon: IconCI, name: "CodeIgniter" },
      { icon: IconPhp, name: "PHP" },
      { icon: IconMySQL, name: "MySQL" },
    ],
    github: "https://github.com/adiramadhan76/ePKL11",
  },
];

// SLIDE ANIMATION
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
  }),
};

// SECTION ENTER ANIMATION
const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

function Projects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) =>
        prev === projects.length - 1 ? 0 : prev + 1
      );
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="projects"
      className="
        px-6 md:px-16 lg:px-24 xl:px-32
        bg-black min-h-screen
        pt-28 md:pt-32
      "
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-widest">
            PROJECTS
          </h1>

          {/* SLIDER BUTTON */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              &lt;
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* SLIDE */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full bg-neutral-900 rounded-xl p-6 md:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* IMAGE */}
                <img
                  src={projects[index].image}
                  alt={projects[index].title}
                  className="w-full rounded-lg object-cover"
                />

                {/* CONTENT */}
                <div className="flex flex-col gap-5 text-white">
                  <h2 className="text-2xl font-bold">
                    {projects[index].title}
                  </h2>

                  <p className="text-[#939393] leading-relaxed">
                    {projects[index].description}
                  </p>

                  {/* TECHNOLOGY */}
                  <div className="flex flex-col gap-3">
                    <span className="font-semibold">Technology Used</span>

                    <div className="flex gap-5">
                      {projects[index].technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="relative group cursor-pointer"
                        >
                          <div className="
                            absolute -top-9 left-1/2 -translate-x-1/2
                            bg-white text-black text-xs px-2 py-1 rounded
                            opacity-0 group-hover:opacity-100
                            transition pointer-events-none whitespace-nowrap
                          ">
                            {tech.name}
                          </div>

                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="
                              w-9 h-9 object-contain
                              transition-transform duration-300
                              group-hover:scale-125 active:scale-110
                            "
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BUTTON */}
                  <a
                    href={projects[index].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2
                      w-fit px-5 py-2 mt-2
                      bg-[#8d8d8d] text-white
                      rounded-md font-medium
                      hover:opacity-80 transition
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5M10.172 13.828a4 4 0 010-5.656l3-3a4 4 0 115.656 5.656l-1.5 1.5"
                      />
                    </svg>
                    Visit GitHub Repository
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
