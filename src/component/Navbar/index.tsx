import Promind from '../../assets/imgs/ProMind.png'
import ArrowDown from '../../assets/icons/arrowDown.svg'
import Search from '../../assets/icons/search.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import closeButton from '../../assets/icons/closeButton.svg'
import Person from '../../assets/imgs/regPerson.png'
import Whatsapp from '../../assets/icons/whatsappWhite.svg'
import FaceBook from '../../assets/icons/facebookWhite.svg'
import Telegram from '../../assets/icons/telegramwhite.svg'
import ArrowRight from '../../assets/icons/arrowRight.svg'




  const Navbar: React.FC = () => {
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);

    const toggleModal= () => {
      setShowModal(!showModal);
    };


    return (
      <div className='h-[80px] py-[15px] pl-[80px] pr-[60px] z-50 bg-white'  >

        <div className='flex items-center '>
          <div className='pr-[168px] pt-[10px]' onClick={() => navigate('/')}>
            <img src={Promind} alt="Promind"  />
          </div>
          <div className='flex gap-[183px]'>
            <ul className='flex list-none gap-[40px]'>
              <li className='flex items-center text-[16px] gap-[5px] cursor-pointer'> <a href="#" style={{textDecoration:'none', fontFamily:'Inter', fontWeight:'400', color:'rgba(0, 0, 0, 1)'}} onClick={() => navigate('/Courses')}>Courses</a> <img src={ArrowDown} alt="" /> </li>
              <li className=' flex items-center text-[16px] gap-[5px] cursor-pointer'><a href="#" style={{textDecoration:'none' , fontFamily:'Inter', fontWeight:'400', color:'rgba(0, 0, 0, 1)'}}>About us</a> <img src={ArrowDown} alt="" /> </li>
              <li className=' flex items-center text-[16px] gap-[5px] cursor-pointer'><a href="#" style={{textDecoration:'none' , fontFamily:'Inter', fontWeight:'400', color:'rgba(0, 0, 0, 1)'}} onClick={() => navigate('/Teachers')}>Our teachers</a> <img src={ArrowDown} alt="" /> </li>
              <li className=' flex items-center text-[16px] gap-[5px] cursor-pointer'  ><a href="#" style={{textDecoration:'none' , fontFamily:'Inter', fontWeight:'400', color:'rgba(0, 0, 0, 1)'}}>Eng</a> <img src={ArrowDown} alt="" /> </li>
            </ul>
            <div className='relative flex items-center gap-[40px]'>
              <img src={Search} alt="" width={24} height={24} className='absolute left-[17px] block'/>
              <input type="text" placeholder='search...' className='outline-none text-[12px] border-none flex rounded-[30px] py-[13px] pl-[49px]  w-[157px]' style={{background:'rgba(244, 244, 244, 1)'}}/>
              <div >
                <button className='text-[16px] rounded-[20px] py-[10px] px-[25px] border-none cursor-pointer ' style={{fontFamily:'Inter', fontWeight:'400', background:'rgba(255, 157, 1, 1)'}} onClick={toggleModal}>Sign Up</button>

                {showModal && (
                  <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-500 ease-out ${showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} style={{transition:'0.5s'}}>
                    <div className={`w-[1096px] bg-white relative rounded-[20px] shadow-lg pt-[50px] pl-[50px] pr-[90px] pb-[117px] transform transition-transform duration-500 ease-out ${showModal ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`} >
                      <div className='flex items-center justify-between'>
                        <div>
                          <h2 className='text-[30px] pb-[10px]' style={{fontFamily:'Inter', fontWeight:'600' , color:'rgba(0, 0, 0, 1)'}}>Add Contact</h2>
                          <p className='text-[16px] pb-[20px]' style={{fontFamily:'Inter', fontWeight:'400' , color:'rgba(0, 0, 0, 1)'}}>Hide your personal information</p>
                        </div>
                        <button  onClick={toggleModal} className='bg-white border-none'>
                            <img src={closeButton} alt="" />
                        </button>
                      </div>


                      <div className='flex justify-between '>
                        <form >
                          <div className='flex flex-col pb-[20px]'>
                            <label className='text-[14px] pl-[10px] pb-[5px]' style={{fontFamily:'Inter', fontWeight:'400' , color:'rgba(0, 0, 0, 0.7)'}}>First name</label>
                            <input type="text" className='w-[409px] h-[50px] rounded-[10px] outline-none pl-[10px]' style={{border: '1px solid rgba(137, 137, 137, 1)'}}/>
                          </div>

                          <div className='flex flex-col pb-[20px] '>
                            <label className='text-[14px] pl-[10px] pb-[5px]' style={{fontFamily:'Inter', fontWeight:'400' , color:'rgba(0, 0, 0, 0.7)'}}>Last name</label>
                            <input type="text" className='w-[409px] h-[50px] rounded-[10px] outline-none pl-[10px]' style={{border: '1px solid rgba(137, 137, 137, 1)'}}/>
                          </div>

                          <div className='flex flex-col pb-[20px]'>
                            <label className='text-[14px] pl-[10px] pb-[5px]' style={{fontFamily:'Inter', fontWeight:'400' , color:'rgba(0, 0, 0, 0.7)'}}>Your email</label>
                            <input type="email" className='w-[409px] h-[50px] rounded-[10px] outline-none pl-[10px]' style={{border: '1px solid rgba(137, 137, 137, 1)'}}/>
                          </div>

                          <div className='flex flex-col pb-[30px]'>
                            <label className='text-[14px] pl-[10px] pb-[5px]' style={{fontFamily:'Inter', fontWeight:'400' , color:'rgba(0, 0, 0, 0.7)'}}>Your phone number</label>
                            <input type="text" className='w-[409px] h-[50px] rounded-[10px] outline-none pl-[10px]' style={{border: '1px solid rgba(137, 137, 137, 1)'}}/>
                          </div>

                          <button className='flex items-center justify-center rounded-[10px] gap-[10px] border-none w-[409px] py-[15px] cursor-pointer' style={{color:'rgba(255, 255, 255, 1)' , background:'rgba(48, 123, 116, 1)'}}>Submit <img src={ArrowRight} alt="" /> </button>

                        </form>

                        <div className='flex flex-col items-center'>
                          <img src={Person} alt="" className='pb-[30px]'/>
                          <div className='flex gap-[20px]'>
                            <img src={Whatsapp} alt="" className='cursor-pointer'/>
                            <img src={FaceBook} alt="" className='cursor-pointer'/>
                            <img src={Telegram} alt="" className='cursor-pointer'/>
                          </div>
                        </div>


                      </div>
                      
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

    </div>





  );
};

export default Navbar;
