import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const JobApplicationContact = () => {
  return (
    <>
      <Navbar />

      <div className="bg-white py-16 border-t border-gray-200 mt-4">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">Get in Touch</h1>
          <p className="text-gray-600 text-lg">
            If you have questions or need assistance, feel free to reach out.
          </p>

          <div className="space-y-3">
            <p className="text-gray-700">
              <strong>Email:</strong>{' '}
              <a
                href="mailto:jobrecruitingfirm@gmail.com"
                className="text-blue-600 underline hover:text-blue-800"
              >
                info@nexantgroup.com
              </a>
            </p>

            <p className="text-gray-700">
              <strong>Phone:</strong>{' '}
              <a
                href="tel:+234 902 926 9226"
                className="text-blue-600 underline hover:text-blue-800"
              >
                +234 902 926 9226
              </a>
            </p>

            <div className="mt-6">
              <a
                href="https://wa.me/2349029269226"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 text-lg font-semibold"
              >
                <FaWhatsapp className="text-2xl" />
                Chat with us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default JobApplicationContact;
