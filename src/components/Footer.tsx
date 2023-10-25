import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 py-8">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:pt-3 sm:px-4 lg:px-12 lg:justify-start lg:gap-44">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-bold mt-4 md:mt-0">DataStructure</h1>
          <p className="text-gray-400 mt-2">
            A React app to learn data structures and algorithms.
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-12 mt-2 md:mt-0 lg:gap-20">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Links</h2>
            <ul className="mt-2 text-sm flex flex-col gap-4">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0 pr-2">
            <h2 className="text-lg font-bold">Social</h2>
            <ul className="mt-2 text-sm flex flex-col gap-4">
              <li>
                <a
                  href="https://twitter.com/datastructureapp"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                >
                  <i className="fa fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Debangan202Ok/Data-Structure"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                >
                  <i className="fa fa-github"></i> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/datastructureapp"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                >
                  <i className="fa fa-discord"></i> Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 mb-2 lg:mt-16">
        <p className="text-gray-400 text-xs">
          Copyright © 2023 DataStructure. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
