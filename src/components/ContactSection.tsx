import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Github, Mail, Globe } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50" ref={ref}>
      <div className="container mx-auto px-4 flex justify-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative max-w-sm w-full rounded-3xl p-[2px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 animate-gradient-x"
        >
          {/* Card Inner */}
          <div className="relative bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-blue-200/60 transition-all duration-300 hover:-translate-y-1">

            {/* Internship Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white shadow-md">
              Currently Seeking Internship
            </div>

            {/* Profile Image */}
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-100 shadow-md mb-6">
              <img
                src="/jb.jpg"
                alt="Jagan Bhasker"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              Jagan Bhasker
            </h3>

            {/* Role */}
            <p className="text-sm text-gray-600 mb-6">
              Cybersecurity Student · ZeroTrustX
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4">
              <a
                href="mailto:jaganbhaskergurram@gmail.com"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition shadow-sm"
              >
                <Mail size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/gurram-jagan-bhasker-a0906b29a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition shadow-sm"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://github.com/Jaganbhasker1122"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition shadow-sm"
              >
                <Github size={18} />
              </a>

              <a
                href="https://jaganbhasker-portfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition shadow-sm"
              >
                <Globe size={18} />
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;