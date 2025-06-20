import { useState } from "react";
import ResumePreview from "../components/ResumePreview";
import TemplateSelector from "../components/TemplateSelector";

function Builder() {
  // Template Selector
  const [selectedTemplate, setSelectedTemplate] = useState("classic");

  // Personal Info
  const [personal, setPersonal] = useState({
    fullName: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
  });

  // Education
  const [educationList, setEducationList] = useState([
    { school: "", degree: "", start: "", end: "", score: "" },
  ]);

  // Experience
  const [experienceList, setExperienceList] = useState([
    { title: "", company: "", start: "", end: "", description: "" },
  ]);

  // Skills
  const [skills, setSkills] = useState("");

  // Projects
  const [projectList, setProjectList] = useState([
    { title: "", description: "", tech: "", link: "" },
  ]);

  // Handlers – Personal
  const handlePersonalChange = (e) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };

  // Handlers – Education
  const handleEduChange = (index, e) => {
    const newEdu = [...educationList];
    newEdu[index][e.target.name] = e.target.value;
    setEducationList(newEdu);
  };

  const addEdu = () => {
    setEducationList([
      ...educationList,
      { school: "", degree: "", start: "", end: "", score: "" },
    ]);
  };

  const removeEdu = (index) => {
    const newEdu = [...educationList];
    newEdu.splice(index, 1);
    setEducationList(newEdu);
  };

  // Handlers – Experience
  const handleExpChange = (index, e) => {
    const newExp = [...experienceList];
    newExp[index][e.target.name] = e.target.value;
    setExperienceList(newExp);
  };

  const addExp = () => {
    setExperienceList([
      ...experienceList,
      { title: "", company: "", start: "", end: "", description: "" },
    ]);
  };

  const removeExp = (index) => {
    const newExp = [...experienceList];
    newExp.splice(index, 1);
    setExperienceList(newExp);
  };

  // Handlers – Projects
  const handleProjChange = (index, e) => {
    const newProj = [...projectList];
    newProj[index][e.target.name] = e.target.value;
    setProjectList(newProj);
  };

  const addProject = () => {
    setProjectList([
      ...projectList,
      { title: "", description: "", tech: "", link: "" },
    ]);
  };

  const removeProject = (index) => {
    const newProj = [...projectList];
    newProj.splice(index, 1);
    setProjectList(newProj);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 max-w-7xl mx-auto">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 space-y-8 overflow-y-auto max-h-[85vh] pr-2">
        <TemplateSelector
          selectedTemplate={selectedTemplate}
          onChange={setSelectedTemplate}
        />

        {/* PERSONAL INFO */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["fullName", "email", "phone", "github", "linkedin"].map(
              (field) => (
                <input
                  key={field}
                  name={field}
                  placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
                  value={personal[field]}
                  onChange={handlePersonalChange}
                  className="border p-2 rounded-md"
                />
              )
            )}
          </div>
        </div>

        {/* EDUCATION */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-blue-600">Education</h3>
            <button
              onClick={addEdu}
              className="text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
              + Add
            </button>
          </div>
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {["school", "degree", "start", "end", "score"].map((field) => (
                <input
                  key={field}
                  name={field}
                  placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
                  value={edu[field]}
                  onChange={(e) => handleEduChange(index, e)}
                  className="border p-2 rounded-md"
                />
              ))}
              {educationList.length > 1 && (
                <button
                  onClick={() => removeEdu(index)}
                  className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 w-fit h-fit">
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>

        {/* WORK EXPERIENCE */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-blue-600">
              Work Experience
            </h3>
            <button
              onClick={addExp}
              className="text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
              + Add
            </button>
          </div>
          {experienceList.map((exp, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {["title", "company", "start", "end"].map((field) => (
                <input
                  key={field}
                  name={field}
                  placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
                  value={exp[field]}
                  onChange={(e) => handleExpChange(index, e)}
                  className="border p-2 rounded-md"
                />
              ))}
              <textarea
                name="description"
                placeholder="Describe your role/responsibilities"
                value={exp.description}
                onChange={(e) => handleExpChange(index, e)}
                className="border p-2 rounded-md col-span-1 sm:col-span-2"
                rows={3}
              />
              {experienceList.length > 1 && (
                <button
                  onClick={() => removeExp(index)}
                  className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 w-fit h-fit">
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>

        {/* SKILLS */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Skills</h3>
          <input
            placeholder="Enter skills separated by commas (e.g. C++, React, Tailwind)"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="border p-2 rounded-md w-full"
          />
        </div>

        {/* PROJECTS */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-blue-600">Projects</h3>
            <button
              onClick={addProject}
              className="text-sm bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
              + Add
            </button>
          </div>
          {projectList.map((proj, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {["title", "tech"].map((field) => (
                <input
                  key={field}
                  name={field}
                  placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
                  value={proj[field]}
                  onChange={(e) => handleProjChange(index, e)}
                  className="border p-2 rounded-md"
                />
              ))}
              <textarea
                name="description"
                placeholder="Project Description"
                value={proj.description}
                onChange={(e) => handleProjChange(index, e)}
                className="border p-2 rounded-md col-span-1 sm:col-span-2"
                rows={3}
              />
              <input
                name="link"
                placeholder="GitHub / Live Link"
                value={proj.link}
                onChange={(e) => handleProjChange(index, e)}
                className="border p-2 rounded-md col-span-1 sm:col-span-2"
              />
              {projectList.length > 1 && (
                <button
                  onClick={() => removeProject(index)}
                  className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-600 w-fit h-fit">
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right - Preview */}
      <div className="w-full lg:w-1/2 bg-gray-100 rounded-lg p-4 overflow-y-auto max-h-[85vh]">
        <ResumePreview
          personal={personal}
          educationList={educationList}
          experienceList={experienceList}
          skills={skills}
          projectList={projectList}
          template={selectedTemplate}
        />
      </div>
    </div>
  );
}

export default Builder;
