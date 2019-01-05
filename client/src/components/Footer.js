import React from 'react';

const Footer = () => {
  const d = new Date();
  return (
    <div className="footer text-center">
      <span className='footer-text'>©Rails Stack {d.getFullYear()}</span>
    </div>
  );
}

export default Footer;
