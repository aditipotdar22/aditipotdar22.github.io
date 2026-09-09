const education = [
  {
    year: "2018 — 2022",
    degree: "Bachlors in Engineering ",
    field: "Information Technology",
    institute: "Xavier Institute of Engineering",
  },
  {
    year: "2017 — 2018",
    degree: "Higher Secondary Certificate",
    field: "Science",
    institute: "KC College",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="min-h-screen px-6 py-24 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
            My background
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Education<span className="text-gray-400">.</span>
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="relative border-l border-gray-300 ml-3">

          {education.map((item, index) => (
            <div
              key={item.year}
              className="relative pl-10 pb-14 last:pb-0"
            >

              {/* Timeline Dot */}
              <span className="absolute -left-[6px] top-1 w-3 h-3 rounded-full bg-gray-900"></span>

              {/* Year */}
              <p className="text-sm text-gray-500 mb-3">
                {item.year}
              </p>

              {/* Degree */}
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {item.degree}
              </h3>

              <p className="mt-2 text-lg text-gray-700">
                {item.field}
              </p>

              <p className="mt-2 text-gray-500">
                {item.institute}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Education;