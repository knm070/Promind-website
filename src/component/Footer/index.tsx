import React from "react";
import Promind from '../../assets/imgs/ProMind.png'
import Message from '../../assets/icons/message.svg'
import Instagram from '../../assets/icons/instagram.svg'
import Telegram from '../../assets/icons/telegram.svg'
import Google from '../../assets/icons/google.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Map from '../../assets/icons/map.svg'
import Call from '../../assets/icons/call.svg'
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div className="relative" style={{background:'rgba(253, 180, 61, 1)'}}>
      <div className="absolute top-[-115px] left-[172px] flex justify-center items-center w-[1096px] h-[300px]" style={{borderRadius:'200px 0px 200px 0px' , background:'rgba(255, 232, 199, 1)'}}>
        <h2 className="text-[40px] w-[538px]" style={{fontFamily:'Inter', fontWeight:'600', color:'rgba(0, 0, 0, 1)'}}>Subscribe To the page for more information</h2>
        <div className="flex">
          <input type="text" placeholder="email" className="text-[16px] outline-none border-none w-[315px]" style={{borderBottom:'1px solid rgba(0, 0, 0, 1)' ,background:'rgba(255, 232, 199, 1)'}}/>
          <button className="flex items-center cursor-pointer border-none rounded-full" style={{borderRadius:'50px 50px 50px 0px', background:'rgba(253, 180, 61, 1)'}}>
            <img src={Message} alt="message" className="p-[17px]"/>
          </button>
        </div>
      </div>


      <div className=" flex flex-row ml-[70px] mr-[75px] pb-[40px] pt-[252px]" style={{borderBottom: '2px solid rgba(1, 36, 104, 1)'}}>
        <div className="pr-[126px]">
        <img src={Promind} alt="Promind" width={311} height={86} />
        </div>
        <div className="flex gap-[40px]">
          <div>
                <span className="text-[24px]" style={{fontFamily:'Inter' , fontWeight:'600', color:'rgba(0, 0, 0, 1)'}}>Company</span>
              <ul className="p-0">
                <li className="list-none pt-[30px]"><a href="#" className="text-[24px] cursor-pointer"  style={{textDecoration:'none',fontFamily:'Inter' , fontWeight:'400', color:'rgba(0, 0, 0, 1)' }}>About us</a></li>
                <li className="list-none pt-[20px]"><a href="#" className="text-[24px] cursor-pointer" style={{textDecoration:'none',fontFamily:'Inter' , fontWeight:'400', color:'rgba(0, 0, 0, 1)' }}>Careers</a></li>
                <li className="list-none pt-[20px]"><a href="#" className="text-[24px] cursor-pointer" style={{textDecoration:'none',fontFamily:'Inter' , fontWeight:'400', color:'rgba(0, 0, 0, 1)' }}>Contacts</a></li>
                <li className="list-none pt-[20px]"><a href="#" className="text-[24px] cursor-pointer" style={{textDecoration:'none',fontFamily:'Inter' , fontWeight:'400', color:'rgba(0, 0, 0, 1)' }}>Pricing</a></li>
              </ul>
            </div>
            <div >
                <span className="text-[24px]" style={{fontFamily:'Inter' , fontWeight:'600', color:'rgba(0, 0, 0, 1)'}}>For Students</span>
              <ul className="p-0">
                <li className="list-none pt-[30px]"><a href="#" className="text-[24px] cursor-pointer"  style={{textDecoration:'none',fontFamily:'Inter' , fontWeight:'400', color:'rgba(0, 0, 0, 1)' }} onClick={() => navigate('/Courses')}>Courses</a></li>
                <li className="list-none pt-[20px]"><a href="#" className="text-[24px] cursor-pointer" style={{textDecoration:'none',fontFamily:'Inter' , fontWeight:'400', color:'rgba(0, 0, 0, 1)' }} onClick={() => navigate('/Blog')}>Blog</a></li>
                <li className="list-none pt-[20px]"><a href="#" className="text-[24px] cursor-pointer" style={{textDecoration:'none',fontFamily:'Inter' , fontWeight:'400', color:'rgba(0, 0, 0, 1)' }}>FAQs</a></li>
                <li className="list-none pt-[20px]"><a href="#" className="text-[24px] cursor-pointer" style={{textDecoration:'none',fontFamily:'Inter' , fontWeight:'400', color:'rgba(0, 0, 0, 1)' }}>Referral Program</a></li>
              </ul>
            </div>
            <div >
                <span className="text-[24px]" style={{fontFamily:'Inter' , fontWeight:'600', color:'rgba(0, 0, 0, 1)'}}>For Mentors</span>
              <ul className="p-0">
                <li className="list-none pt-[30px]"><a href="#" className="text-[24px] cursor-pointer"  style={{textDecoration:'none',fontFamily:'Inter' , fontWeight:'400', color:'rgba(0, 0, 0, 1)' }}>Become a Paetner</a></li>
                <li className="list-none pt-[20px]"><a href="#" className="text-[24px] cursor-pointer" style={{textDecoration:'none',fontFamily:'Inter' , fontWeight:'400', color:'rgba(0, 0, 0, 1)' }}>How It Works</a></li>
                <li className="list-none pt-[20px]"><a href="#" className="text-[24px] cursor-pointer" style={{textDecoration:'none',fontFamily:'Inter' , fontWeight:'400', color:'rgba(0, 0, 0, 1)' }}>Referral Program</a></li>
              </ul>
            </div>
            <div >
              <span className="text-[24px]" style={{fontFamily:'Inter' , fontWeight:'600', color:'rgba(0, 0, 0, 1)'}}>For Companies</span>
              <ul className="p-0">
                <li className="list-none pt-[30px]"><a href="#" className="text-[24px] cursor-pointer"  style={{textDecoration:'none',fontFamily:'Inter' , fontWeight:'400', color:'rgba(0, 0, 0, 1)' }}>Become a Partner</a></li>
                <li className="list-none pt-[20px]"><a href="#" className="text-[24px] cursor-pointer" style={{textDecoration:'none',fontFamily:'Inter' , fontWeight:'400', color:'rgba(0, 0, 0, 1)' }}>Corporate Training</a></li>
              </ul>
            </div>
        </div>


        </div>
        <div className="flex justify-end items-center pr-[60px] pt-[39px] pb-[60px] gap-[40px]">
          <div className="flex gap-[30px]">
            <a href="#">
            <img src={Instagram} alt="Instagram" width={24} height={24} />
            </a>
            <a href="#">
            <img src={Telegram} alt="Telegram" width={24} height={24} />
            </a>
            <a href="#">
            <img src={Call} alt="Call" width={24} height={24} />
            </a>
            <a href="#">
            <img src={Google} alt="Google" width={24} height={24} />
            </a>
            <a href="#">
            <img src={Facebook} alt="Facebook" width={24} height={24} />
            </a>
            <a href="#">
            <img src={Map} alt="Map" width={24} height={24} />
            </a>
          </div>
          <div className="flex items-center gap-[8px]">
            <a href="#" className="pt-[8px]"><img src={Call} alt="Call" /></a>
            <div className="flex flex-col items-center">
              <h3 className="text-[16px] pb-[5px]" style={{ fontFamily:'Inter', fontWeight:'400',color:'rgba(0, 0, 0, 1)'}}>Call center</h3>
              <p className="text-[12px]" style={{fontFamily:'Inter', fontWeight:'400',color:'rgba(0, 0, 0, 1)'}}>+998973456556</p>
            </div>
          </div>
        </div>

      </div>
  );
};

export default Footer;
