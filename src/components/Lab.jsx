import { Helmet } from "react-helmet";
import { useMemo, useState } from "react";
import Stack from "./operations/Stack.jsx";
import Queue from "./operations/Queue.jsx";
import LinkedList from "./operations/LinkedList.jsx";
import Tree from "./operations/Tree.jsx";
import SideNavbar from "./SideNavbar.jsx";
import Graph from './operations/Graph.jsx'

export default function Lab() {
  const [selectedOption, setSelectedOption] = useState(null);

  const optionComponents = useMemo(
    () => ({
      stack: <Stack />,
      queue: <Queue />,
      linked_list: <LinkedList />,
      tree: <Tree />,
      graph: <Graph />,
    }),
    []
  )
  return (
    <>
      <Helmet>
        <title>Data Structure -lab</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Discover the real-life applications of data structures and their significance in various domains. Explore how data structures such as arrays, linked lists, trees, graphs, and hash tables are used in designing efficient algorithms, optimizing database systems, building search engines, developing social networks, and solving complex computational problems. Learn how mastering data structures can enhance software performance, improve memory utilization, and enable robust data management."
        />
      </Helmet>




      <div className="flex flex-row">
        <SideNavbar
          selectedOption={selectedOption}
          onSelectOption={setSelectedOption} />
        <div>
          {optionComponents[selectedOption] || (
            <div className="md:ml-[10px] mt-[80px] box-border flex flex-col justify-center items-center lg:mt-[10vh]">
            <div className="h-[40vh] w-full lg:w-[80%] md:h-[80vh] flex flex-col items-center">
              <h1 className="text-xl md:text-4xl text-left font-bold mt-3 mb-6">
                Please select an option from sidebar
              </h1>
            </div>
          </div>
          )}
        </div>
      </div>
    
    </>
  );
}
