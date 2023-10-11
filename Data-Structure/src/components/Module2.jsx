export default function Module2() {
    return (
      <div className="w-full md:w-3/4 border-2 border-[#ff6633] h-[80vh] p-4 md:p-2 bg-slate-50 rounded-xl overflow-y-scroll">
        <h1 className="text-xl md:text-2xl text-justify mb-4">
          Real-Life Applications of Data Structures
        </h1>
        <ol className="list-disc text-lg text-justify pl-6 md:pl-8 text-[#6a6a6a]">
          <li>
            <strong>Databases:</strong> Data structures like B-trees and hash tables are fundamental components of databases. They enable efficient storage and retrieval of data, indexing, and querying.
          </li>
          <li>
            <strong>File Systems:</strong> File systems utilize data structures such as directory trees, linked lists, and hash tables to organize and manage files, directories, and metadata.
          </li>
          <li>
            <strong>Web Browsers:</strong> Data structures like caches (e.g., LRU cache) are used to store recently visited web pages, improving the performance of web browsers by reducing network requests.
          </li>
          <li>
            <strong>Social Networks:</strong> Graph data structures are used to represent social networks, with users as nodes and connections as edges. They facilitate friend suggestions, finding mutual connections, and identifying network patterns.
          </li>
          <li>
            <strong>Routing Algorithms:</strong> Data structures like graphs and trees are utilized in routing algorithms for network communication, determining the shortest or fastest path between network nodes.
          </li>
          <li>
            <strong>Image Processing:</strong> Data structures like matrices and multidimensional arrays are used in image processing algorithms for storing and manipulating pixel data, performing operations such as filtering, transformation, and compression.
          </li>
          <li>
            <strong>Compiler Design:</strong> Data structures like symbol tables, parse trees, and abstract syntax trees are used in compiler design to analyze and transform source code during the compilation process.
          </li>
          <li>
            <strong>Artificial Intelligence:</strong> Data structures play a crucial role in various AI applications. For instance, decision trees are used in decision-making algorithms, and priority queues are utilized in search algorithms like A*.
          </li>
          <li>
            <strong>Geographic Information Systems (GIS):</strong> GIS applications employ data structures such as spatial trees (e.g., Quadtree, R-tree) to efficiently store and query spatial data, enabling operations like map overlays and spatial analysis.
          </li>
          <li>
            <strong>Financial Systems:</strong> Data structures are utilized in financial systems for storing and analyzing large volumes of financial data, facilitating tasks like portfolio management, risk assessment, and algorithmic trading.
          </li>
        </ol>
      </div>
    );
  }
  