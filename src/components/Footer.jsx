import React from "react";

const Footer = () => {
  return (
    <footer class="bg-gray-900 text-white px-4 py-8">
      <div class="flex flex-col justify-between md:flex-row">
        <div class="mb-4 md:mb-0">
          <h1 class="text-3xl font-bold mt-4">DataStructure</h1>
          <p class="text-gray-400 mt-2">
            A React app to learn data structures and algorithms.
          </p>
        </div>
        <div class="flex flex-row flex-wrap justify-between gap-3">
          <div class="mb-4 md:mb-0">
            <h2 class="text-lg font-bold">Links</h2>
            <ul class="mt-2">
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
            </ul>
          </div>
          <div class="mb-4 md:mb-0 pr-2">
            <h2 class="text-lg font-bold">Social</h2>
            <ul class="mt-2">
              <li>
                <a
                  href="https://twitter.com/datastructureapp"
                  class="text-gray-400 hover:text-white"
                >
                  <i class="fa fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/datastructureapp"
                  class="text-gray-400 hover:text-white"
                >
                  <i class="fa fa-github"></i> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/datastructureapp"
                  class="text-gray-400 hover:text-white"
                >
                  <i class="fa fa-discord"></i> Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-between mt-8">
        <p class="text-gray-400">
          Copyright © 2023 DataStructure. All rights reserved.
        </p>
        <a
          href="https://privacy.policy/"
          class="text-gray-400 hover:text-white"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
