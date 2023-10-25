'use client'
import { Card, Typography, List, ListItem } from "@material-tailwind/react";
import Link from "next/link";

export default function DefaultSidebar() {
const toggleSidebar = () => {
    const sidebar = document.querySelector(".side-bar");
    if (sidebar) {
        sidebar.classList.toggle("hidden");
    }
};

  return (
    <div className="z-20 mt-[80px] md:mt-[90px]">
      <div
        id="sidebarToggle"
        className="fixed p-1 bg-gray-700 text-white cursor-pointer rounded-lg ml-[5%] mt-[10px] z-50"
        onClick={toggleSidebar}
      >
        <button
          id="hamburger-menu"
          className="w-10 h-10 p-2 focus:outline-none"
        >
          <div className="w-6 h-px bg-white mb-1"></div>
          <div className="w-6 h-px bg-white mb-1"></div>
          <div className="w-6 h-px bg-white"></div>
        </button>
      </div>
      <Card className="side-bar fixed hidden h-[80vh] ml-[3vw] w-[93vw] dark:border-2   sm:w-[18rem] p-4 shadow-xl dark:bg-[#0A0A0A] bg-[#f7f7f7] shadow-blue-gray-900/5">
        <div className="ml-[calc(54px)] mb-[10px] p-2 md:pl-4 ">
          <Typography variant="h5" color="blue-gray" className="dark:text-white">
            Data Structures
          </Typography>
        </div>
        <List className="dark:text-white">
          <Link href={`/labs`}>
          <ListItem>Stack</ListItem>
          </Link>
          <Link href={`/labs/queue`}>
          <ListItem>Queue</ListItem>
          </Link>
          <ListItem>Linked List</ListItem>
          <ListItem>Tree</ListItem>
          <ListItem>Graph</ListItem>
        </List>
      </Card>
    </div>
  );
}
