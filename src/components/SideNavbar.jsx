import { Card, Typography, List, ListItem } from "@material-tailwind/react";

export default function DefaultSidebar() {
  const toggleSidebar = () => {
    const sidebar = document.querySelector(".side-bar");
    sidebar.classList.toggle("translate-x-[-100%]");
  };

  return (
    <div className="fixed z-20">
      <div
        id="sidebarToggle"
        className="fixed md:hidden p-2 bg-gray-700 text-white cursor-pointer rounded-lg m-3 ml-[calc(5%+10px)] z-50"
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
      <Card className="side-bar translate-x-[-100%] md:translate-x-[0%] md:block h-[calc(100vh-48px)] rounded-none w-[18rem] p-4 shadow-xl bg-[#f7f7f7] shadow-blue-gray-900/5">
        <div className="ml-[calc(5vw+56px)] mb-[10px] p-2 md:ml-[0]">
          <Typography variant="h5" color="blue-gray">
            Data Structures
          </Typography>
        </div>
        <List>
          <ListItem>Stack</ListItem>
          <ListItem>Queue</ListItem>
          <ListItem>Linked List</ListItem>
          <ListItem>Tree</ListItem>
          <ListItem>Graph</ListItem>
        </List>
      </Card>
    </div>
  );
}
