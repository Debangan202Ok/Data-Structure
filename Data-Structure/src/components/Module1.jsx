import { Helmet } from "react-helmet";

export default function Module1() {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <meta name="description" content="Discover the real-life applications of data structures and their significance in various domains. Explore how data structures such as arrays, linked lists, trees, graphs, and hash tables are used in designing efficient algorithms, optimizing database systems, building search engines, developing social networks, and solving complex computational problems. Learn how mastering data structures can enhance software performance, improve memory utilization, and enable robust data management." />
            </Helmet>
            <div className="w-[90vw] border-2 border-[#ff6633] md:w-[75vw] h-[80vh] p-2 md:bg-slate-50 rounded-xl overflow-y-scroll">
                <h1 className="text-xl md:text-2xl">What is Data Structure?</h1>
                <p className="text-justify text-[#6a6a6a]">A data structure is a way of organizing and storing data in a computer so that it can be accessed and manipulated efficiently. It provides a set of operations for performing common tasks on the data, such as inserting, deleting, searching, and sorting.</p>
                <h1 className="my-2 text-xl md:text-2xl text-justify">Type Of Data Structures:</h1>
                <ol className="list-decimal text-justify px-5 text-[#6a6a6a]">
                    <li>Primitive Data Structures: These are basic data structures provided by programming languages, such as integers, floating-point numbers, characters, and booleans.</li>
                    <li>Abstract Data Types (ADTs): These are more complex data structures that are built using primitive data types. ADTs define a set of operations and the behavior of those operations but hide the implementation details. Some commonly used ADTs include lists, stacks, queues, trees, graphs, and hash tables.</li>
                </ol>
                <h1 className="text-xl md:text-2xl">Here are a few examples of data structures:</h1>
                <ul className="list-disc my-2 text-justify px-5 text-[#6a6a6a]">
                    <li>Arrays: A collection of elements stored at contiguous memory locations.</li>
                    <li>Linked Lists: A sequence of nodes where each node contains data and a reference to the next node.</li>
                    <li>Stacks: A Last-In-First-Out (LIFO) data structure where elements are added and removed from the same end.</li>
                    <li>Queues: A First-In-First-Out (FIFO) data structure where elements are added at one end and removed from the other end.</li>
                    <li>Trees: A hierarchical data structure with nodes that have parent-child relationships.Graphs: A set of vertices (nodes) connected by edges.</li>
                    <li>Hash Tables: A data structure that maps keys to values, allowing for efficient retrieval based on the key.</li>
                </ul>
                <p>Different data structures have different properties and are suited for different use cases. Choosing the appropriate data structure is important for designing efficient algorithms and optimizing the performance of software applications.</p>
            </div>
        </>
    )
}
