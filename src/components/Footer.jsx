
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 p-3 z-50 text-center text-xs text-gray-500 dark:text-gray-600 bg-transparent">
      <div className="flex justify-center items-center gap-4 mb-1">
        <a
          href="https://www.linkedin.com/in/shvbhi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          title="LinkedIn Profile"
          className="hover:text-accent-light dark:hover:text-accent-dark transition-colors"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/shvbhii/Quantum-Rush.git" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
          title="GitHub Repository"
          className="hover:text-accent-light dark:hover:text-accent-dark transition-colors"
        >
          <FaGithub size={20} />
        </a>
      </div>
      <p>Quantum Rush | Created By Shubhi Sharma</p>
    </footer>
  );
}

export default React.memo(Footer);