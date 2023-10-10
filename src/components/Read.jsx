import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
// import Module1 from "./Module1";

export default function Read() {
    const arr = [{ module: 'Module:1', id: crypto.randomUUID(), in: 1 }, { module: 'Module:2', id: crypto.randomUUID(), in: 2 }];
    return (
        <>
            <Helmet>
                <title>Data Structure -Read</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Explore the fundamental concepts of data structures and their importance in computer science. Learn about arrays, linked lists, stacks, queues, trees, graphs, and more. Understand how data structures enable efficient storage, retrieval, and manipulation of data, and how they form the building blocks of algorithms and software development. Gain insights into selecting the right data structure for specific tasks and optimizing code performance. Start your journey to master the core foundations of data structures." />
            </Helmet>
            <div className="pt-[10vh] flex flex-col md:flex-row items-center md:justify-evenly">
                <nav className="hidden md:block w-[20vw] h-[80vh] rounded-xl bg-slate-50 shadow-xl inset-3 border-2 border-[#6a6a6a]">
                    <ul className="flex flex-col">
                        <li className="bg-sky-200 p-3 border-b-2 border-[#6a6a6a] rounded-t-xl font-semibold">
                            INDEX
                        </li>
                        {arr.map(e => {
                            return <li className="bg-sky-100 p-3 border-b-2 border-[#6a6a6a]" key={e.id}><Link to={`/read/module${e.in}`}>{e.module}</Link></li>
                        })}
                    </ul>
                </nav>
                <Outlet />
                <div className="w-[90vw] my-2 justify-between md:hidden flex">
                    <Link to={'/read/module1'} className="inline-flex px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                        Previous
                    </Link>
                    <Link to={'/read/module2'} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                        <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </>
    )
}
