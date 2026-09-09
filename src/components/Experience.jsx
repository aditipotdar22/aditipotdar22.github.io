
function Experience() {
  const experiences = [
    {
      year: "2024 – Present",
      role: "Web Developer | Web Content Publisher",
      company: "Accenture",
      description:
        "Develop and maintain responsive web interfaces while managing and publishing web content through content management systems.",
      points: [
        "Develop and maintain responsive web pages using HTML5, CSS3, JavaScript, React.js, and modern front-end technologies.",
        "Manage and publish web content across websites using Content Management Systems (CMS) such as AEM and Sitecore, including content authoring, updates, and migrations.",
        "Collaborate with designers, developers, content teams, and stakeholders to deliver accurate, consistent, and user-friendly web experiences.",
        "Ensure web pages meet responsive design, accessibility, SEO, and WCAG guidelines, while maintaining consistency with established web standards.",
        "Troubleshoot content and UI issues, perform quality checks, and review pages for accuracy, formatting, links, metadata, and consistent rendering across devices and browsers.",
        "Manage publishing workflows and website updates using Adobe Workfront and Wrike, supporting ongoing website enhancements while meeting project timelines.",                        
      ],
        skills: ["Web Development", "CMS", "Content Publishing", "HTML", "CSS"],
    },
    {
      year: "2022 – 2024",
      role: "Front-End Developer",
      company: "Agaetis Technologies",
      description:
        "Developed responsive and user-friendly web interfaces, translating designs into functional web experiences using modern front-end technologies.",
      points: [
       "Developed responsive and user-friendly web interfaces using HTML5, CSS3, JavaScript, and React.js.",
       "Converted UI/UX designs and requirements into functional, reusable, and responsive web components.",
       "Built layouts compatible with desktop, tablet, and mobile devices using responsive design principles.",
       "Worked with JavaScript and React.js to implement interactive UI elements and improve user experience.",
       "Created and maintained reusable components to ensure consistent design and efficient development.",
      ],
        skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen py-24 px-8 md:px-12 lg:px-20 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-sm text-gray-500 uppercase tracking-[0.3em]">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Work Experience
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl leading-7">
            My professional journey in front-end development, web development,
            and content publishing.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-[7px] md:left-[110px] top-0 bottom-0 w-px bg-gray-200"></div>

          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative grid grid-cols-1 md:grid-cols-[90px_1fr] gap-8 md:gap-12 mb-16 last:mb-0"
            >

              {/* Year */}
              <div className="pl-8 md:pl-0 md:text-right">
                <span className="text-sm font-medium text-gray-500">
                  {experience.year}
                </span>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-[103px] top-1.5 w-3 h-3 bg-gray-900 rounded-full border-4 border-white box-content"></div>

              {/* Experience Card */}
              <div className="ml-8 md:ml-0 border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300">

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {experience.role}
                    </h3>

                    <p className="text-gray-500 mt-1">
                      {experience.company}
                    </p>
                  </div>

                  <span className="text-xs uppercase tracking-wider text-gray-400">
                    {index === 0 ? "Current Role" : "Previous Role"}
                  </span>

                </div>

                <p className="text-gray-600 leading-7 mt-6 max-w-3xl">
                  {experience.description}
                </p>

                <ul className="list-disc pl-5 text-gray-600 leading-7 mt-6 max-w-3xl">
                  {experience.points.map((point) => (
                        <li 
                        key={point} className="mb-3"
                        >{point}</li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs rounded-full bg-gray-100 text-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;