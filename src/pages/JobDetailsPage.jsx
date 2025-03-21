import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';

// Assuming you have Navbar and Footer components imported like this:
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      setIsLoading(true);
      try {
        // Replace with actual API endpoint
        // const response = await fetch(`https://your-api.com/jobs/${jobId}`);
        // const data = await response.json();
        // setJob(data);

        // Mock data for demonstration
        setTimeout(() => {
          // Example job data - in production, this would come from your API
          setJob({
            id: jobId,
            title: "Product Designer",
            category: "Design",
            location: "Remote",
            type: "Full-time",
            experience: "2-4 Years",
            about: "Office ipsum you must be muted. Board old shelf-ware these they picture need like happenings. Talk globalize now and pulling beforehand when. Open unpack cost obviously office tiger didn't us. Highlights cause club plane incompetent. Info domains on red-flag ipsum here. New live beforehand paradigm cadence about. Needed previous involved to bay hits define growth supervisor. Discussions contribution teeth run please.",
            qualifications: [
              "Office ipsum you must be muted. Board old shelf-ware these they picture.",
              "Office ipsum you must be muted. Board old shelf-ware these they picture.",
              "Office ipsum you must be muted. Board old shelf-ware these they picture.",
              "Office ipsum you must be muted. Board old shelf-ware these they picture.",
              "Office ipsum you must be muted. Board old shelf-ware these they picture."
            ],
            responsibilities: [
              "Office ipsum you must be muted. Board old shelf-ware these they picture.",
              "Office ipsum you must be muted. Board old shelf-ware these they picture.",
              "Office ipsum you must be muted. Board old shelf-ware these they picture.",
              "Office ipsum you must be muted. Board old shelf-ware these they picture.",
              "Office ipsum you must be muted. Board old shelf-ware these they picture."
            ],
            benefits: {
              company: "Office ipsum you must be muted. Board old shelf-ware these they picture.",
              requirements: "Office ipsum you must be muted. Board old shelf-ware these they picture."
            },
            attachments: [
              {
                id: 1,
                title: "Job Requirements",
                fileName: "product_designer_requirements.pdf",
                fileType: "application/pdf",
                fileSize: "45 KB",
                category: "Full-time"
              },
              {
                id: 2,
                title: "Company Benefits",
                fileName: "company_benefits_package.pdf",
                fileType: "application/pdf",
                fileSize: "32 KB",
                category: "Full-time"
              }
            ]
          });
          setIsLoading(false);
        }, 500);
      } catch (err) {
        setError('Failed to fetch job details');
        setIsLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  // Function to generate PDF for job requirements
  const generateJobRequirementsPDF = (job) => {
    const doc = new jsPDF();
    
    // Add company logo placeholder
    // doc.addImage(companyLogo, 'PNG', 10, 10, 40, 20);
    
    // Title
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('JOB REQUIREMENTS', 105, 30, { align: 'center' });
    
    // Subtitle
    doc.setFontSize(18);
    doc.text(job.title.toUpperCase(), 105, 40, { align: 'center' });
    
    // Horizontal line
    doc.setLineWidth(0.5);
    doc.line(20, 45, 190, 45);
    
    // Job details
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Position: ${job.title}`, 20, 55);
    doc.text(`Category: ${job.category}`, 20, 65);
    doc.text(`Location: ${job.location}`, 20, 75);
    doc.text(`Type: ${job.type}`, 20, 85);
    doc.text(`Experience Required: ${job.experience}`, 20, 95);
    
    // About section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('ABOUT THIS ROLE:', 20, 110);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    const aboutText = doc.splitTextToSize(job.about, 170);
    doc.text(aboutText, 20, 120);
    
    // Qualifications section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('QUALIFICATIONS:', 20, 145);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    let yPos = 155;
    job.qualifications.forEach((item, index) => {
      doc.text(`${index + 1}. ${item}`, 20, yPos);
      yPos += 10;
    });
    
    // Responsibilities section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('RESPONSIBILITIES:', 20, yPos + 10);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    yPos += 20;
    job.responsibilities.forEach((item, index) => {
      doc.text(`${index + 1}. ${item}`, 20, yPos);
      yPos += 10;
    });
    
    // Footer
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text('For more information about this position, please contact our HR department.', 105, 280, { align: 'center' });
    
    return doc;
  };

  // Function to generate PDF for company benefits
  const generateCompanyBenefitsPDF = (job) => {
    const doc = new jsPDF();
    
    // Add company logo placeholder
    // doc.addImage(companyLogo, 'PNG', 10, 10, 40, 20);
    
    // Title
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('COMPANY BENEFITS PACKAGE', 105, 30, { align: 'center' });
    
    // Subtitle
    doc.setFontSize(18);
    doc.text(`FOR ${job.title.toUpperCase()} POSITION`, 105, 40, { align: 'center' });
    
    // Horizontal line
    doc.setLineWidth(0.5);
    doc.line(20, 45, 190, 45);
    
    // Job details
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Position: ${job.title}`, 20, 60);
    doc.text(`Type: ${job.type}`, 20, 70);
    
    // Benefits section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('BENEFITS OVERVIEW:', 20, 90);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    const benefitsText = doc.splitTextToSize(job.benefits.company, 170);
    doc.text(benefitsText, 20, 100);
    
    // Requirements section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('REQUIREMENTS:', 20, 130);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    const requirementsText = doc.splitTextToSize(job.benefits.requirements, 170);
    doc.text(requirementsText, 20, 140);
    
    // Footer
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text('Thank you for your interest in joining our team!', 105, 280, { align: 'center' });
    
    return doc;
  };

  // Function to handle file download
  const handleDownload = (attachment) => {
    let doc;
    
    // Generate PDF based on attachment type
    if (attachment.title === "Job Requirements") {
      doc = generateJobRequirementsPDF(job);
    } else if (attachment.title === "Company Benefits") {
      doc = generateCompanyBenefitsPDF(job);
    }
    
    // Save the PDF
    if (doc) {
      doc.save(attachment.fileName);
    }
  };

  if (isLoading) {
    return (
      <>
        {/* Navbar component would go here */}
        <Navbar />
        <div className="min-h-screen bg-white pt-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
            </div>
          </div>
        </div>
        {/* Footer component would go here */}
        <Footer />
      </>
    );
  }

  if (error || !job) {
    return (
      <>
        {/* Navbar component would go here */}
        <Navbar />
        <div className="min-h-screen bg-white pt-20 px-4">
          <div className="max-w-3xl mx-auto py-16 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Not Found</h2>
            <p className="text-gray-600 mb-8">{error || "We couldn't find the job you're looking for."}</p>
            <Link to="/careers" className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors">
              Back to Careers
            </Link>
          </div>
        </div>
        {/* Footer component would go here */}
        <Footer />
      </>
    );
  }

  return (
    <>
      {/* Navbar component would go here */}
      <Navbar />
      
      <div className="bg-white min-h-screen font-sans">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{job.title}</h1>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">{job.category}</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">{job.location}</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">{job.type}</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">{job.experience}</span>
              </div>
            </div>
            
            <button className="bg-[#C4942D] hover:bg-amber-700 text-white px-6 py-3 rounded-md transition-colors">
             <Link to="/careers/:jobId/apply"> Apply Now</Link> 
            </button>
          </div>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">About this role</h2>
              <div className="text-gray-600">{job.about}</div>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Qualification</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {job.qualifications.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Responsibility</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Attachments</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {job.attachments.map((attachment) => (
                  <div key={attachment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{attachment.title}</h3>
                      <div className="text-gray-400 hover:text-gray-600 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-2 bg-gray-100 rounded-md mb-2 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="bg-gray-200 text-xs px-2 py-1 rounded-full inline-block">{attachment.category}</div>
                        <div className="mt-1 text-sm">{attachment.fileName}</div>
                        <div className="text-xs text-gray-500">{attachment.fileSize}</div>
                      </div>
                      <button 
                        onClick={() => handleDownload(attachment)}
                        className="text-amber-600 hover:text-amber-700 flex items-center space-x-1 transition-colors"
                        aria-label={`Download ${attachment.title}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            <div className="flex justify-center pt-8">
            <button className="bg-[#C4942D] hover:bg-amber-700 text-white px-6 py-3 rounded-md transition-colors">
             <Link to="/careers/:jobId/apply"> Apply Now</Link> 
            </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer component would go here */}
      <Footer />
    </>
  );
};

export default JobDetailsPage;