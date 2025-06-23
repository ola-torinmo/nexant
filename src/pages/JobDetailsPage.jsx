import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import jsPDF from "jspdf";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    console.log("Job ID from URL:", jobId);
    const normalizedJobId = jobId?.toLowerCase().replace(/\s+/g, "-");

    const jobMap = {
      "product-designer": {
        title: "Product Designer",
        about:
          "We are looking for a proactive and technically skilled Digital Operations & IT Support Specialist to manage key aspects of our IT infrastructure, website performance, and social media presence. This role combines technical troubleshooting with content execution and digital brand maintenance, making it ideal for someone who thrives at the intersection of tech and marketing.",
        qualifications: [
          "IT Support",
        ],
        responsibilities: [
          "Provide technical support for hardware, software, and cloud systems (Google Workspace, Zoom, Microsoft 365, etc.)",
          "Troubleshoot and resolve email setup, password issues, and internet/network glitches",
          "Maintain and update basic internal tech documentation",
          "Coordinate with third-party IT vendors when needed",
        ],
      },
      "engineering-manager": {
        title: "Engineering Manager",
        about:
          "We are looking for a proactive and technically skilled Digital Operations & IT Support Specialist to manage key aspects of our IT infrastructure, website performance, and social media presence. This role combines technical troubleshooting with content execution and digital brand maintenance, making it ideal for someone who thrives at the intersection of tech and marketing.",
        qualifications: [
          "Website Updates",
        ],
        responsibilities: [
          "Regularly update website content (text, images, blog posts, banners, team bios)",
          "Implement minor design/layout edits using CMS tools (e.g., WordPress, Webflow, Wix)",
          "Ensure mobile responsiveness and optimize site performance",
          "Manage plugin updates, basic SEO checks, and uptime monitoring",
        ],
      },
      "customer-success-manager": {
        title: "Customer Success Manager",
        about:
          "We are looking for a proactive and technically skilled Digital Operations & IT Support Specialist to manage key aspects of our IT infrastructure, website performance, and social media presence. This role combines technical troubleshooting with content execution and digital brand maintenance, making it ideal for someone who thrives at the intersection of tech and marketing.",
        qualifications: [
          "Social Media Page Updates",
        ],
        responsibilities: [
          "Publish scheduled content to Instagram, Facebook, LinkedIn, or TikTok platforms",
          "Update profile bios, pinned content, and highlight new campaigns or services",
          "Monitor inboxes/messages and flag any inquiries to the relevant team member",
          "Track engagement or flag platform changes that may affect reach",
        ],
      },
    };

    const data = jobMap[normalizedJobId];

    if (data) {
      const jobData = {
        id: normalizedJobId,
        ...data,
        category: "Design",
        location: "Remote",
        type: "Full-time",
        experience: "2-4 Years",
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
      };

      setJob(jobData);
    } else {
      setJob({
        id: normalizedJobId,
        title: "Unknown Role",
        about: "No job description available.",
        qualifications: [],
        responsibilities: [],
        attachments: [],
        category: "Design",
        location: "Remote",
        type: "Full-time",
        experience: "N/A",
      });
    }
  }, [jobId]);

  const handleDownloadPDF = (title, content) => {
    const doc = new jsPDF();
    const formattedContent = Array.isArray(content) ? content.join("\n\n") : content;
    doc.text(formattedContent, 10, 10, { maxWidth: 180 });
    doc.save(title);
  };

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
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">{job.category}</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{job.location}</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{job.type}</span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{job.experience}</span>
              </div>
            </div>

            <button className="bg-[#C4942D] hover:bg-amber-700 text-white px-6 py-3 rounded-md transition-colors">
              <Link to={`/careers/${job.id}/apply`}>Apply Now</Link>
            </button>
          </div>
        </motion.div>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">About this role</h2>
          <p className="leading-relaxed">{job.about}</p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Qualification</h2>
          <ul className="list-disc list-inside space-y-2">
            {job.qualifications.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Responsibility</h2>
          <ul className="list-disc list-inside space-y-2">
            {job.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Attachments</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {job.attachments.map((file) => (
              <div key={file.id} className="border rounded-lg p-4 shadow-sm bg-white">
                <p className="font-medium text-lg">{file.title}</p>
                <p className="text-sm text-gray-600">{file.fileName}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{file.category}</span>
                  <button
                    onClick={() =>
                      handleDownloadPDF(
                        file.fileName,
                        file.title === "Job Requirements" ? job.qualifications : job.responsibilities
                      )
                    }
                    className="text-yellow-600 hover:text-yellow-500"
                  >
                    <FiDownload className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
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
