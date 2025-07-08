import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const normalizedJobId = jobId?.toLowerCase().replace(/\s+/g, "-");

    const jobMap = {
      "head-of-engineering-(design)": {
        title: "Head of Engineering (Design)",
        about:
          "Oversees the architectural and engineering design phase of projects, ensuring technical soundness and innovation. Lead design team across multiple projects; Approve technical drawings and designs; Coordinate with clients, consultants, and regulatory bodies; Ensure compliance with design codes and safety standards.",
        qualifications: [
          "Minimum Bachelor’s  degree in Civil Engineering",
          "Strong leadership and CAD/BIM skills",
        ],
      },
      "head-of-engineering-(supervision)": {
        title: "Head of Engineering (Supervision)",
        about:
          "Leads field supervision and quality control efforts across engineering projects, ensuring compliance and timely delivery.Manage site engineers and supervisors; Review project schedules and execution plans; Ensure site works meet specs and regulations; Liaise between site and office teams",
        qualifications: [
          "Minimum Bachelor’s degree in Civil Engineering or related field",
          "Proven leadership and communication skills",
        ],
      },
      "senior-construction-manager": {
        title: "Senior Construction Manager",
        about:
          "Manages large-scale construction operations from initiation to completion, focusing on efficiency, cost, and safety.Lead daily construction activities; Allocate resources and manage subcontractors; Monitor budgets, timelines, and risks; Ensure HSE compliance on site",
        qualifications: [
          "Minimum Bachelor’s degree in Civil Engineering or Construction Management",
        ],
      },
      "senior-qaqc-lead": {
        title: "Senior QAQC Lead",
        about:
          "Ensures quality assurance and control standards are implemented throughout project execution.Develop QA/QC plans and inspection procedures; Conduct audits and site inspections; Approve materials and testing reports; Train teams on quality procedures",
        qualifications: [
          "Minimum Bachelor’s degree in Engineering or Construction Quality Management",
        ],
      },
      "senior-design-manager": {
        title: "Senior Design Manager",
        about:
          "Directs design development and coordination across multidisciplinary teams for major infrastructure or building projects.Manage multi-discipline design deliverables; Lead design reviews and client meetings; Resolve conflicts between architectural, MEP, and structural drawings; Ensure timely design submissions",
        qualifications: [
          "Minimum Bachelor’s degree Degree in Architecture or Engineering",
        ],
      },
      "civil-engineer": {
        title: "Civil Engineer",
        about:
          "Designs, plans, and supervises the construction of infrastructure such as roads, bridges, and buildings.Prepare drawings, calculations, and specs; Oversee site implementation; Perform surveys and feasibility analysis; Coordinate with contractors and clients",
        qualifications: [
          "Minimum Bachelor’s degree in Civil Engineering",
        ],
      },
      "mechanical-engineer": {
        title: "Mechanical Engineer",
        about:
          "Handles the design, installation, and maintenance of mechanical systems in building and industrial projects.Develop mechanical system designs; Perform energy/load calculations; Inspect installation of mechanical works; Coordinate with electrical and civil teams",
        qualifications: [
          "Minimum Bachelor’s degree in Mechanical Engineering",
        ],
      },
      "electrical-engineer": {
        title: "Electrical Engineer",
        about:
          "Responsible for designing and supervising electrical systems for residential, commercial, or industrial projects.Develop electrical layouts and power distribution; Inspect electrical works on site; Ensure compliance with safety codes; Handle lighting, power, and fire alarm systems",
        qualifications: [
          "Minimum Bachelor’s degree in Electrical or Electronics Engineering",
        ],
      },
      "transport-planner": {
        title: "Transport Planner",
        about:
          "Plans and develops transportation systems and logistics infrastructure to optimize traffic and mobility.Conduct transport impact assessments; Develop traffic management plans; Collaborate with civil engineers and local authorities; Recommend sustainable transport solutions",
        qualifications: [
          "BConduct transport impact assessments; Develop traffic management plans; Collaborate with civil engineers and local authorities; Recommend sustainable transport solutions",
        ],
      },
      "qmr-representative": {
        title: "QMR Representative",
        about:
          "Represents the Quality Management System (QMS) leadership role — ensuring ISO compliance and continual improvement.Monitor QMS implementation across projects; Liaise with certifying bodies; Ensure documentation and compliance; Organize internal audits",
        qualifications: [
          "Minimum QMS lead auditor certification (e.g., ISO 9001)",
        ],
      },
      "engineering-quality-manager": {
        title: "Engineering Quality Manager",
        about:
          "Oversees and enforces quality standards across engineering teams and processes.Lead audits and quality reviews; Create inspection and test plans; Monitor KPIs for quality performance; Collaborate with QAQC leads and site managers",
        qualifications: [
          "Minimum Degree in Engineering or Quality Assurance",
        ],
      },
      "project-planner": {
        title: "Project Planner",
        about:
          "Develops detailed project schedules and plans to ensure timely delivery, resource allocation, and budget control. Create and update project schedules; Monitor progress and highlight delays; Collaborate with engineers and managers to align planning; Report KPIs to stakeholders.",
        qualifications: [
          "Minimum Bachelor’s in Engineering ",
        ],
      },
      "director-of-operations": {
        title: "Senior Construction Manager",
        about:
          "Oversees company-wide operations, ensuring projects and departments run efficiently while meeting company goals. Supervise departmental heads; Define operational strategy and KPIs; Monitor financial performance; Drive operational excellence and continuous improvement.",
        qualifications: [
          "Minimum Bachelor’s in Operations Management",
        ],
      },
      "business-development": {
        title: "Business Development",
        about:
          "Focuses on expanding the company’s market presence by identifying and securing new business opportunities. Identify new leads and partners; Develop proposals and presentations; Maintain client relationships; Track market trends and competitor activity.",
        qualifications: [
          "Minimum Bachelor’s degree in Business",
        ],
      },
      "personal-assistant": {
        title: "Personal Assistant",
        about:
          "Provides administrative support to senior executives to ensure smooth day-to-day operations. Manage schedules and appointments; Draft emails and reports; Arrange travel and meetings; Handle confidential tasks with discretion.",
        qualifications: [
          "Minimum HND/Bachelor’s in Business Administration ",
        ],
      },
      "admin-support": {
        title: "Admin Support",
        about:
          "Supports the office by managing documentation, coordinating tasks, and ensuring smooth administrative workflows. Organize and maintain records; Support HR and finance teams; Prepare reports and documents; Handle phone calls and correspondence.",
        qualifications: [
          "Minimum OND/HND or Bachelor's degree",
        ],
      },
      "drivers": {
        title: "Drivers",
        about:
          "Responsible for transporting staff, equipment, and materials safely and efficiently. Safely transport personnel and goods; Maintain vehicle cleanliness and performance; Follow schedules and assigned routes; Report any mechanical issues.",
        qualifications: [
          "Valid driver’s license and clean driving record",
          "Knowledge of traffic laws"
        ],
      },
      
    };

    const data = jobMap[normalizedJobId];

    if (data) {
      setJob({
        id: normalizedJobId,
        ...data,
        location: "On site",
        type: "Full-time",
        attachments: [
          {
            id: 1,
            title: "Job Requirements",
            fileName: `${data.title.toLowerCase().replace(/\s+/g, "_")}_requirements.pdf`,
            fileType: "application/pdf",
            fileSize: "45 KB",
            category: "Full-time",
          },
          {
            id: 2,
            title: "Company Benefits",
            fileName: "company_benefits_package.pdf",
            fileType: "application/pdf",
            fileSize: "32 KB",
            category: "Full-time",
          },
        ],
      });
    } else {
      setJob({
        id: normalizedJobId,
        title: "Unknown Role",
        about: "No job description available.",
        qualifications: [],
        attachments: [],
        category: "Design",
        location: "On site",
        type: "Full-time",
      });
    }
  }, [jobId]);

  if (!job) {
    return <div className="min-h-screen bg-white text-gray-900 p-8">Loading...</div>;
  }

  return (
    <div className="bg-white text-gray-900 font-sans">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-12 space-y-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{job.title}</h1>
              <div className="flex flex-wrap gap-2 mt-3">
                {/* <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">{job.category}</span> */}
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{job.location}</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{job.type}</span>
              </div>
            </div>

            <button className="bg-[#C4942D] hover:bg-amber-700 text-white px-6 py-3 rounded-md transition-colors">
              <Link to={`/careers/${job.id}/apply`}>Apply Now</Link>
            </button>
          </div>
        </motion.div>

        {/* About the Job (merged responsibilities) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">About the Job</h2>
          <p className="leading-relaxed">{job.about}</p>
        </section>

        {/* Qualification */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Qualification</h2>
          <ul className="list-disc list-inside space-y-2">
            {job.qualifications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <div className="text-center">
          <button className="bg-[#C4942D] hover:bg-amber-700 text-white px-6 py-3 rounded-md transition-colors">
            <Link to={`/careers/${job.id}/apply`}>Apply Now</Link>
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobDetailsPage;
