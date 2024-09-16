import React from "react";
import Header from '../../../assets/imgs/headSection.png'
import People1 from '../../../assets/imgs/people1.png'
import People2 from '../../../assets/imgs/people2.png'
import People3 from '../../../assets/imgs/people3.png'


export const HeadSection: React.FC = () => {
  return (
    <div  className=" px-[60px] pt-[100px] bg-white z-0">
      <div className="absolute top-[-85px] left-[-180px] rounded-full w-[556px] h-[567px] z-0" style={{background:'rgba(255, 157, 1, 0.77)'}}></div>
     <div className="flex relative z-50 ">
      <div>
        <h1 className="text-[48px]" style={{fontFamily:'Microsoft-PA', fontWeight:'700', color:'rgba(0, 0, 0, 1)'}}>Welcome to the Online learning Center</h1>
        <p className="text-[24px] pt-[20px] pb-[60px]" style={{fontFamily:'Microsoft-PA', fontWeight:'400', color:'rgba(0, 0, 0, 0.8)'}}>With us, you can get results from the comfort of your own home. We are dedicated to providing you with quality education wherever you are.</p>
        <div className="flex gap-[30px]">
            <button className="text-[24px] rounded-[20px] px-[20px] py-[15px] outline-none border-none cursor-pointer" style={{fontFamily:'Microsoft-PA', fontWeight:'400', color:'rgba(255, 255, 255, 1)', background:'rgba(255, 157, 1, 1)'}}>Registration</button>
            <button className="text-[24px] rounded-[20px] px-[20px] py-[15px] outline-none border-none cursor-pointer" style={{fontFamily:'Microsoft-PA', fontWeight:'400', color:'rgba(255, 255, 255, 1)', background:'rgba(48, 123, 116, 1)'}}>Watch the video</button>
        </div>
      </div>
      <div>
        <img src={Header} alt="" />
      </div>
     </div>
     <div className="relative overflow-hidden h-[385px] flex flex-col items-center justify-center mt-[100px]" style={{borderRadius:'250px 0px 250px 0px', background:'rgba(255, 180, 60, 1)'}}>
      <div className="absolute top-[135px] left-[-113px] rounded-full w-[377px] h-[384px] " style={{background:'rgba(48, 123, 116, 1)'}}></div>
      <div className="absolute top-[-122px] left-[1150px] rounded-full w-[377px] h-[384px] z-0" style={{background:'rgba(48, 123, 116, 1)'}}></div>

      <div>
        <div className="flex gap-[100px]">
      <div>
        <span className="text-[52px]" style={{fontFamily:'Inter', fontWeight:'700', color:'rgba(0, 0, 0, 1)'}}>231+</span>
        <p className="text-[24px]" style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(0, 0, 0, 1)'}}>Courses & subjects</p>
      </div>
      <div>
        <span  className="text-[52px]" style={{fontFamily:'Inter', fontWeight:'700', color:'rgba(0, 0, 0, 1)'}}>319+</span>
        <p className="text-[24px]" style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(0, 0, 0, 1)'}}>Instructors</p>
      </div>
      <div>
        <span className="text-[52px]" style={{fontFamily:'Inter', fontWeight:'700', color:'rgba(0, 0, 0, 1)'}}>72k+</span>
        <p className="text-[24px]" style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(0, 0, 0, 1)'}}>Using the app</p>
      </div>
    </div>
    <div className="rounded-[30px] bg-white flex items-center py-[16px] px-[40px] w-[533px] gap-[30px] mt-[45px]">
      <div>
        <img src={People1} alt="people" />
        <img src={People2} alt="people" />
        <img src={People3} alt="people" />
      </div>
      <div className="flex items-end gap-1">
        <span className="text-[52px]" style={{fontFamily:'Inter', fontWeight:'700', color:'rgba(0, 0, 0, 1)'}}>+72k</span>
        <p className="text-[24px] pb-[7px]" style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(0, 0, 0, 1)'}}>Happy student</p>
      </div>
    </div>
  </div>
     </div>



    </div>
  );
};
