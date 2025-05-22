import React from 'react';
import { ExperienceItem } from '../types';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div className="w-full mt-16">
      <h2 className="text-2xl font-bold text-gray-100 mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="relative bg-gray-900 rounded-xl p-6 mb-6 transform hover:scale-[1.01] transition-all duration-200 border border-gray-700 hover:border-blue-600 shadow-md hover:shadow-lg"
            style={{
              backgroundImage: 'linear-gradient(145deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.15) 100%)',
              backdropFilter: 'blur(5px)',
            }}
          >
            <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-white">{exp.title.charAt(0)}</span>
            </div>
            <div className="relative">
              <h3 className="text-xl font-bold mb-2 text-white">
                {exp.title}
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <p className="text-base text-gray-300">
                  {exp.company}
                </p>
                <span className="px-1.5 py-0.5 bg-blue-600 rounded-full text-xs text-white">
                  {exp.date}
                </span>
              </div>
              <div className="space-y-2">
                {exp.description.map((desc, descIndex) => (
                  <p key={descIndex} className="text-sm text-gray-400">
                    <span className="text-blue-400">•</span> {desc}
                  </p>
                ))}
              </div>
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Visit Company Website
                  <svg className="ml-2 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
