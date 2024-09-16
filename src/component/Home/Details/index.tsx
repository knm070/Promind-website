import React from "react";
import Detail1 from "../../../assets/imgs/detail1.jpg"
import Detail2 from "../../../assets/imgs/detail2.jpg"
import ArrowLeft from '../../../assets/icons/arrowLeft.svg'
import BookMark from "../../../assets/imgs/bookmark.png"
import Tic from "../../../assets/imgs/Tick2.png"
import Dart from "../../../assets/imgs/dart.png"
import RingBell from "../../../assets/imgs/Ringbell2.png"

import 'swiper/css';

const OpportunitySection: React.FC = () => {
  return (
    <div className="pl-[60px] pr-[66px] pt-[120px] ">
      <div className="flex gap-[20px] items-center">
     
      <div>
        <div className="rounded-[50px] py-[31px] px-[45px] w-[427px] mb-[30px]" style={{background:'rgba(244, 244, 244, 1)'}}>
          <div className="rounded-[30px] py-[20px] px-[25px]" style={{background:'rgba(255, 157, 1, 1)'}}>
            <p className="text-[24px]" style={{fontFamily:'Inter', fontWeight:'600', color:'rgba(0, 0, 0, 0.7)'}}>Are you interested in web design but can't find a good training center?</p>
          </div>
        </div>
        <div>
          <img src={Detail1} alt="detail" />
        </div>
      </div>

      <div>
        <img src={Detail2} alt="detail" />
      </div>

      <div>
        <h2 className="text-[66px] pb-[20px]" style={{fontFamily:'Inter' , fontWeight:'700', color:'rgba(0, 0, 0, 1)'}}>Who is the course for?</h2>
        <div>
        <button  className="text-[16px] rounded-[10px] flex items-center px-[20px] py-[8px] border-none gap-[10px] cursor-pointer" style={{background:'rgba(255, 157, 1, 1)',color:'rgba(255, 255, 255, 1)'}}>Browse all <img src={ArrowLeft} /></button>
        </div>
      </div>


    </div>
      <div className="pt-[120px] pb-[120px] pl-[112px] gap-[92px] flex items-center">
        <div className="w-[354px]">
          <div className="pb-[20px]">
            <p className="text-[55px]" style={{fontFamily:'Inter', fontWeight:'700', color:'rgba(0, 0, 0, 1)'}}>What makes us different </p>
          </div>
            <button  className="text-[16px] rounded-[10px] flex items-center px-[20px] py-[8px] border-none gap-[10px] cursor-pointer" style={{background:'rgba(48, 123, 116, 1)',color:'rgba(255, 255, 255, 1)'}}>Browse all <img src={ArrowLeft} /></button>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-[20px]">


          <div className=" py-[51px] px-[46px]" style={{borderRadius:'50px 0px 50px 50px', background:'rgba(255, 180, 60, 1)'}}>
            <div className="flex flex-col items-center">
              <img src={BookMark} alt="Bookmark" width={120} height={120}/>
              <p className="pt-[10px] text-[24px]" style={{fontFamily:'Inter', fontWeight:'500', color:'rgba(0, 0, 0, 1)'}}>Personalized education</p>
            </div>
          </div>
          <div className="py-[51px] px-[46px]" style={{borderRadius:'0px 50px 50px 50px', background:'rgba(255, 180, 60, 1)'}}>
            <div className="flex flex-col items-center">
              <div className="rounded-[44px] pb-[8px] pl-[10px]" style={{background: 'linear-gradient(168.53deg, rgba(234, 255, 254, 0.5) 0%, rgba(201, 217, 241, 0.5) 97.46%)',
                 border: '1px solid linear-gradient(168.98deg, #FFFFFF 1.41%, rgba(255, 255, 255, 0) 98.85%)', boxShadow:' 20px 20px 50px 0px rgba(25, 61, 131, 0.05)'
                }}>
                <img src={Tic} alt="Tic" />
              </div>
              <p className="pt-[10px] text-[24px]" style={{fontFamily:'Inter', fontWeight:'500', color:'rgba(0, 0, 0, 1)'}}>Reliable content</p>
            </div>
          </div>

          <div className=" py-[51px] px-[46px]" style={{borderRadius:'50px 0px 50px 50px', background:'rgba(255, 180, 60, 1)'}}>
            <div className="flex flex-col items-center">
              <img src={Dart} alt="dart" width={120} height={120}/>
              <p className="pt-[10px] text-[24px]" style={{fontFamily:'Inter', fontWeight:'500', color:'rgba(0, 0, 0, 1)'}}>Personalized education</p>
            </div>
          </div>

          <div className=" py-[51px] px-[46px]" style={{borderRadius:'0px 50px 50px 50px', background:'rgba(255, 180, 60, 1)'}}>
            <div className="flex flex-col items-center">
            <div className="rounded-[44px] pt-[21px] pb-[11px] pl-[25px] pr-[20px]" style={{background: 'linear-gradient(168.53deg, rgba(234, 255, 254, 0.5) 0%, rgba(201, 217, 241, 0.5) 97.46%)',
                 border: '1px solid linear-gradient(168.98deg, #FFFFFF 1.41%, rgba(255, 255, 255, 0) 98.85%)', boxShadow:' 20px 20px 50px 0px rgba(25, 61, 131, 0.05)'
                }}>
                <img src={RingBell} alt="Rignbell" width={68} height={75}/>
              </div>
              <p className="pt-[10px] text-[24px]" style={{fontFamily:'Inter', fontWeight:'500', color:'rgba(0, 0, 0, 1)'}}>Personalized education</p>
            </div>
          </div>  


        </div>
      </div>


      </div>
  );
};

export default OpportunitySection;
