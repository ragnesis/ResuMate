import React from "react";
import html2pdf from "html2pdf.js";

function ResumePreview({
  personal,
  educationList,
  experienceList,
  skills,
  projectList,
  template = "classic",
}) {
  const defaultPersonal = {
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    phone: "+91 9876543210",
    github: "github.com/johndoe",
    linkedin: "linkedin.com/in/johndoe",
  };
  const defaultEducation = [
    {
      school: "IIT Bombay",
      degree: "B.Tech in Electrical Engineering",
      start: "2020",
      end: "2024",
      score: "8.9 CGPA",
    },
  ];
  const defaultExperience = [
    {
      title: "Frontend Intern",
      company: "TechSpark Pvt Ltd",
      start: "2023-01",
      end: "2023-06",
      description:
        "Worked on building reusable UI components with React and TailwindCSS.",
    },
  ];
  const defaultSkills =
    "C++, JavaScript, React, TailwindCSS, Node.js, MongoDB, Git, REST APIs";
  const defaultProjects = [
    {
      title: "Resume Generator",
      description:
        "Created a fully responsive resume builder using React and TailwindCSS.",
      tech: "React, TailwindCSS",
      link: "https://github.com/johndoe/resume-generator",
    },
  ];

  const personalData = Object.values(personal).some((v) => v)
    ? personal
    : defaultPersonal;
  const eduData = educationList?.some((e) => Object.values(e).some((v) => v))
    ? educationList
    : defaultEducation;
  const expData = experienceList?.some((e) => Object.values(e).some((v) => v))
    ? experienceList
    : defaultExperience;
  const skillsData = skills?.trim() ? skills : defaultSkills;
  const projData = projectList?.some((e) => Object.values(e).some((v) => v))
    ? projectList
    : defaultProjects;

  const handleDownload = () => {
    const element = document.getElementById("resume-preview");
    const opt = {
      margin: 0,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 4,
        useCORS: true,
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  const ClassicTemplate = () => (
    <div
      id="resume-preview"
      className="bg-white p-6 rounded shadow text-gray-800 font-sans w-[210mm] min-h-[297mm] mx-auto">
      <h1 className="text-2xl font-bold text-gray-900">
        {personalData.fullName}
      </h1>
      <p className="text-sm text-gray-600">{personalData.email}</p>
      <p className="text-sm text-gray-600">{personalData.phone}</p>
      <p className="text-sm text-gray-600">{personalData.github}</p>
      <p className="text-sm text-gray-600 mb-4">{personalData.linkedin}</p>

      <h2 className="text-lg font-semibold text-blue-700 mb-2">Education</h2>
      {eduData.map((edu, i) => (
        <div key={i} className="text-sm mb-2">
          <strong>{edu.degree}</strong> — {edu.school} ({edu.start} - {edu.end})
          <br />
          CGPA: {edu.score}
        </div>
      ))}

      <h2 className="text-lg font-semibold text-blue-700 mt-4 mb-2">
        Experience
      </h2>
      {expData.map((exp, i) => (
        <div key={i} className="text-sm mb-2">
          <strong>{exp.title}</strong> @ {exp.company} ({exp.start} - {exp.end})
          <br />
          {exp.description}
        </div>
      ))}

      <h2 className="text-lg font-semibold text-blue-700 mt-4 mb-2">Skills</h2>
      <p className="text-sm">{skillsData}</p>

      <h2 className="text-lg font-semibold text-blue-700 mt-4 mb-2">
        Projects
      </h2>
      {projData.map((proj, i) => (
        <div key={i} className="text-sm mb-2">
          <strong>{proj.title}</strong> – {proj.tech}
          <br />
          {proj.description}
          <br />
          <a
            href={proj.link}
            className="text-blue-500 text-xs"
            target="_blank"
            rel="noreferrer">
            {proj.link}
          </a>
        </div>
      ))}
    </div>
  );

  const MinimalTemplate = () => (
    <div
      id="resume-preview"
      className="bg-white p-8 text-gray-800 font-serif w-[210mm] min-h-[297mm] mx-auto">
      <div className="border-b border-gray-400 pb-4 mb-4">
        <h1 className="text-2xl font-bold uppercase">
          {personalData.fullName}
        </h1>
        <p className="text-sm">
          {personalData.email} | {personalData.phone}
        </p>
        <p className="text-sm">
          {personalData.github} | {personalData.linkedin}
        </p>
      </div>

      <section className="mb-4">
        <h2 className="font-bold text-sm border-b border-gray-400">
          Education
        </h2>
        {eduData.map((edu, idx) => (
          <div key={idx} className="text-xs mt-1">
            {edu.degree}, {edu.school} ({edu.start}-{edu.end}) – {edu.score}
          </div>
        ))}
      </section>

      <section className="mb-4">
        <h2 className="font-bold text-sm border-b border-gray-400">
          Experience
        </h2>
        {expData.map((exp, idx) => (
          <div key={idx} className="text-xs mt-1">
            {exp.title} @ {exp.company} ({exp.start}-{exp.end}) –{" "}
            {exp.description}
          </div>
        ))}
      </section>

      <section className="mb-4">
        <h2 className="font-bold text-sm border-b border-gray-400">Skills</h2>
        <p className="text-xs mt-1">{skillsData}</p>
      </section>

      <section>
        <h2 className="font-bold text-sm border-b border-gray-400">Projects</h2>
        {projData.map((proj, idx) => (
          <div key={idx} className="text-xs mt-1">
            <strong>{proj.title}</strong> – {proj.tech}: {proj.description}
            <br />
            <a
              href={proj.link}
              className="text-blue-500"
              target="_blank"
              rel="noreferrer">
              {proj.link}
            </a>
          </div>
        ))}
      </section>
    </div>
  );

  const ModernTemplate = () => (
    <div
      id="resume-preview"
      className="bg-white text-gray-900 font-sans p-8 w-[210mm] min-h-[297mm] mx-auto text-[13px] leading-relaxed tracking-wide space-y-6">
      <div className="border-b border-gray-300 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-blue-800">
          {personalData.fullName}
        </h1>
        <p className="text-sm text-gray-600">
          {personalData.email} | {personalData.phone}
        </p>
        <p className="text-sm text-gray-600">
          {personalData.github} | {personalData.linkedin}
        </p>
      </div>

      <section>
        <h2 className="text-blue-700 font-semibold text-base mb-2 uppercase tracking-wide">
          Work Experience
        </h2>
        <div className="space-y-4">
          {expData.map((exp, i) => (
            <div key={i}>
              <p className="font-semibold">
                {exp.title} @ {exp.company}
              </p>
              <p className="text-xs text-gray-500 mb-1">
                {exp.start} – {exp.end}
              </p>
              <p className="text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-blue-700 font-semibold text-base mb-2 uppercase tracking-wide">
          Projects
        </h2>
        <div className="space-y-3">
          {projData.map((proj, i) => (
            <div key={i}>
              <p className="font-semibold">
                {proj.title} – {proj.tech}
              </p>
              <p className="text-sm">{proj.description}</p>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 text-xs underline">
                  {proj.link}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-blue-700 font-semibold text-base mb-2 uppercase tracking-wide">
          Education
        </h2>
        <div className="space-y-3">
          {eduData.map((edu, i) => (
            <div key={i}>
              <p className="font-semibold">
                {edu.degree}, {edu.school}
              </p>
              <p className="text-xs text-gray-500">
                {edu.start} – {edu.end} | CGPA: {edu.score}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-blue-700 font-semibold text-base mb-2 uppercase tracking-wide">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2 text-sm text-gray-700">
          {skillsData.split(",").map((skill, i) => (
            <span key={i} className="bg-gray-200 px-2 py-1 rounded-full">
              {skill.trim()}
            </span>
          ))}
        </div>
      </section>
    </div>
  );

  return (
    <>
      {template === "minimal" ? (
        <MinimalTemplate />
      ) : template === "modern" ? (
        <ModernTemplate />
      ) : (
        <ClassicTemplate />
      )}

      <div className="flex justify-center mt-4">
        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Download as PDF
        </button>
      </div>
    </>
  );
}

export default ResumePreview;
