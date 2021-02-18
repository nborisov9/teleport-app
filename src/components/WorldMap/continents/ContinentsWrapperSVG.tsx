import React from 'react';

interface ContinentsWrapperSVGProps {
  children: React.ReactNode;
}

const ContinentsWrapperSVG: React.FC<ContinentsWrapperSVGProps> = ({ children }) => (
  <svg id="world" xmlns="http://www.w3.org/2000/svg" viewBox="32.3 44.8 897.1 455.3" height="500">
    {children}
  </svg>
);

export default ContinentsWrapperSVG;
