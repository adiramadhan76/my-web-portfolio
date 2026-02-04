import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const email = "adiramadhan.work@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch (err) {
      // FALLBACK UNTUK MOBILE / HTTP
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
    }

    setTimeout(() => setCopied(false), 5000);
  };

  const fromLeft = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0 },
  };

  const fromRight = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <>
      <section
        id="contact"
        className="
          px-6 md:px-16 lg:px-24 xl:px-32
          bg-black min-h-screen
          pt-28 md:pt-32
          pb-24 md:pb-32
          overflow-x-hidden
        "
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {/* TITLE */}
          <h1 className="text-white text-3xl md:text-4xl font-extrabold tracking-widest">
            CONTACT
          </h1>

          {/* CONTACT LIST */}
          <div className="flex flex-col gap-6">
            {/* EMAIL */}
            <motion.div
              variants={fromLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-neutral-900 rounded-xl p-6 flex items-center justify-between gap-4"
            >
              {/* LEFT */}
              <div className="flex items-center gap-4 text-white">
                {/* ICON EMAIL */}
                <svg
                  className="w-6 h-6 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l9 6 9-6M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
                  />
                </svg>

                <span className="font-medium">Email</span>
              </div>

              {/* RIGHT */}
              <button
                onClick={handleCopy}
                className={`
                inline-flex items-center gap-2
                px-6 py-2 rounded-md text-white font-medium cursor-pointer
                transition whitespace-nowrap
                ${copied ? "bg-green-600" : "bg-[#8d8d8d] hover:opacity-80"}
                `}
              >
                {copied ? "Copied" : "Copy"}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <rect x="8" y="8" width="12" height="12" rx="2" />
                  <rect x="4" y="4" width="12" height="12" rx="2" />
                </svg>
              </button>
            </motion.div>

            {/* GITHUB */}
            <motion.div
              variants={fromRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="bg-neutral-900 rounded-xl p-6 flex items-center justify-between text-white"
            >
              <div className="flex items-center gap-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 00-3.16 19.48c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18a2.65 2.65 0 00-1.11-1.46c-.9-.62.07-.61.07-.61a2.1 2.1 0 011.53 1.03 2.13 2.13 0 002.92.83 2.14 2.14 0 01.63-1.34c-2.22-.25-4.56-1.11-4.56-4.95a3.87 3.87 0 011.03-2.69 3.6 3.6 0 01.1-2.66s.84-.27 2.75 1.03a9.5 9.5 0 015 0c1.9-1.3 2.74-1.03 2.74-1.03a3.6 3.6 0 01.1 2.66 3.87 3.87 0 011.03 2.69c0 3.85-2.34 4.7-4.57 4.95a2.4 2.4 0 01.68 1.86v2.76c0 .27.18.59.69.48A10 10 0 0012 2z" />
                </svg>
                <span>GitHub</span>
              </div>

              <a
                href="https://github.com/adiramadhan76"
                target="_blank"
                className="px-7 py-2 bg-[#8d8d8d] rounded-md hover:opacity-80 transition"
              >
                Visit →
              </a>
            </motion.div>

            {/* LINKEDIN */}
            <motion.div
              variants={fromLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="bg-neutral-900 rounded-xl p-6 flex items-center justify-between text-white"
            >
              <div className="flex items-center gap-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 8.98h4v12H3v-12zM9 8.98h3.8v1.64h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14v6.27h-4v-5.56c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.65h-4v-12z" />
                </svg>
                <span>LinkedIn</span>
              </div>

              <a
                href="https://www.linkedin.com/in/adi-ramadhan/"
                className="px-7 py-2 bg-[#8d8d8d] rounded-md hover:opacity-80 transition"
              >
                Visit →
              </a>
            </motion.div>

            {/* INSTAGRAM */}
            <motion.div
              variants={fromRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="bg-neutral-900 rounded-xl p-6 flex items-center justify-between text-white"
            >
              <div className="flex items-center gap-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
                <span>Instagram</span>
              </div>

              <a
                href="https://www.instagram.com/ieu_adi"
                className="px-7 py-2 bg-[#8d8d8d] rounded-md hover:opacity-80 transition"
              >
                Visit →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-neutral-800 py-6 text-center">
        <p className="text-sm text-[#939393]">&copy; 2026 <span className="text-white font-medium">Adi Ramadhan.</span> Made with 🤍</p>
      </footer>
    </>
  );
}

export default Contact;


