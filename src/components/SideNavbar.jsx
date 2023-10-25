import { Card, Typography, List, ListItem } from "@material-tailwind/react";

export default function DefaultSidebar({ selectedOption, onSelectOption }) {
  const toggleSidebar = () => {
    const sidebar = document.querySelector(".side-bar");
    sidebar.classList.toggle("hidden");
  };

  return (
    <div className="z-20 mt-[80px] md:mt-[90px]">
      <div
        id="sidebarToggle"
        className="fixed md:hidden p-1 bg-gray-700 text-white cursor-pointer rounded-lg ml-[5%] mt-[10px] z-50"
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
      <Card className="side-bar fixed hidden h-[80vh] ml-[3vw] w-[93vw] sm:relative md:block sm:w-[18rem] p-4 shadow-xl bg-[#f7f7f7] shadow-blue-gray-900/5">
        <div className="ml-[calc(54px)] mb-[10px] p-2 md:ml-[0]">
          <Typography variant="h5" color="blue-gray">
            Data Structures
          </Typography>
        </div>
        <List>
          <ListItem>
            <button
              onClick={() => onSelectOption("stack")}>
              Stack
            </button>
          </ListItem>
          <ListItem>
            <button
              onClick={() => onSelectOption("queue")}>
              Queue
            </button>
          </ListItem>
          <ListItem>
            <button
              onClick={() => onSelectOption("linked_list")}>
              Linked List
            </button>
          </ListItem>
          <ListItem>
            <button
              onClick={() => onSelectOption("tree")}>
              Tree
            </button>
          </ListItem>
          <ListItem>
            <button
              onClick={() => onSelectOption("graph")}>
              Graph
            </button>
          </ListItem>

        </List>
      </Card>
    </div>
  );
}
