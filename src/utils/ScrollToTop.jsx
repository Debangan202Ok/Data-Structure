import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const buttonStyle = {
    width: " 45px",
    height: "45px",
    display: "flex",
    alignitems: "center",
    justifycontent: "center",
    position: "fixed",
    border: "none",
    bottom: "20px",
    right: "20px",
    padding: "13px 5px 5px 13px",
    background: "linear-gradient(#e0f2fe, #39d7ef,#4474ea)",
    borderRadius: "50%",


  };




  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };


    window.addEventListener("scroll", toggleVisibility);


    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <button style={buttonStyle} className="scrollToTopButton" onClick={scrollToTop}>
          <svg height="1.2em" class="arrow" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 
         32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 
         342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg>
        </button>


      )}
    </>
  );
};



export default ScrollToTop;
