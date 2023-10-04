import { Pts, Btn } from "/pagedata.js";
import Body from "../components/Body.jsx";
import { Helmet } from "react-helmet";

export default function Home() {
  const seoKeywords = "data structures, algorithms, programming, optimization";
  const wikiClick = () => {
    window.open("https://en.wikipedia.org/wiki/Data_structure", "_blank");
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Data Structure -Home</title>
        <meta
          property="og:url"
          content="https://data-structure-skill.netlify.app/"
        />
        <meta
          name="description"
          content="Explore comprehensive resources and tutorials on various data structures. Learn how to efficiently organize, store, and manipulate data with in-depth explanations, algorithms, and practical examples. Enhance your programming skills and optimize your code by mastering data structures for better performance and problem-solving."
        />
        <meta name="keywords" content={seoKeywords} />
      </Helmet>
      <Body
        link2={"/read/module1"}
        links={"labs/"}
        headQ={Pts.ht1}
        datas={Pts.pt1}
        btnC="bg-[#ff6633]"
        Imgs={"../../images/R.png"}
        Btns1={Btn.btn1}
        Btns2={Btn.btn2}
        btnPos="justify-between"
      />
      <Body
        id="sec2"
        pgLink={wikiClick}
        headQ={Pts.ht2}
        datas={Pts.pt2}
        btnC="bg-[#F478e6]"
        Imgs={"../../images/data.png"}
        Btns1={Btn.btn3}
        btn={Btn}
        btnPos="justify-end"
        visibilty2="hidden"
      />
      <Body
        headQ={Pts.ht3}
        datas={Pts.pt3}
        Imgs={"../../images/data1.png"}
        btnPos="hidden"
      />
    </div>
  );
}
