import Resume from "../../assets/pdf/Resume.pdf";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-24 bg-gray-900 text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
            Get in touch
          </p>

          <h2 className="text-6xl md:text-8xl font-bold tracking-tight">
            Let's
            <br />
            connect<span className="text-gray-500">.</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-xl">
            Have a project, opportunity, or just want to say hello?
            I'd love to hear from you.
          </p>
        </div>

        {/* Resume */}
        <div className="mb-10">
          <a
            href={Resume}
            download
            className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-white text-gray-900 font-medium hover:bg-gray-200 transition-all duration-300"
          >
            Download Resume
            <span>↓</span>
          </a>
        </div>

        {/* Contact Links */}
        <div className="border-t border-gray-700">

          <a
            href="mailto:aditipotdar22@email.com"
            className="group flex items-center justify-between py-6 border-b border-gray-700 hover:px-4 transition-all duration-300"
          >
            <div>
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <p className="text-xl md:text-2xl">
                aditipotdar22@email.com
              </p>
            </div>

            <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">
              ↗
            </span>
          </a>

          <a
            href="tel:+919326245166"
            className="group flex items-center justify-between py-6 border-b border-gray-700 hover:px-4 transition-all duration-300"
          >
            <div>
              <p className="text-sm text-gray-500 mb-1">Phone</p>
              <p className="text-xl md:text-2xl">
                +91 9326245166
              </p>
            </div>

            <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">
              ↗
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/aditi-potdar-536778201"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-6 border-b border-gray-700 hover:px-4 transition-all duration-300"
          >
            <div>
              <p className="text-sm text-gray-500 mb-1">LinkedIn</p>
              <p className="text-xl md:text-2xl">
                Let's connect on LinkedIn
              </p>
            </div>

            <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">
              ↗
            </span>
          </a>

          <a
            href="https://www.naukri.com/mnjuser/profile?id=&altresid"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-6 border-b border-gray-700 hover:px-4 transition-all duration-300"
          >
            <div>
              <p className="text-sm text-gray-500 mb-1">Naukri</p>
              <p className="text-xl md:text-2xl">
                View my Naukri profile
              </p>
            </div>

            <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">
              ↗
            </span>
          </a>

        </div>

        {/* Footer */}
        <div className="mt-20 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between gap-3 text-sm text-gray-500">
          <p>© 2026 Aditi Potdar</p>
          <p>UI Developer · Web · CMS</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;