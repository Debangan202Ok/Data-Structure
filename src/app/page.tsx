import React from 'react'
import HomeCards from '@/components/HomeCards'
import { Pts, Btn } from '@/Data/pagedata'

const DataAttr = [
  {
    link1: "/labs",
    link2: "/read/module1",
    headQ: Pts.ht1,
    datas: Pts.pt1,
    btnC: "bg-[#ff6633]",
    Btns1: Btn.btn1,
    Btns2: Btn.btn2,
    btnPos: "justify-between",
    Imgs: "./images/R.png",
  },
  {
    link1: "https://en.wikipedia.org/wiki/Data_structure",
    link2: "",
    headQ: Pts.ht2,
    datas: Pts.pt2,
    btnC: "bg-[#F478e6]",
    Btns1: Btn.btn3,
    btnPos: "justify-end",
    visibilty1: "",
    visibilty2: "hidden",
    Imgs: "./images/data.png",
  },
  {
    link1: "",
    link2: "",
    headQ: Pts.ht3,
    datas: Pts.pt3,
    btnPos: "hidden",
    Imgs: "./images/data1.png",
  }
]


function Home() {
  return (
    <div className='bg-[#E0F2FE] dark:bg-[#020817]'>
      {
        DataAttr.map((data, index) => (
          <HomeCards
            key={index}
            link1={data.link1}
            link2={data.link2}
            headQ={data.headQ}
            datas={data.datas}
            btnC={data.btnC}
            Btns1={data.Btns1}
            Btns2={data.Btns2}
            btnPos={data.btnPos}
            visibilty1={data.visibilty1}
            visibilty2={data.visibilty2}
            Imgs={data.Imgs}
          />
        ))
      }
    </div>
  )
}

export default Home