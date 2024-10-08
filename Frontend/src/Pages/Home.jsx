import React, { useEffect } from 'react'
import{Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'

const home = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const authState= localStorage.getItem("auth")
        if (!authState){
            navigate("/login")
        }
    }, [])
  return (
    <div className='bg-gradient-to-r from-[#E0BCF3] to-[#7EE7EE] w-full h-screen  py-[54px]'>
        <h1 className='text-3xl font-[600] text-white font-Dosis w-[296px] h-[38px] mx-auto text-center'>Fruit.Ai</h1>
        <p className='text-white font-extrabold text-center leading-[18.96px] h-[19px] mx-auto  text-sm mt-8'>"Be Healthy!"</p>
        <div className=' w-[293px] h-[453px] mx-auto grid grid-cols-2 gap-4 mt-12'>
                <Link to="/chat" className='bg-gradient-to-r from-[#FFDBAA] to-[#FFF3E1] rounded-[20px] flex items-center justify-center shadow-2xl'>
                    <p className='text-[48px] text-center text-[#C84AD3] font-extrabold font-Dosis'>Chat.</p>
                </Link>
            <div className='bg-[#C2FFD0]  shadow-custom-heavy shadow-[#C2FFD0] rounded-[20px] flex items-center justify-center'>
                <p className='text-[48px] text-center text-[#C84AD3] font-extrabold font-Dosis'></p>
            </div>

            <div className='bg-[#EFFFC2] rounded-[20px] flex items-center justify-center shadow-custom-heavy shadow-[#EFFFC2]'>
                <p className='text-[48px] text-center text-[#C84AD3] font-extrabold font-Dosis'></p>
            </div>

            <Link to="/translate" className='bg-gradient-to-r from-[#bff4ff] to-[#99edff] rounded-[20px] flex items-center justify-center shadow-2xl'>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 59.1666L27.0833 50.4166H6.66668C5.06251 50.4166 3.68925 49.8455 2.54689 48.7031C1.40452 47.5607 0.833344 46.1875 0.833344 44.5833V6.66665C0.833344 5.06248 1.40452 3.68922 2.54689 2.54685C3.68925 1.40449 5.06251 0.833313 6.66668 0.833313H24.1667L26.7188 9.58331H53.3333C55.0347 9.58331 56.4323 10.1302 57.5261 11.2239C58.6198 12.3177 59.1667 13.7153 59.1667 15.4166V53.3333C59.1667 54.9375 58.6198 56.3107 57.5261 57.4531C56.4323 58.5955 55.0347 59.1666 53.3333 59.1666H30ZM15.8542 37.5833C19.2083 37.5833 21.967 36.5017 24.1302 34.3385C26.2934 32.1753 27.375 29.368 27.375 25.9166C27.375 25.5278 27.3629 25.1753 27.3386 24.8594C27.3142 24.5434 27.2535 24.2153 27.1563 23.875H15.6354V28.3958H22.125C21.7361 29.7569 20.9948 30.8142 19.9011 31.5677C18.8073 32.3212 17.4826 32.6979 15.9271 32.6979C14.0313 32.6979 12.4028 32.0173 11.0417 30.6562C9.68056 29.2951 9.00001 27.618 9.00001 25.625C9.00001 23.6319 9.68056 21.9548 11.0417 20.5937C12.4028 19.2326 14.0313 18.5521 15.9271 18.5521C16.8021 18.5521 17.6285 18.71 18.4063 19.026C19.184 19.342 19.8889 19.816 20.5208 20.4479L24.0938 17.0208C23.0729 15.9514 21.8455 15.125 20.4115 14.5416C18.9774 13.9583 17.4583 13.6666 15.8542 13.6666C12.5972 13.6666 9.81425 14.8212 7.50522 17.1302C5.19619 19.4392 4.04168 22.2708 4.04168 25.625C4.04168 28.9791 5.19619 31.8107 7.50522 34.1198C9.81425 36.4288 12.5972 37.5833 15.8542 37.5833ZM35.3958 39.0416L37 37.5104C36.3195 36.684 35.6997 35.8819 35.1406 35.1041C34.5816 34.3264 34.0347 33.5 33.5 32.625L35.3958 39.0416ZM39.0417 35.3229C40.4028 33.7187 41.4358 32.1875 42.1406 30.7291C42.8455 29.2708 43.3195 28.1285 43.5625 27.3021H31.9688L32.8438 30.3646H35.7604C36.1493 31.0937 36.6111 31.8837 37.1458 32.7344C37.6806 33.585 38.3125 34.4479 39.0417 35.3229ZM32.9167 56.25H53.3333C54.2083 56.25 54.9132 55.9705 55.4479 55.4114C55.9826 54.8524 56.25 54.1597 56.25 53.3333V15.4166C56.25 14.5416 55.9826 13.8368 55.4479 13.3021C54.9132 12.7673 54.2083 12.5 53.3333 12.5H27.5938L31.0208 24.3125H36.7813V21.25H39.7708V24.3125H50.4167V27.3021H46.6979C46.2118 29.1493 45.4826 30.9479 44.5104 32.6979C43.5382 34.4479 42.3958 36.0764 41.0833 37.5833L49.0313 45.3854L46.9167 47.5L39.0417 39.625L36.4167 42.3229L38.75 50.4166L32.9167 56.25Z" fill="#007AFF"/>
                </svg>
            </Link>

            <Link to="/Faq" className='bg-gradient-to-r from-[#e9aaff] to-[#F7e1ff] rounded-[20px] flex items-center justify-center shadow-2xl'>
                <p className='text-[48px] text-center text-[#3B5998] font-extrabold font-Dosis'>FAQs</p>
            </Link>

            <Link to="/about" className='bg-gradient-to-r from-[#FEBFFF] to-[#FF99F5] rounded-[20px] flex items-center justify-center shadow-2xl'>
                <p className='text-[32px] text-center text-[#C84AD3] font-extrabold font-Dosis'>About</p>
            </Link>
        </div>
        <div className='w-[55px] h-[10px] mx-auto mt-12 flex justify-between'>
            <div className='w-[10px] h-[10px] rounded-full bg-white shadow-2xl'></div> 
            <div className='w-[10px] h-[10px] rounded-full bg-custom-complex-gradient '></div>       
            <div className='w-[10px] h-[10px] rounded-full bg-custom-complex-gradient '></div>    
        </div>
    </div>
  )
}

export default home


