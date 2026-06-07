import image from "next/image";

export default function PortfolioWebsite() {
  const projects = [
    
    
    {
      title: "Tamil Nadu Election Dashboard",
      description:
       "Interactive election dashboard analyzing voting patterns, party performance, and constituency insights using Power BI.",
      skills: ["Power BI","Data Cleaning", "Data Visualization", "Data Analysis"],
      status: "Completed",
      image: "/tamilnadu-election-dashboard.png",
    },
    {
      title: "Mental Health & Workplace Wellness Dashboard",
      description:
        "Developed a workplace wellness dashboard exploring employee mental health patterns, work stress trends, and organizational insights using Power BI and SQL.",
      skills: ["Data Cleaning", "Power BI", "Data Analysis"],
      status: "Completed",
      image: "/mental-health-dashboard.png",
    },
    {
      title: "HR Analytics Dashboard",
      description:
       "HR analytics dashboard exploring employee attrition, department trends, and workforce insights.",
      skills: ["Power BI", "HR Analytics", "Dashboard Design"],
      status: "Completed",
      image: "/HR Analytics.png",
    },
    {
      title: "Superstore Sales Dashboard",
      description:
       "Created an interactive Power BI dashboard analyzing sales, profit, customer segments, and regional performance using Superstore dataset insights.",
      skills: ["Power BI", "Data Visualization", "Business Analytics"],
      status: "Completed",
      image: "/superstore-sales-dashboard.png",
   },
    {
      title: "Sales Performance Dashboard",
      description:
       "Built an Excel dashboard to analyze sales performance, revenue trends, and product-wise insights using charts, pivot tables, and KPI tracking.",
      skills: ["Excel", "Data Analysis", "Dashboard Design"],
      status: "Completed",
      image: "/Sales 1.png",
    },
    {
      title: "Personal Expense Tracker",
      description:
       "Designed an Excel-based personal expense tracker to monitor spending patterns, monthly budgets, and category-wise expenses.",
      skills: ["Excel", "Financial Tracking", "Data Organization"],
      status: "Completed",
      image: "/Expense Report 1.png",
    },
    {
      title: "Gold Price Analysis Dashboard",
      description:
        "Currently building a Power BI dashboard to analyze gold price trends and market patterns from 2000–2026.",
      skills: ["Power BI", "Data Cleaning", "Data Visualization", "Data Analysis"],
      status: "In Progress",
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
            
            <div className="flex gap-8 mt-8">
            <div>
              <h3 className="text-3xl font-bold text-cyan-400">8+</h3>
              <p className="text-gray-400">Projects</p>
             </div>

            <div>
               <h3 className="text-3xl font-bold text-cyan-400">3+</h3>
               <p className="text-gray-400">Tools</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">1</h3>
                <p className="text-gray-400">Portfolio Website</p>
              </div>
            </div>

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
                className="px-6 py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
              >
                LinkedIn
              </a>
              <a
                href="/Balaji_Nadar_Resume.pdf"
                target="_blank"
                className="px-6 py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:scale-105 transition"
>                 
                Resume
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
              I'm a B.Com graduate and aspiring Data Analyst passionate about transforming raw data into meaningful insights. I enjoy building dashboards using Power BI, Excel, and SQL while continuously improving my analytical and problem-solving skills through real-world projects.
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

      {/* Certifications */}
      <section className="px-6 md:px-16 py-20 border-b border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Certifications</h2>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <p>SQL (Basic) – HackerRank</p>
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
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                ) : (
                  <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-t-2xl">
                  <span className="text-4xl">📊</span>
                 </div>
                )}

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
