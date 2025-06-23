import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const JobApplicationForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState({ type: '', message: '' });
  const [resumeFile, setResumeFile] = useState(null);

  const positions = ["Software Developer", "Project Manager", "UI/UX Designer", "Civil Engineer", "Architect", "Construction Manager"];
  const referralSources = ["LinkedIn", "Company Website", "Employee Referral", "Job Board", "Social Media", "Other"];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setFormMessage({ type: '', message: '' });
    
    // Create FormData object to handle file uploads
    const formData = new FormData();
    
    // Add all form fields to FormData
    Object.keys(data).forEach(key => {
      if (key !== 'resume') {
        formData.append(key, data[key]);
      }
    });
    
    // Add resume file if it exists
    if (resumeFile) {
      formData.append('resume', resumeFile);
    }
    
    try {
      const response = await fetch('https://api.nexxantconsult.com/job-applications', {
        method: 'POST',
        body: formData,
        // Don't set Content-Type header - FormData will set it automatically with boundary
      });
      
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }
      
      const result = await response.json();
      
      // Reset form and show success message
      reset();
      setResumeFile(null);
      setFormMessage({
        type: 'success',
        message: 'Your application has been submitted successfully. We will contact you shortly.'
      });
    } catch (error) {
      console.error('Submission error:', error);
      setFormMessage({
        type: 'error',
        message: 'There was a problem submitting your application. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
    }
  };

  // Generate year options for birth date - from 18 years ago to 70 years ago
  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear - 18; year >= currentYear - 70; year--) {
      years.push(year);
    }
    return years;
  };

  return (
    <>
    <Navbar />
   
    <div className="bg-cream-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Job Application</h1>
        <p className="text-gray-600 mb-8">Please complete the form below to apply for a position with us.</p>
        
        {formMessage.message && (
          <div className={`mb-6 p-4 rounded ${
            formMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
            {formMessage.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Full Name</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  {...register('firstName', { required: 'First name is required' })}
                  className={`w-full p-2 border rounded-md ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
              </div>
              
              <div>
                <label htmlFor="middleName" className="block text-sm font-medium text-gray-700 mb-1">Middle Name</label>
                <input
                  id="middleName"
                  type="text"
                  {...register('middleName')}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  {...register('lastName', { required: 'Last name is required' })}
                  className={`w-full p-2 border rounded-md ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
              </div>
            </div>
          </div>
          
          {/* Birth Date Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Birth Date</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="birthMonth" className="block text-sm font-medium text-gray-700 mb-1">Month</label>
                <select
                  id="birthMonth"
                  {...register('birthMonth', { required: 'Month is required' })}
                  className={`w-full p-2 border rounded-md ${errors.birthMonth ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Please select a month</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                {errors.birthMonth && <p className="mt-1 text-sm text-red-600">{errors.birthMonth.message}</p>}
              </div>
              
              <div>
                <label htmlFor="birthDay" className="block text-sm font-medium text-gray-700 mb-1">Day</label>
                <select
                  id="birthDay"
                  {...register('birthDay', { required: 'Day is required' })}
                  className={`w-full p-2 border rounded-md ${errors.birthDay ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Please select a day</option>
                  {[...Array(31)].map((_, i) => (
                    <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                {errors.birthDay && <p className="mt-1 text-sm text-red-600">{errors.birthDay.message}</p>}
              </div>
              
              <div>
                <label htmlFor="birthYear" className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                <select
                  id="birthYear"
                  {...register('birthYear', { required: 'Year is required' })}
                  className={`w-full p-2 border rounded-md ${errors.birthYear ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Please select a year</option>
                  {generateYearOptions().map(year => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                {errors.birthYear && <p className="mt-1 text-sm text-red-600">{errors.birthYear.message}</p>}
              </div>
            </div>
          </div>
          
          {/* Current Address Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Current Address</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                <input
                  id="streetAddress"
                  type="text"
                  {...register('streetAddress', { required: 'Street address is required' })}
                  className={`w-full p-2 border rounded-md ${errors.streetAddress ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.streetAddress && <p className="mt-1 text-sm text-red-600">{errors.streetAddress.message}</p>}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    id="city"
                    type="text"
                    {...register('city', { required: 'City is required' })}
                    className={`w-full p-2 border rounded-md ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="stateProvince" className="block text-sm font-medium text-gray-700 mb-1">State/Province</label>
                  <input
                    id="stateProvince"
                    type="text"
                    {...register('stateProvince', { required: 'State/Province is required' })}
                    className={`w-full p-2 border rounded-md ${errors.stateProvince ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.stateProvince && <p className="mt-1 text-sm text-red-600">{errors.stateProvince.message}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">Postal/Zip Code</label>
                <input
                  id="postalCode"
                  type="text"
                  {...register('postalCode', { required: 'Postal/Zip code is required' })}
                  className={`w-full p-2 border rounded-md ${errors.postalCode ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.postalCode && <p className="mt-1 text-sm text-red-600">{errors.postalCode.message}</p>}
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  id="email"
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className={`w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="example@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone', { 
                    required: 'Phone number is required',
                    pattern: {
                      value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                      message: 'Invalid phone number format'
                    }
                  })}
                  className={`w-full p-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="(000) 000-0000"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
              </div>
            </div>
          </div>
          
          {/* LinkedIn */}
          <div>
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
            <input
              id="linkedin"
              type="url"
              {...register('linkedin', {
                pattern: {
                  value: /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[\w-]+\/?$/,
                  message: 'Please enter a valid LinkedIn profile URL'
                }
              })}
              className={`w-full p-2 border rounded-md ${errors.linkedin ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="https://linkedin.com/in/yourprofile"
            />
            {errors.linkedin && <p className="mt-1 text-sm text-red-600">{errors.linkedin.message}</p>}
          </div>
          
          {/* Position and Referral */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Position Applied</label>
              <select
                id="position"
                {...register('position', { required: 'Position is required' })}
                className={`w-full p-2 border rounded-md ${errors.position ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Please Select</option>
                {positions.map(position => (
                  <option key={position} value={position}>
                    {position}
                  </option>
                ))}
              </select>
              {errors.position && <p className="mt-1 text-sm text-red-600">{errors.position.message}</p>}
            </div>
            
            <div>
              <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us</label>
              <select
                id="referral"
                {...register('referral')}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Please Select</option>
                {referralSources.map(source => (
                  <option key={source} value={source}>
                    {source}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Available Start Date */}
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">Available Start Date</label>
            <input
              id="startDate"
              type="date"
              {...register('startDate', { required: 'Start date is required' })}
              className={`w-full p-2 border rounded-md ${errors.startDate ? 'border-red-500' : 'border-gray-300'}`}
              min={new Date().toISOString().split('T')[0]} // Today's date
            />
            {errors.startDate && <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>}
          </div>
          
          {/* Resume Upload */}
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Upload Your Resume</label>
            <div 
              className={`border-2 border-dashed p-4 rounded-md text-center cursor-pointer hover:border-yellow-600 ${
                errors.resume ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                {...register('resume', { 
                  required: 'Resume is required',
                  validate: {
                    fileType: value => {
                      if (!value[0]) return true;
                      const fileType = value[0].type;
                      return (
                        fileType === 'application/pdf' || 
                        fileType === 'application/msword' || 
                        fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                      ) || 'File must be PDF, DOC, or DOCX';
                    },
                    fileSize: value => {
                      if (!value[0]) return true;
                      return value[0].size <= 5000000 || 'File must be under 5MB';
                    }
                  },
                  onChange: handleFileChange
                })}
              />
              <label htmlFor="resume" className="cursor-pointer">
                <div className="flex flex-col items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                  </svg>
                  <span className="mt-2 text-gray-600">Browse Files</span>
                  <span className="text-xs text-gray-500 mt-1">Drag and drop files here</span>
                </div>
              </label>
              {resumeFile && (
                <div className="mt-2 text-sm text-gray-600">
                  Selected: {resumeFile.name}
                </div>
              )}
            </div>
            <p className="mt-1 text-xs text-gray-500">Accepted formats: PDF, DOC, DOCX. Maximum size: 5MB</p>
            {errors.resume && <p className="mt-1 text-sm text-red-600">{errors.resume.message}</p>}
          </div>
          
          {/* Cover Letter */}
          <div>
            <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
            <textarea
              id="coverLetter"
              rows={6}
              {...register('coverLetter')}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Tell us why you're interested in this position and what makes you a good fit."
            />
          </div>
          
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#C4942D] hover:bg-yellow-700 text-white py-3 px-6 rounded-md font-medium transition duration-200 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Apply'}
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default JobApplicationForm;