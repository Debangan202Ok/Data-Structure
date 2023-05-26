import { Pts,Btn } from '/pagedata.js'
import Body from '../components/Body.jsx'


export default function Home() {
    const wikiClick = () => {
        window.open("https://en.wikipedia.org/wiki/Data_structure",'_blank');
    }
    return (
        <div>
            <Body link2={'/read/module1'} links={'labs/'} headQ={Pts.ht1} datas={Pts.pt1} btnC="bg-[#ff6633]" Imgs={'../../images/R.png'} Btns1={Btn.btn1} Btns2={Btn.btn2} btnPos="justify-between"/>
            <Body id="sec2" pgLink={wikiClick} headQ={Pts.ht2} datas={Pts.pt2} btnC="bg-[#F478e6]" Imgs={'../../images/data.png'} Btns1={Btn.btn3} btn={Btn} pos1="order-2" pos2="order-1" btnPos="justify-end" visibilty2="hidden" />
            <Body headQ={Pts.ht3} datas={Pts.pt3} Imgs={'../../images/data1.png'} btnPos="hidden" />
        </div>
    )
}
