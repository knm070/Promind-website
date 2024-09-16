import Footer from "../Footer";
import Navbar from "../Navbar";
import Teacher1 from '../../assets/imgs/teacher1.png'
import Teacher2 from '../../assets/imgs/teacher2.png'
import Teacher3 from '../../assets/imgs/teacher3.png'
import Teacher4 from '../../assets/imgs/teacher4.png'
import Teacher5 from '../../assets/imgs/teacher5.png'
import Teacher6 from '../../assets/imgs/teacher6.png'
import Teacher7 from '../../assets/imgs/teacher7.png'
import Promind from '../../assets/imgs/ProMind.png'
// import Slider from 'react-slick'
import person1 from '../../assets/imgs/people1.png'
import person2 from '../../assets/imgs/people2.png'
import person3 from '../../assets/imgs/people3.png'
import Star from '../../assets/imgs/Star.png'
import Instagram from '../../assets/icons/instagram.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Telegram from '../../assets/icons/telegram.svg'
import CirclesRight from '../../assets/imgs/CirclesRight.png'
import CirclesLeft from '../../assets/imgs/CirclesLeft.png'
import PeapleIcon from '../../assets/icons/peopleicon.svg'
import CommentIcon from '../../assets/icons/commentIcon.svg'
import RingBellIcon from '../../assets/icons/ringBellIcon.svg'





export const Teachers: React.FC = () => {
    const settings = {
    
        infinite: true,
        speed: 2000, // Speed of the swipe
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1600, // Set to 0 for continuous swiping
        cssEase: 'ease', // Smooth transition
        pauseOnHover: false, // Prevent autoplay from stopping on hover
        pauseOnFocus: false, // Prevent autoplay from stopping on focus
        responsive: [
          {
            breakpoint: 1200, // Extra large screens (lg, xl)
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768, // Medium screens (md)
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480, // Small screens (sm)
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (
        <div>
            <Navbar/>
            <div className="pb-[331px] relative">
                <div className="pt-[51px] pb-[76px] bg-[#FFB43C] flex flex-col items-center">
                    <h2 className="text-[48px] w-[875px] text-center" style={{fontFamily:'Inter', fontWeight:'700', color:'rgba(255, 255, 255, 1)'}}>Find the best online course for grow your 
                        <span style={{fontFamily:'Inter', fontWeight:'700', color:'rgba(48, 123, 116, 1)'}} > skills</span> & define your <span style={{fontFamily:'Inter', fontWeight:'700', color:'rgba(48, 123, 116, 1)'}}>future</span></h2>

                    <div className="pt-[84px] flex gap-[20px]">
                        <div className="w-[315px] h-[397px] flex items-end justify-center" style={{borderRadius:'250px 250px 30px 30px', background:'rgba(161, 14, 185, 1)'}}>
                            <img src={Teacher1} alt="" />
                        </div>
                        <div className="w-[315px] h-[397px] flex items-end justify-center" style={{borderRadius:'250px 250px 30px 30px', background:'rgba(26, 136, 92, 1)'}}>
                            <img src={Teacher2} alt="" />
                        </div>
                        <div className="w-[315px] h-[397px] flex items-end justify-center" style={{borderRadius:'250px 250px 30px 30px', background:'rgba(210, 32, 55, 1)'}}>
                            <img src={Teacher3} alt="" />
                        </div>
                        <div className="w-[315px] h-[397px] flex items-end justify-center" style={{borderRadius:'250px 250px 30px 30px', background:'rgba(2, 12, 103, 1)'}}>
                            <img src={Teacher4} alt="" />
                        </div>
                    </div>
                </div>
                <div className="py-[13px] bg-[#307B74] flex gap-[40px] overflow-hidden">
                    <img src={Promind} alt="" />
                    <img src={Promind} alt="" />
                    <img src={Promind} alt="" />
                    <img src={Promind} alt="" />
                    <img src={Promind} alt="" />
                    <img src={Promind} alt="" />
                    <img src={Promind} alt="" />
                </div>


                <div className="pt-[120px] pl-[60px] pr-[60px]">
                    <h2 className="text-[48px] w-[538px] pb-[60px]" style={{fontFamily:'Inter', fontWeight:'800', color:'rgba(0, 0, 0, 1)'}}>Build Skills From Our Professional Mentors</h2>
                    <div className="flex items-center gap-[20px]">
                        <div>
                            <div className="w-[427px] h-[543px] flex items-end justify-center" style={{borderRadius:'250px 250px 30px 30px', background:'rgba(161, 14, 185, 1)'}}>
                                <img src={Teacher1} alt="teacher" width={309} height={479}/>
                            </div>
                            <div className="pt-[20px]">
                                <button className="rounded-[10px] py-[22px] w-[427px] text-[30px] cursor-pointer" style={{fontFamily:'Inter', fontWeight:'600', color:'rgba(255, 255, 255, 1)', background:'rgba(0, 0, 0, 1)'}}>Rushana</button>
                            </div>
                        </div>
                        <div className="w-[430px]">
                            <h3 className="text-[33px] pb-[30px]" style={{fontFamily:'Inter', fontWeight:'700', color:'rgba(0, 0, 0, 1)'}}>Rushana</h3>
                            <p className="text-[30px] pb-[20px]" style={{fontFamily:'Inter', fontWeight:'500', color:'rgba(0, 0, 0, 1)'}}>Learn UX-UI course from the most professional teachers. She has 8 years of experience</p>
                            <div className="flex items-center pb-[20px]">
                                <img src={person1} alt="person" width={38} height={38}/>
                                <img src={person2} alt="person" width={38} height={38}/>
                                <img src={person3} alt="person" width={38} height={38}/>
                                <p className="text-[24px] pl-[10px]"  style={{fontFamily:'Inter', fontWeight:'600', color:'rgba(0, 0, 0, 1)'}}>+52k Happy student</p>
                            </div>
                            <div className="flex gap-[5px]">
                                <img src={Star} alt="" width={30} height={30}/>
                                <img src={Star} alt="" width={30} height={30}/>
                                <img src={Star} alt="" width={30} height={30}/>
                                <img src={Star} alt="" width={30} height={30}/>
                            </div>
                            <div className="flex pt-[30px] gap-[20px]">
                                <div className="rounded-full w-[70px] h-[70px] flex items-center justify-center" style={{background:'rgba(244, 244, 244, 1)'}}>
                                    <img src={Instagram} alt="" width={24} height={24} />
                                </div>
                                <div className="rounded-full w-[70px] h-[70px] flex items-center justify-center" style={{background:'rgba(244, 244, 244, 1)'}}>
                                    <img src={Facebook} alt="" width={24} height={24} />
                                </div>
                                <div className="rounded-full w-[70px] h-[70px] flex items-center justify-center" style={{background:'rgba(244, 244, 244, 1)'}}>
                                    <img src={Telegram} alt="" width={24} height={24} />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex relative items-center justify-end gap-[20px] pt-[20px] pb-[50px]">
                        <div className="w-[430px]">
                            <h3 className="text-[33px] pb-[30px]" style={{fontFamily:'Inter', fontWeight:'700', color:'rgba(0, 0, 0, 1)'}}>Abbos</h3>
                            <p className="text-[30px] pb-[20px]" style={{fontFamily:'Inter', fontWeight:'500', color:'rgba(0, 0, 0, 1)'}}>Learn Graphic design course from the most professional teachers. He has 8 years of experience</p>
                            <div className="flex items-center pb-[20px]">
                                <img src={person1} alt="person" width={38} height={38}/>
                                <img src={person2} alt="person" width={38} height={38}/>
                                <img src={person3} alt="person" width={38} height={38}/>
                                <p className="text-[24px] pl-[10px]"  style={{fontFamily:'Inter', fontWeight:'600', color:'rgba(0, 0, 0, 1)'}}>+52k Happy student</p>
                            </div>
                            <div className="flex gap-[5px]">
                                <img src={Star} alt="" width={30} height={30}/>
                                <img src={Star} alt="" width={30} height={30}/>
                                <img src={Star} alt="" width={30} height={30}/>
                                <img src={Star} alt="" width={30} height={30}/>
                            </div>
                            <div className="flex pt-[30px] gap-[20px]">
                                <div className="rounded-full w-[70px] h-[70px] flex items-center justify-center" style={{background:'rgba(244, 244, 244, 1)'}}>
                                    <img src={Instagram} alt="" width={24} height={24} />
                                </div>
                                <div className="rounded-full w-[70px] h-[70px] flex items-center justify-center" style={{background:'rgba(244, 244, 244, 1)'}}>
                                    <img src={Facebook} alt="" width={24} height={24} />
                                </div>
                                <div className="rounded-full w-[70px] h-[70px] flex items-center justify-center" style={{background:'rgba(244, 244, 244, 1)'}}>
                                    <img src={Telegram} alt="" width={24} height={24} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-[427px] h-[543px] flex items-end justify-center" style={{borderRadius:'250px 250px 30px 30px', background:'rgba(26, 136, 92, 1)'}}>
                                <img src={Teacher2} alt="teacher" width={309} height={479}/>
                            </div>
                            <div className="pt-[20px]">
                                <button className="rounded-[10px] py-[22px] w-[427px] text-[30px] cursor-pointer" style={{fontFamily:'Inter', fontWeight:'600', color:'rgba(255, 255, 255, 1)', background:'rgba(0, 0, 0, 1)'}}>Abbos</button>
                            </div>
                        </div>
                            <div className="absolute -top-[40px] right-[950px]">
                                <img src={CirclesLeft} alt="" width={516} height={873}/>
                            </div>
                    </div>

                    <div className="flex items-center gap-[20px] relative">
                        <div>
                            <div className="w-[427px] h-[543px] flex items-end justify-center" style={{borderRadius:'250px 250px 30px 30px', background:'rgba(210, 32, 55, 1)'}}>
                                <img src={Teacher3} alt="teacher" width={265} height={479}/>
                            </div>
                            <div className="pt-[20px]">
                                <button className="rounded-[10px] py-[22px] w-[427px] text-[30px] cursor-pointer" style={{fontFamily:'Inter', fontWeight:'600', color:'rgba(255, 255, 255, 1)', background:'rgba(0, 0, 0, 1)'}}>Evilina</button>
                            </div>
                        </div>
                        <div className="w-[430px]">
                            <h3 className="text-[33px] pb-[30px]" style={{fontFamily:'Inter', fontWeight:'700', color:'rgba(0, 0, 0, 1)'}}>Evilina</h3>
                            <p className="text-[30px] pb-[20px]" style={{fontFamily:'Inter', fontWeight:'500', color:'rgba(0, 0, 0, 1)'}}>Learn IT technology course from the most professional teachers. She has 8 years of experience</p>
                            <div className="flex items-center pb-[20px]">
                                <img src={person1} alt="person" width={38} height={38}/>
                                <img src={person2} alt="person" width={38} height={38}/>
                                <img src={person3} alt="person" width={38} height={38}/>
                                <p className="text-[24px] pl-[10px]"  style={{fontFamily:'Inter', fontWeight:'600', color:'rgba(0, 0, 0, 1)'}}>+52k Happy student</p>
                            </div>
                            <div className="flex gap-[5px]">
                                <img src={Star} alt="" width={30} height={30}/>
                                <img src={Star} alt="" width={30} height={30}/>
                                <img src={Star} alt="" width={30} height={30}/>
                                <img src={Star} alt="" width={30} height={30}/>
                            </div>
                            <div className="flex pt-[30px] gap-[20px]">
                                <div className="rounded-full w-[70px] h-[70px] flex items-center justify-center" style={{background:'rgba(244, 244, 244, 1)'}}>
                                    <img src={Instagram} alt="" width={24} height={24} />
                                </div>
                                <div className="rounded-full w-[70px] h-[70px] flex items-center justify-center" style={{background:'rgba(244, 244, 244, 1)'}}>
                                    <img src={Facebook} alt="" width={24} height={24} />
                                </div>
                                <div className="rounded-full w-[70px] h-[70px] flex items-center justify-center" style={{background:'rgba(244, 244, 244, 1)'}}>
                                    <img src={Telegram} alt="" width={24} height={24} />
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-15 -right-[60px]">
                            <img src={CirclesRight} alt="" width={516} height={873} />
                        </div>
                    </div>
                </div>

                <div className="absolute top-[850px] right-0">
                    <img src={CirclesRight} alt="" width={516} height={873}/>
                </div>

                <div className="flex justify-between pl-[60px] pt-[120px] pr-[80px]">
                    <div className="relative">
                        <div className="flex flex-col gap-[20px]">
                            <img src={Teacher5} alt="Teacher" width={315} height={300}/>
                            <img src={Teacher6} alt="Teacher" width={203} height={193} />
                        </div>
                        <div className="absolute top-[342px] left-[225px]">
                            <img src={Teacher7} alt="Teacher" width={427} height={400}/>
                        </div>
                    </div>

                    <div className="w-[651px] pt-[115px]">
                        <h3 className="text-[48px]" style={{fontFamily:'Inter', fontWeight:'700', color:'rgba(0, 0, 0, 1)'}}>Make Your Learning Enjoyable</h3>
                        <p className="text-[24px] pt-[50px] pb-[30px]"  style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(0, 0, 0, 1)'}}>There are many website for learning online but we have plenty of courses teach by our professional tutor who been in the industry for long time</p>
                        <div className="flex gap-[30px] items-center">
                            <img src={PeapleIcon} alt="" width={61} height={61}/>
                            <div>
                                <span className="text-[24px] " style={{fontFamily:'Inter', fontWeight:'600', color:'rgba(0, 0, 0, 1)'}}>Easy Accessible</span>
                                <p className="text-[16px] pt-[10px]" style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(0, 0, 0, 1)'}}>Material are easy to access and can be downloaded</p>
                            </div>
                        </div>

                        <div className="flex gap-[30px] items-center pt-[40px]">
                            <img src={CommentIcon} alt="" width={61} height={61}/>
                            <div>
                                <span className="text-[24px] " style={{fontFamily:'Inter', fontWeight:'600', color:'rgba(0, 0, 0, 1)'}}>More Affordable</span>
                                <p className="text-[16px] pt-[10px]" style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(0, 0, 0, 1)'}}>Have affordable price with attractive discount</p>
                            </div>
                        </div>

                        <div className="flex gap-[30px] items-center pt-[40px]">
                            <img src={ RingBellIcon} alt="" width={61} height={61}/>
                            <div>
                                <span className="text-[24px] " style={{fontFamily:'Inter', fontWeight:'600', color:'rgba(0, 0, 0, 1)'}}>Flexible Time</span>
                                <p className="text-[16px] pt-[10px]" style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(0, 0, 0, 1)'}}>You can watch any video af any course when you are available</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>


            <Footer/>
        </div>
    )
}; export default Teachers;