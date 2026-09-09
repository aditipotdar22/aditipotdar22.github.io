const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "CMS & Web Publishing",
    skills: [
      "AEM",
      "Sitecore",
      "Content Authoring",
      "Content Migration",
      "Web Publishing",
    ],
  },
  {
    title: "Tools & Standards",
    skills: [
      "Adobe Workfront",
      "Wrike",
      "SEO",
      "WCAG",
      "Responsive Design",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-2">
            What I work with
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Skills<span className="text-gray-400">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="border border-gray-200 rounded-2xl p-6
                         hover:border-gray-900
                         hover:-translate-y-1
                         transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {group.title}
                </h3>

                <span className="text-sm text-gray-400">
                  0{index + 1}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full
                               border border-gray-200
                               text-sm text-gray-600
                               hover:bg-gray-900 hover:text-white
                               hover:border-gray-900
                               transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;