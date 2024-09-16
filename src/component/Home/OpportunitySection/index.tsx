import React from "react";
import Study1 from '../../../assets/imgs/study1.png'
import Study2 from '../../../assets/imgs/study2.png'
import Study3 from '../../../assets/imgs/study3.png'
import Study4 from '../../../assets/imgs/study4.png'
import Person from '../../../assets/imgs/PersonOpp.png'
import ArriValFlag from '../../../assets/imgs/arrivalFlag.png'
import MegaPhone from '../../../assets/imgs/Megaphone.png'
import MouseClick from '../../../assets/imgs/mouseClick.png'
import ThumbUp from '../../../assets/imgs/thumbUp.png'
import Box from '../../../assets/imgs/Box.png'
import OpenBook from '../../../assets/imgs/openBook.png'
import Testimonial from "../../../assets/imgs/testimonialsP.png"
import Star from '../../../assets/imgs/Star.png'
import GStar from '../../../assets/imgs/greyStar.png'

export const OpportunitySection: React.FC = () => {
    return (
        <div className="pb-[120px] z-0">
            <div className="flex items-end pl-[60px] pt-[60px] gap-[105px] relative z-50 overflow-hidden mb-[120px]" style={{background:'rgba(48, 123, 116, 1)'}}>
                <div className="">
                    <h2 className="text-[48px] pb-[50px]" style={{fontFamily:'Microsoft-PA', fontWeight:'700', color:'rgba(255, 255, 255, 1)'}}>Why is it profitable to study online?</h2>
                    <div className="flex flex-col gap-[30px]">
                        <div className="flex items-center gap-[30px]">
                            <img src={Study1} alt="study1" width={89} height={89}/>
                            <p className="text-[35px]" style={{fontFamily:'Microsoft-PA', fontWeight:'400', color:'rgba(255, 255, 255, 1)'}}>Lower cost of payment</p>
                        </div>
                        <div className="flex items-center gap-[30px]">
                            <img src={Study2} alt="study1" width={89} height={89}/>
                            <p className="text-[35px]" style={{fontFamily:'Microsoft-PA', fontWeight:'400', color:'rgba(255, 255, 255, 1)'}}>It saves your time</p>
                        </div>
                        <div className="flex items-center gap-[30px]">
                            <img src={Study3} alt="study1" width={89} height={89}/>
                            <p className="text-[35px]" style={{fontFamily:'Microsoft-PA', fontWeight:'400', color:'rgba(255, 255, 255, 1)'}}>You can study anywhere and however you want.</p>
                        </div>
                        <div className="flex items-center gap-[30px] pb-[80px]">
                            <img src={Study4} alt="study1" width={89} height={89}/>
                            <p className="text-[35px]" style={{fontFamily:'Microsoft-PA', fontWeight:'400', color:'rgba(255, 255, 255, 1)'}}>Individual training program</p>
                        </div>
                    </div>
                </div>
                <div >
                    <img src={Person} className="relative z-50" />
                </div>
                <div className="rounded-full w-[640px] h-[653px] absolute top-[-154px] left-[956px] z-0" style={{background:'rgba(255, 157, 1, 0.77)'}}></div>
            </div> 

            <div className="flex flex-col items-center pb-[120px]">
                <div className="pb-[30px]">
                    <h2 className="text-[62px]" style={{fontFamily:'Inter', fontWeight:'700', color:'rgba(0, 0, 0, 1)'}}>What awaits you</h2>
                </div>
                <div className="flex flex-wrap px-[177px]">
                    <div className="flex items-center gap-[30px] pr-[63px] pb-[42px]" style={{borderBottom:'1px solid rgba(187, 180, 180, 1)', borderRight:'1px solid rgba(187, 180, 180, 1)'}}>
                        <img src={ArriValFlag} alt="" width={120} height={120}/>
                        <p className="text-[24px] w-[330px]" style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(0, 0, 0, 1)'}}>Answers to your questions from curators</p>
                    </div>

                    <div className="flex items-center gap-[30px] pl-[125px] pb-[42px]" style={{borderBottom:'1px solid rgba(187, 180, 180, 1)', }}>
                        <img src={MegaPhone} alt="" width={120} height={120}/>
                        <p className="text-[24px] w-[330px]" style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(0, 0, 0, 1)'}}>Master class once a week</p>
                    </div>

                    <div className="flex items-center gap-[30px] pt-[38px] pr-[63px] pb-[42px]" style={{borderBottom:'1px solid rgba(187, 180, 180, 1)', borderRight:'1px solid rgba(187, 180, 180, 1)'}}>
                        <img src={MouseClick} alt="" width={120} height={120}/>
                        <p className="text-[24px] w-[330px]" style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(0, 0, 0, 1)'}}>An online platform filled with recorded tutorials</p>
                    </div>

                    <div className="flex items-center gap-[30px]  pt-[38px] pl-[125px] pb-[42px]" style={{borderBottom:'1px solid rgba(187, 180, 180, 1)', }}>
                        <img src={ThumbUp} alt="" width={120} height={120}/>
                        <p className="text-[24px] w-[330px]" style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(0, 0, 0, 1)'}}>Master class once a week</p>
                    </div>

                    <div className="flex items-center gap-[30px] pt-[38px] pr-[63px] pb-[42px]" style={{ borderRight:'1px solid rgba(187, 180, 180, 1)'}}>
                        <img src={Box} alt="" width={120} height={120}/>
                        <p className="text-[24px] w-[330px]" style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(0, 0, 0, 1)'}}>Working for Partfolia</p>
                    </div>

                    <div className="flex items-center gap-[30px]  pt-[38px] pl-[125px] pb-[42px]" >
                        <img src={OpenBook} alt="" width={120} height={120}/>
                        <p className="text-[24px] w-[330px]" style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(0, 0, 0, 1)'}}>Checking homework</p>
                    </div>
                </div>
            </div>

            <div className="pl-[60px] pb-[120px]">
                <div className="pb-[50px]">
                    <h2 className="text-[48px]" style={{fontFamily:'Inter', fontWeight:'500', color:'rgba(48, 123, 116, 1)'}}>Testimonials</h2>
                    <p className="text-[24px] pt-1" style={{fontFamily:'Inter', fontWeight:'500', color:'rgba(253, 180, 61, 1)'}}>What our student say about us</p>
                </div>

                <div className="flex gap-[20px]">
                    <div className="w-[427px] py-[20px] px-[30px] rounded-[20px]" style={{background:'rgba(48, 123, 116, 0.8)'}}>
                        <div className="flex items-center gap-[15px] pb-[25px]">
                            <img src={Testimonial} alt="" />
                            <span className="text-[20px]" style={{fontFamily:'Inter', fontWeight:'700', color:'rgba(255, 157, 1, 1)'}}>Ronald Richards</span>
                        </div>
                        <p className="text-[16px]"  style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(255, 255, 255, 1)'}}>“ I never thought online learning could be this engaging and effective until I discovered Promid. The courses are well-structured, the instructors are knowledgeable and the platform is incredibly user-friendly. I”ve gained valuable skills that have helped me advance in my career. Highly recommended! ” </p>
                        <div className="flex pt-[15px] gap-[5px]">
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={GStar} alt="" />
                        </div>
                    </div>

                    <div className="w-[427px] py-[20px] px-[30px] rounded-[20px]" style={{background:'rgba(244, 244, 244, 0.8)'}}>
                        <div className="flex items-center gap-[15px] pb-[25px]">
                            <img src={Testimonial} alt="" />
                            <span className="text-[20px]" style={{fontFamily:'Inter', fontWeight:'700', color:'rgba(255, 157, 1, 1)'}}>Ronald Richards</span>
                        </div>
                        <p className="text-[16px]"  style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(0, 0, 0, 1)'}}>“ I never thought online learning could be this engaging and effective until I discovered Promid. The courses are well-structured, the instructors are knowledgeable and the platform is incredibly user-friendly. I”ve gained valuable skills that have helped me advance in my career. Highly recommended! ” </p>
                        <div className="flex pt-[15px] gap-[5px]">
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={GStar} alt="" />
                        </div>
                    </div>

                    <div className="w-[427px] py-[20px] px-[30px] rounded-[20px]" style={{background:'rgba(48, 123, 116, 0.8)'}}>
                        <div className="flex items-center gap-[15px] pb-[25px]">
                            <img src={Testimonial} alt="" />
                            <span className="text-[20px]" style={{fontFamily:'Inter', fontWeight:'700', color:'rgba(255, 157, 1, 1)'}}>Ronald Richards</span>
                        </div>
                        <p className="text-[16px]"  style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(255, 255, 255, 1)'}}>“ I never thought online learning could be this engaging and effective until I discovered Promid. The courses are well-structured, the instructors are knowledgeable and the platform is incredibly user-friendly. I”ve gained valuable skills that have helped me advance in my career. Highly recommended! ” </p>
                        <div className="flex pt-[15px] gap-[5px]">
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={GStar} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpportunitySection;