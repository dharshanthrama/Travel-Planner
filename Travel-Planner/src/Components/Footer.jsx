import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#004080] text-gray-300 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start space-y-6 lg:space-y-0">
        {/* Left Section: Social Media Links */}
        <div className="flex flex-col space-y-4">
          <p className="font-semibold text-lg">Follow us on:</p>
          <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="flex flex-col space-y-4">
          <p className="font-semibold text-lg">Quick Links</p>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition">
                Our Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white transition">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Contact Info */}
        <div className="flex flex-col space-y-4">
          <p className="font-semibold text-lg">Contact Us</p>
          <p>Email: support@exploreease.com</p>
          <p>Phone: +1 (800) 123-4567</p>
          <p>Address: 123 ExploreEase Way, Adventure City, Earth</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4">
        <p>&copy; 2024 ExploreEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
