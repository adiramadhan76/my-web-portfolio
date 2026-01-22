import React, { useEffect, useState } from "react";
import ImgFoto from "./assets/img-foto.png";

function Home() {
  const text = "ADI RAMADHAN";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);

  // Typing animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      } else {
        setTimeout(() => {
          setDisplayText("");
          setIndex(0);
        }, 1500);
      }
    }, 150);

    return () => clearTimeout(timeout);
  }, [index]);

  // Fade-in image
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="px-6 md:px-16 lg:px-24 xl:px-32 bg-black h-full flex items-start justify-center pt-24 md:pt-28"
    >
      <div className="flex flex-col items-center gap-6 text-center">

        {/* Image */}
        <img
          src={ImgFoto}
          alt="Adi Ramadhan"
          className={`
            object-contain
            w-52 sm:w-56 md:w-64 lg:w-64 xl:w-72
            transition-opacity duration-700 ease-out
            ${showImage ? "opacity-100" : "opacity-0"}
          `}
        />
        <h1
          className="
            text-white
            text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl
            tracking-widest
            font-[Allerta_Stencil]
            min-h-14 sm:min-h-18 md:min-h-22
          "
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>

      </div>
    </section>
  );
}

export default Home;
