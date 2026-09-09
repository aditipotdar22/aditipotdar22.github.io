import profileImage from "../../assets/images/hero-banner.jpg";
import Resume from "../../assets/pdf/Resume.pdf";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-white px-6 md:px-12 lg:px-20 py-24 flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto">

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* LEFT */}
          <div className="lg:col-span-7">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-5">
              &lt;hello_world /&gt;
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 leading-[0.9]">
              Aditi
              <br />
              <span className="text-gray-400">Potdar.</span>
            </h1>

            <div className="mt-8 max-w-xl">

              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                UI Developer
              </h2>

              <p className="mt-4 text-gray-500 text-base md:text-lg leading-relaxed">
                I design and build responsive digital experiences that
                combine thoughtful design, clean code and meaningful
                user experiences.
              </p>

            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href={Resume}
                download
                className="group px-7 py-3.5 bg-gray-900 text-white rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-700"
              >
                Download Resume
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  ↓
                </span>
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 border border-gray-300 rounded-full text-sm font-medium text-gray-800 hover:border-gray-900 transition-all duration-300"
              >
                Let's Connect →
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5">

            <div className="relative max-w-md mx-auto">

              {/* Image Card */}
              <div className="relative bg-gray-100 rounded-[2rem] p-3">

                <img
                  src={profileImage}
                  alt="Aditi Potdar"
                  className="w-full h-[28rem] md:h-[34rem] object-cover rounded-[1.5rem]"
                />

                {/* Image Badge */}
                <div className="absolute top-7 right-7 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-xs font-medium text-gray-700">
                    UI / FRONTEND
                  </span>
                </div>

              </div>

              {/* Experience Card */}
              <div className="absolute -bottom-7 -left-6 md:-left-10 bg-white border border-gray-200 rounded-2xl p-5 shadow-lg">

                <p className="text-3xl font-bold text-gray-900">
                  03+
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Years of experience
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Skills */}
        <div className="mt-20 pt-6 border-t border-gray-200">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <span className="text-xs uppercase tracking-[0.25em] text-gray-400">
              Currently working with
            </span>

            <div className="flex flex-wrap gap-3">

              {[
                "React",
                "JavaScript",
                "AEM",
                "Sitecore",
                "Tailwind",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-gray-200 text-xs text-gray-600 hover:border-gray-900 hover:text-gray-900 transition"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;