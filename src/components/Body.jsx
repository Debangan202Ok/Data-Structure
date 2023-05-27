import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Body(props) {
    return (
        <div className='h-auto md:h-screen py-5 flex items-center'>
            <div className='flex flex-col p-2 md:flex-row justify-center md:justify-evenly items-center'>
                <div className={`flex-col p-2 w-[95%] h-auto  md:w-[65%] order-2 `}>
                    <h1 className='text-[20px] md:text-[30px] font-semibold text-black'>
                        {props.headQ}
                    </h1>
                    <p className='text-[#6a6a6a] text-[15px] my-3 text-justify md:text-[25px] '>
                        {props.datas}
                    </p>
                    <div className={`flex flex-col md:flex-row ${props.btnPos} `}>
                        <Link to={props.links} className=''>
                            <button className={`py-2 my-2 px-4 w-[100%] ${props.visibilty1} ${props.btnC} text-white rounded-md transition ease-in-out delay-150  hover:bg-[#6a6a6a] duration-300 text-[15px]`}> {props.Btns1}</button>
                        </Link>
                        <Link to={props.link2}>
                            <button className={`border-2 w-[100%] bg-black ${props.visibilty2} hover:bg-white hover:border-2 transition ease-in-out delay-150 duration-300 hover:border-black  hover:text-black text-white px-5 py-2 rounded-md text-[15px]`}>{props.Btns2}</button>
                        </Link>
                    </div>
                </div>
                <img className={`my-5 w-[80%] md:w-[20%] order-1 `} src={props.Imgs} alt="" />
            </div >
        </div>
    )
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
}