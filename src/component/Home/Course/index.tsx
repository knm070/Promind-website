import React from "react";
import Video from '../../../assets/imgs/videoImg.png'
import Person1 from '../../../assets/imgs/coursePerson1.png'
import Person2 from '../../../assets/imgs/coursePerson2.png'
import ArrowLeft from '../../../assets/icons/arrowLeft.svg'
import People1 from "../../../assets/imgs/people1.png"
import People2 from "../../../assets/imgs/people2.png"
import People3 from "../../../assets/imgs/people3.png"
import Star from "../../../assets/imgs/Star.png"
import CourseBg from "../../../assets/imgs/CourseBg.png"
import Arrow from '../../../assets/icons/arrow45.svg'

export const Course: React.FC = () => {

    return (
        <div className="pl-[60px] pr-[60px] pt-[120px]">
            <div className="pb-[120px]">
                <div className="w-[651px] pb-[40px]">
                    <h2 className="text-[48px]" style={{fontFamily:'Microsoft-PA' , fontWeight:'700', color:'rgba(0, 0, 0, 1)'}}>Watch the full video about the course!</h2>
                    <p className="text-[24px] pt-[16px]" style={{fontFamily:'Microsoft-PA', fontWeight:'400', color:'rgba(0, 0, 0, 1)'}}>Through this video, you will get complete information about the course and get answers to your questions.</p>
                </div>
                <div >
                    <img src={Video} alt="Video" />
                </div>
            </div>
            <div className="relative pl-[112px] flex items-center">
                <div className="w-[315px] mr-[20px]">
                    <img src={Person1} alt="Person" />
                    <div className="mt-[30px] rounded-[10px] p-[15px]" style={{background:'rgba(244, 244, 244, 1)'}}>
                        <span className="text-[24px] " style={{fontFamily:'Inter' , fontWeight:'700', color:'rgba(0, 0, 0, 1)'}}>Schedule With Mentor</span>
                        <p className="text-[16px] pt-[10px] pb-[10px]" style={{fontFamily:'Inter' , fontWeight:'400', color:'rgba(0, 0, 0, 0.62)'}}>Every successful digital marketing campaign must be driven.</p>
                        <button  className="text-[16px] rounded-[10px] flex items-center px-[20px] py-[8px] border-none gap-[10px] cursor-pointer" style={{background:'rgba(255, 157, 1, 1)',color:'rgba(255, 255, 255, 1)'}}>Browse all <img src={ArrowLeft} /></button>
                    </div>
                </div>
                <div className="w-[315px]">
                    <img src={Person2} alt="Person" />
                    <div className="mt-[30px] rounded-[10px] p-[15px]" style={{background:'rgba(244, 244, 244, 1)'}}>
                        <span className="text-[24px] " style={{fontFamily:'Inter' , fontWeight:'700', color:'rgba(0, 0, 0, 1)'}}>Discussion Session</span>
                        <p className="text-[16px] pt-[10px] pb-[10px]" style={{fontFamily:'Inter' , fontWeight:'400', color:'rgba(0, 0, 0, 0.62)'}}>Every successful digital marketing campaign must be driven.</p>
                        <button  className="text-[16px] rounded-[10px] flex items-center px-[20px] py-[8px] border-none gap-[10px] cursor-pointer" style={{background:'rgba(255, 157, 1, 1)',color:'rgba(255, 255, 255, 1)'}}>Browse all <img src={ArrowLeft} /></button>
                    </div>
                </div>
                <div className="absolute top-[120px] right-[200px] rounded-[50px] w-[229px] h-[87px]" style={{background:'rgba(255, 157, 1, 1)'}}></div>
                <div className="absolute top-[285px] right-[220px] rounded-full w-[84px] h-[84px]" style={{background:'rgba(255, 157, 1, 1)'}}></div>

                <div className="  w-[397px] ml-[38px]">
                    <span className="text-[66px]" style={{fontFamily:"Inter", fontWeight:'700', color:'rgba(0, 0, 0, 1)'}}>Why Choose Our Courses</span>     
                </div>
            </div>
            <div className="pt-[120px] " >
                <h2 className="text-[48px] pb-[22px]" style={{fontFamily:"Microsoft-PA", fontWeight:'700', color:'rgba(0, 0, 0, 1)'}}>Most Popular Courses</h2>

                <div className="flex gap-[20px]">
                    <div className="relative w-[427px] h-[426px]  pt-[30px] pl-[30px] pb-[78px]" style={{backgroundImage:`url( ${CourseBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                        <h3 className="text-[24px] pb-[40px]" style={{fontFamily:"Inter", fontWeight:'600', color:'rgba(255, 255, 255, 1)'}}>IT technology</h3>
                        <div className="rounded-[20px] bg-white py-[10px] pl-[20px] w-[237px] mb-[20px]" >
                            <span>Join class</span>
                            <p>Professional certification</p>
                        </div>
                        <span className="text-[24px] pb-[10px]" style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(255, 255, 255, 1)'}}>5000+</span>
                        <p className="text-[14px] pb-[10px]" style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(255, 255, 255, 1)'}}>Customer Reviews</p>
                        <div className="flex gap-1 pb-[10px]">
                            <img src={People1} alt="people" width={38} height={38}/>
                            <img src={People2} alt="people" width={38} height={38}/>
                            <img src={People3} alt="people" width={38} height={38}/>
                        </div>
                        <div className="flex gap-[5px] pb-[10px]">
                            <img src={Star} alt="star" />
                            <img src={Star} alt="star" />
                            <img src={Star} alt="star" />
                            <img src={Star} alt="star" />
                        </div>

                        <div>
                        <input
                            type="range"
                            className="w-[117px] h-[2px] bg-white rounded-full appearance-none cursor-pointer accent-white"
                            style={{
                            WebkitAppearance: 'none', // Ensures cross-browser compatibility for the thumb and track.
                            }}
                        />
                        </div>
                        <div className="absolute top-[290px] left-[290px] rounded-full w-[123px] h-[123px] flex items-center justify-center" style={{background:'rgba(255, 157, 1, 1)'}}> <img src={Arrow} alt="" /></div>
                    </div>


                    <div className="relative w-[427px] h-[426px]  pt-[30px] pl-[30px] pb-[78px]" style={{backgroundImage:`url( ${CourseBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                        <h3 className="text-[24px] pb-[40px]" style={{fontFamily:"Inter", fontWeight:'600', color:'rgba(255, 255, 255, 1)'}}>Graphic designer</h3>
                        <div className="rounded-[20px] bg-white py-[10px] pl-[20px] w-[237px] mb-[20px]" >
                            <span>Join class</span>
                            <p>Professional certification</p>
                        </div>
                        <span className="text-[24px] pb-[10px]" style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(255, 255, 255, 1)'}}>5000+</span>
                        <p className="text-[14px] pb-[10px]" style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(255, 255, 255, 1)'}}>Customer Reviews</p>
                        <div className="flex gap-1 pb-[10px]">
                            <img src={People1} alt="people" width={38} height={38}/>
                            <img src={People2} alt="people" width={38} height={38}/>
                            <img src={People3} alt="people" width={38} height={38}/>
                        </div>
                        <div className="flex gap-[5px] pb-[10px]">
                            <img src={Star} alt="star" />
                            <img src={Star} alt="star" />
                            <img src={Star} alt="star" />
                            <img src={Star} alt="star" />
                        </div>

                        <div>
                        <input
                            type="range"
                            className="w-[117px] h-[2px] bg-white rounded-full appearance-none cursor-pointer accent-white"
                            style={{
                            WebkitAppearance: 'none', // Ensures cross-browser compatibility for the thumb and track.
                            }}
                        />
                        </div>
                        <div className="absolute top-[290px] left-[290px] rounded-full w-[123px] h-[123px] flex items-center justify-center" style={{background:'rgba(255, 157, 1, 1)'}}> <img src={Arrow} alt="" /></div>
                    </div>


                    <div className="relative w-[427px] h-[426px]  pt-[30px] pl-[30px] pb-[78px]" style={{backgroundImage:`url( ${CourseBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                        <h3 className="text-[24px] pb-[40px]" style={{fontFamily:"Inter", fontWeight:'600', color:'rgba(255, 255, 255, 1)'}}>UI/UX</h3>
                        <div className="rounded-[20px] bg-white py-[10px] pl-[20px] w-[237px] mb-[20px]" >
                            <span>Join class</span>
                            <p>Professional certification</p>
                        </div>
                        <span className="text-[24px] pb-[10px]" style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(255, 255, 255, 1)'}}>5000+</span>
                        <p className="text-[14px] pb-[10px]" style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(255, 255, 255, 1)'}}>Customer Reviews</p>
                        <div className="flex gap-1 pb-[10px]">
                            <img src={People1} alt="people" width={38} height={38}/>
                            <img src={People2} alt="people" width={38} height={38}/>
                            <img src={People3} alt="people" width={38} height={38}/>
                        </div>
                        <div className="flex gap-[5px] pb-[10px]">
                            <img src={Star} alt="star" />
                            <img src={Star} alt="star" />
                            <img src={Star} alt="star" />
                            <img src={Star} alt="star" />
                        </div>

                        <div>
                        <input
                            type="range"
                            className="w-[117px] h-[2px] bg-white rounded-full appearance-none cursor-pointer accent-white"
                            style={{
                            WebkitAppearance: 'none', // Ensures cross-browser compatibility for the thumb and track.
                            }}
                        />
                        </div>
                        <div className="absolute top-[290px] left-[290px] rounded-full w-[123px] h-[123px] flex items-center justify-center" style={{background:'rgba(255, 157, 1, 1)'}}> <img src={Arrow} alt="" /></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Course;