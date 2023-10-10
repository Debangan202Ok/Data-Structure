import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Body(props) {
  const seoKeywords = [
    "Data Structures",
    "Algorithms",
    "Programming",
    "Data Organization",
    "Efficiency",
    "Performance Optimization",
    "Memory Management",
    "Problem Solving",
    "Data Manipulation",
    "Algorithm Complexity",
    "Abstract Data Types",
    "Linked Lists",
    "Arrays",
    "Stacks",
    "Queues",
    "Trees",
    "Graphs",
    "Hash Tables",
    "Sorting Algorithms",
    "Searching Algorithms",
  ];

  return (
    <>
      <Helmet>
        <meta name="keywords" content={seoKeywords} />
      </Helmet>
      <div
        className="h-auto md:h-screen py-5 flex items-center pt-16 md:pt-0"
        onClick={props.pgLink}
      >
        <div className="flex flex-col md:h-auto lg:h-3/4 xl:h-3/5 p-2 md:flex-row justify-center md:justify-evenly w-11/12 mx-auto items-center bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="flex-col p-2 w-[95%] h-auto md:w-[65%] order-2">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.6, delay: 0.1 }}
              className="text-[20px] md:text-[30px] font-semibold text-black"
            >
              {props.headQ}
            </motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
              className="text-[#6a6a6a] text-[15px] my-3 text-justify md:text-[20px] "
            >
              {props.datas}
            </motion.p>
            <div className={`flex flex-col md:flex-row ${props.btnPos} `}>
              <Link to={props.links} className="">
                <button
                  className={`py-2 my-2 px-4 w-[100%] ${props.visibilty1} ${props.btnC} text-white rounded-md transition ease-in-out delay-150  hover:bg-[#6a6a6a] duration-300 text-[15px]`}
                >
                  {" "}
                  {props.Btns1}
                </button>
              </Link>
              <Link to={props.link2}>
                <button
                  className={`border-2 w-[100%] bg-black ${props.visibilty2} hover:bg-white hover:border-2 transition ease-in-out delay-150 duration-300 hover:border-black  hover:text-black text-white px-5 py-2 rounded-md text-[15px]`}
                >
                  {props.Btns2}
                </button>
              </Link>
            </div>
          </div>
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.6 }}
            className={`my-5 w-[80%] md:w-[20%] order-1 `}
            src={props.Imgs}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

Body.propTypes = {
  headQ: PropTypes.string,
  datas: PropTypes.string,
  Imgs: PropTypes.string,
  visibilty1: PropTypes.string,
  visibilty2: PropTypes.string,
  btnPos: PropTypes.string,
  Btns1: PropTypes.string,
  Btns2: PropTypes.string,
  btnC: PropTypes.string,
  pgLink: PropTypes.func,
  links: PropTypes.string,
  link2: PropTypes.string,
};
