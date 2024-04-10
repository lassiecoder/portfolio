"use client";

import React from 'react';
import Typewriter from 'typewriter-effect';



const ContactForm = () => {

  return (
    <div className="max-w-7xl mx-auto px-4 mt-44 ">
        <div className="px-4">
            <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 ">
              {/* Ways to Connect with Me */}
              <div className="flex header-container">
          <div className="mr-4 title-box">
            <p className="text">I'm open to </p>
          </div>
          <div className="subtitle-box">
            <p className="text">
              <Typewriter
                options={{
                  strings: ['Opportunities', 'Suggestions', 'Collaboration', 'Feedback', 'Networking'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </div>
        </div>
              </h2>
        </div>
        <h3 className="md:text-xl text-sm lg:text-xl font-extralight text-left relative z-20 text-gray-400 max-w-7xl pb-8 lg:mb-4 pl-4">
          Thank you for your interest in getting in touch with me. I&apos;m eager to explore new opportunities, receive feedback or suggestions, collaborate on projects, and expand my network.
          <br/><br/>
          For any specific inquiries or comments, please feel free to reach out to me directly at<a className=" bg-gradient-to-r from-purple-600 to-gray-400 text-transparent bg-clip-text font-medium ml-2" href='mailto:sharmapriyanka84510@gmail.com' target='_blank'>sharmapriyanka84510@gmail.com</a>. I make every effort to respond to all messages within 24 hours, although response times may be slightly longer during peak periods.
          <br/><br/>
          Additionally, if you prefer to connect via social media, you can find me on Instagram at<a className="bg-gradient-to-r from-pink-500 to-gray-400 text-transparent bg-clip-text font-medium ml-2" href='https://instagram.com/lassiecoder' target='_blank'>https://instagram.com/lassiecoder</a>.
        </h3>
        <div className="text-sm pt-60 sm:mt-20 font-extralight text-center relative z-20 text-gray-400 max-w-7xl pb-8">
          Always be caffeinated! | © Priyanka Sharma (lassiecoder)
        </div>
    </div>
  );
};

export default ContactForm;
