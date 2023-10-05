import { Helmet } from "react-helmet";
import Stack from "../components/Stack.jsx";
import SideNavbar from "./SideNavbar.jsx";

export default function Lab() {
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
      <div className="flex flex-row mt-[46px]">
        <SideNavbar />
        <Stack />
      </div>
    </>
  );
}
