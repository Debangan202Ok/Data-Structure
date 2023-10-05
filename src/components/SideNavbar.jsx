import { Card, Typography, List, ListItem } from "@material-tailwind/react";

export default function DefaultSidebar() {
  const toggleSidebar = () => {
    const sidebar = document.querySelector(".side-bar"); // Escape the colon in the class name
    sidebar.classList.toggle("hidden");
  };

  return (
    <div className="fixed z-50">
      <div
        id="sidebarToggle"
        className="md:hidden p-2 bg-gray-800 text-white cursor-pointer"
        onClick={toggleSidebar}
      >
        <button id="hamburger-menu" class="w-10 h-10 p-2 focus:outline-none">
          <div class="w-6 h-px bg-white mb-1"></div>
          <div class="w-6 h-px bg-white mb-1"></div>
          <div class="w-6 h-px bg-white"></div>
        </button>
      </div>
      <Card className="side-bar hidden md:block h-[calc(100vh-48px)]  rounded w-[18rem] p-4 shadow-xl bg-[#f7f7f7] shadow-blue-gray-900/5">
        <div className="mb-2 p-2">
          <Typography variant="h5" color="blue-gray">
            Data Structures Lab
          </Typography>
        </div>
        <List>
          <ListItem>Stack</ListItem>
          <ListItem>Queue</ListItem>
          <ListItem>Linekd List</ListItem>
          <ListItem>Tree</ListItem>
          <ListItem>Graph</ListItem>
        </List>
      </Card>
    </div>
  );
}
