
export default function Module2() {
    return (
        <div className="w-[90vw] border-2 border-[#ff6633] md:w-[75vw] h-[80vh] p-2 md:bg-slate-50 rounded-xl overflow-y-scroll">
            <h1 className="text-xl md:text-2xl text-justify">Data structures have numerous real-life applications across various domains. Here are some examples:</h1>
            <ol className="list-disc text-justify text-sm md:text-lg px-5 text-[#6a6a6a]">
                <li>Databases: Data structures like B-trees and hash tables are fundamental components of databases. They enable efficient storage and retrieval of data, indexing, and querying.</li>
                <li>File Systems: File systems utilize data structures such as directory trees, linked lists, and hash tables to organize and manage files, directories, and metadata.</li>
                <li>Web Browsers: Data structures like caches (e.g., LRU cache) are used to store recently visited web pages, improving the performance of web browsers by reducing network requests</li>
                <li>Social Networks: Graph data structures are used to represent social networks, with users as nodes and connections as edges. They facilitate friend suggestions, finding mutual connections, and identifying network patterns.</li>
                <li>Routing Algorithms: Data structures like graphs and trees are utilized in routing algorithms for network communication, determining the shortest or fastest path between network nodes.</li>
                <li>Image Processing: Data structures like matrices and multidimensional arrays are used in image processing algorithms for storing and manipulating pixel data, performing operations such as filtering, transformation, and compression.</li>
                <li>Compiler Design: Data structures like symbol tables, parse trees, and abstract syntax trees are used in compiler design to analyze and transform source code during the compilation process.</li>
                <li>Artificial Intelligence: Data structures play a crucial role in various AI applications. For instance, decision trees are used in decision-making algorithms, and priority queues are utilized in search algorithms like A*</li>
                <li>Geographic Information Systems (GIS): GIS applications employ data structures such as spatial trees (e.g., Quadtree, R-tree) to efficiently store and query spatial data, enabling operations like map overlays and spatial analysis.</li>
                <li>Financial Systems: Data structures are utilized in financial systems for storing and analyzing large volumes of financial data, facilitating tasks like portfolio management, risk assessment, and algorithmic trading.</li>
            </ol>
        </div>
    )
}
