import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CareerPage = () => {
  // State for active category and job listings
  const [activeCategory, setActiveCategory] = useState('View all');
  const [jobListings, setJobListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const jobCategories = [
    'View all',
    'Development',
    'Design',
    'Marketing',
    'Customer Service',
    'Operations',
    'Finance',
    'Management'
  ];

  // Sample data (will be replaced with API data)
  const sampleJobs = [
    {
      id:'product-designer' ,
      category: 'Design',
      title: 'Product Designer',
      remote: true,
      fullTime: true,
      experience: '2-4 Years'
    },
    {
      id:'Engineering Manager',
      category: 'Development',
      title: 'Engineering Manager',
      remote: true,
      fullTime: true,
      experience: '3-5 Years'
    },
    {
      id: 'Customer Success Manager',
      category: 'Customer Service',
      title: 'Customer Success Manager',
      remote: true,
      fullTime: true,
      experience: '1-3 Years'
    }
  ];

  // Fetch job listings from backend
  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      try {
        // Replace this with your actual API endpoint
        // const response = await fetch('https://your-api.com/jobs');
        // const data = await response.json();
        // setJobListings(data);
        
        // Using sample data for now
        setTimeout(() => {
          setJobListings(sampleJobs);
          setIsLoading(false);
        }, 500); // Simulate network delay
      } catch (err) {
        setError('Failed to fetch job listings');
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs based on selected category
  const filteredJobs = activeCategory === 'View all' 
    ? jobListings 
    : jobListings.filter(job => job.category === activeCategory);

  // Handle category selection
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <div className="bg-[#C4942D1A] font-sans">
        {/* Hero Section */}
        <div className="py-16 px-4 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#C4942D] mb-6">
            We're committed to bringing world-class, passionate professionals together to push new boundaries
          </h1>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            We believe in building teams where unique perspectives and talents can thrive and everyone has what they need to excel in their role, career, and at home.
          </p>
        </div>
      </div>
      <div className="bg-white min-h-screen font-sans">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 px-4 pt-8">
          {jobCategories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md border transition-all duration-200 ${
                category === activeCategory 
                  ? 'bg-[#C4942D] text-white border-[#C4942D]' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-amber-100 hover:border-amber-300 hover:text-amber-700'
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Job Listings Section */}
        <div className="max-w-3xl mx-auto px-4 pb-16">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
            </div>
          ) : error ? (
            <div className="text-center py-8 text-red-600">{error}</div>
          ) : filteredJobs.length === 0 ? (
            <div className="text-center py-8 text-gray-600">No jobs found in this category</div>
          ) : (
            filteredJobs.map((job) => (
              <div 
                key={job.id}
                className="bg-white rounded-lg border border-gray-200 mb-4 p-6 relative hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-amber-600 font-medium mb-1">{job.category}</div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{job.title}</h2>
                
                <div className="flex items-center space-x-6">
                  {job.remote && (
                    <div className="flex items-center space-x-2 text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>Remote</span>
                    </div>
                  )}
                  
                  {job.fullTime && (
                    <div className="flex items-center space-x-2 text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>Full-time</span>
                    </div>
                  )}
                  
                  {job.experience && (
                    <div className="flex items-center space-x-2 text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                      <span>{job.experience}</span>
                    </div>
                  )}
                </div>
                
                <div className="absolute right-6 top-1/2 -translate-y-1/2">
                  <Link 
                    to={`/careers/${job.id}`} 
                    className="flex items-center text-amber-600 hover:text-amber-700 group"
                  >
                    View job
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default CareerPage;