export default function PortfolioWebsite() {
  const projects = [
    {
      title: "Gold Price Analysis Dashboard",
      description:
        "Currently building a Power BI dashboard to analyze gold price trends and market patterns from 2000–2026.",
      skills: ["Power BI", "Data Cleaning", "Data Visualization"],
      status: "In Progress",
    },
    {
      title: "Mental Health & Workplace Wellness Dashboard",
      description:
        "Developed a workplace wellness dashboard exploring employee mental health patterns, work stress trends, and organizational insights using Power BI and SQL.",
      skills: ["SQL", "Power BI", "Data Analysis"],
      status: "Completed",
    },
    {
      title: "Silver Price Analysis Dashboard",
      description:
        "Upcoming dashboard project focused on silver price trends, yearly analysis, and market insights.",
      skills: ["Power BI", "Excel", "Data Modeling"],
      status: "Planned",
    },
  ];

  const skills = [
    "Power BI",
    "SQL",
    "Excel",
    "Data Visualization",
    "Dashboard Design",
    "Data Cleaning",
    "Problem Solving",
    "Business Analytics",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 md:px-16 py-20 border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-4">
              Aspiring Data Analyst
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-cyan-400">Balaji Nadar</span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl">
              I build interactive dashboards and data-driven projects that
              transform raw data into meaningful insights.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://github.com/Balaji-Analytics"
                target="_blank"
                className="px-6 py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
              >
                View GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/balaji-nadar"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-2xl border border-gray-700 hover:border-cyan-400 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-[2rem] bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-2xl shadow-cyan-500/20">
              <div className="w-full h-full rounded-[2rem] bg-zinc-900 flex items-center justify-center text-center p-6">
                <div>
                  <div className="text-7xl mb-4">📊</div>
                  <p className="text-xl font-semibold">Data Analyst Portfolio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-16 py-20 border-b border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>

          <div className="bg-zinc-900 border border-gray-800 rounded-3xl p-8 shadow-xl">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a B.Com student passionate about analytics, dashboard design,
              and business intelligence. I enjoy turning complex datasets into
              simple and visually engaging dashboards using Power BI and SQL.
              Currently, I am building projects to strengthen my portfolio and
              grow my career in data analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 md:px-16 py-20 border-b border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-zinc-900 border border-gray-800 rounded-2xl p-5 text-center hover:border-cyan-400 hover:-translate-y-1 transition"
              >
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 md:px-16 py-20 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-bold">Projects</h2>
            <p className="text-gray-400">Featured Work</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-zinc-900 border border-gray-800 rounded-3xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
              >
                <div className="h-40 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6">
                  <span className="text-5xl">📈</span>
                </div>

                <p className="text-sm text-cyan-400 mb-3">
                  {project.status}
                </p>

                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-sm"
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

      {/* Contact */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for internship and entry-level opportunities
            in data analytics. Feel free to connect with me.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="mailto:balajinadar.work@gmail.com"
              className="px-6 py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/Balaji-Analytics"
              target="_blank"
              className="px-6 py-3 rounded-2xl border border-gray-700 hover:border-cyan-400 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
