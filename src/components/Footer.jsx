import React from "react";

const Footer = () => {
  return (
    <footer class="bg-gray-900 text-white px-4 py-8">
      <div class="flex flex-col justify-between gap-8 md:flex-row md:pt-3 sm:px-4 lg:px-12 lg:justify-start lg:gap-44">
        <div class="mb-4 md:mb-0">
          <h1 class="text-3xl font-bold mt-4 md:mt-0">DataStructure</h1>
          <p class="text-gray-400 mt-2">
            A React app to learn data structures and algorithms.
          </p>
        </div>
        <div class="flex flex-row flex-wrap gap-12 mt-2 md:mt-0 lg:gap-20">
          <div class="mb-4 md:mb-0">
            <h2 class="text-lg font-bold">Links</h2>
            <ul class="mt-2 text-sm flex flex-col gap-4">
              <li>
                <a href="/" class="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" class="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" class="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/contact" class="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div class="mb-4 md:mb-0 pr-2">
            <h2 class="text-lg font-bold">Social</h2>
            <ul class="mt-2 text-sm flex flex-col gap-4">
              <li>
                <a
                  href="https://twitter.com/datastructureapp"
                  class="text-gray-400 hover:text-white"
                  target="_blank"
                >
                  <i class="fa fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Debangan202Ok/Data-Structure"
                  class="text-gray-400 hover:text-white"
                  target="_blank"
                >
                  <i class="fa fa-github"></i> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/datastructureapp"
                  class="text-gray-400 hover:text-white"
                  target="_blank"
                >
                  <i class="fa fa-discord"></i> Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="text-center mt-8 mb-2 lg:mt-16">
        <p class="text-gray-400 text-xs">
          Copyright ©2023 DataStructure. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
