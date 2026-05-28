import React from "react";

const Whowework = () => {
  return (
    <div className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
          
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How we work
          </h1>

          <p className="text-gray-600 mb-6">
            We are a services oriented team with several years of experience
          </p>

          <div className="space-y-6">

            <div className="border-l-4 border-red-500 pl-4">
              <p className="text-gray-700">
                We deliver strategic industry solutions through understanding your business needs and decision making criteria
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <p className="text-gray-700">
                Our exceptional customer experience team keeps your business up running.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <p className="text-gray-700">
                We add value to your business; with our exceptional services delivery mindset.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Whowework;