import Footer from "../Footer";
import Navbar from "../Navbar";
import Course1 from '../../assets/imgs/Course1.png'
import Course2 from '../../assets/imgs/Course2.png'
import Course3 from '../../assets/imgs/Course3.png'




export const Courses: React.FC = () => {
    const courses = [
        {
            id:1,
            image: Course1,
            title:'UI/UX Design',
            description:'Learn about ux/ui design from professional mentors. A convenient opportunity for you',
            price:'$ 150.00'
        },
        {
            id:2,
            image: Course2,
            title:'Graphic Design',
            description:'Learn graphic design from professional mentors. A convenient opportunity for you',
            price:'$ 200.00'
        },
        {
            id:3,
            image: Course3,
            title:'IT Technology',
            description:'Learn about it technology from professional mentors. A convenient opportunity for you',
            price:'$ 300.00'
        }
    ]


    return (
        <div>
            <Navbar/>
            <div className="pl-[60px]  pb-[120px]">
                <div className=" pb-[50px]">
                    <h1 className="text-[24px]" style={{fontFamily: 'Inter', fontWeight:'500' , color:'rgba(255, 157, 1, 1)'}}>Our</h1>
                    <span className="text-[48px]" style={{fontFamily: 'Inter', fontWeight:'700' , color:'rgba(48, 123, 116, 1)'}}>Courses</span>
                </div>
                <div className="flex gap-[20px]">
                    {courses.map((item, key) => (
                        <div key={key} className="w-[427px] pb-[160px]">
                            <img src={item.image} alt="Course" width={427} height={335}/>
                            <div>
                                <h3 className="text-[24px] pb-[13px]" style={{fontFamily:'Inter' ,fontWeight:'700', color:'rgba(0, 0, 0, 1)'}}> {item.title} </h3>
                                <p className="text-[20px] pb-[20px]" style={{fontFamily:'Inter' ,fontWeight:'400', color:'rgba(0, 0, 0, 1)'}}> {item.description} </p>
                                <span className="text-[24px]" style={{fontFamily:'Inter' ,fontWeight:'400', color:'rgba(0, 0, 0, 1)'}}>{item.price}</span>
                            </div>
                            <div className="flex gap-[30px] pt-[20px]">
                                <button className="text-[20px] rounded-[10px] py-[10px] px-[20px] border-none cursor-pointer" style={{fontFamily:'Inter' ,fontWeight:'500', color:'rgba(0, 0, 0, 1)', background:'rgba(255, 157, 1, 1)'}}>Buy now</button>
                                <button className="text-[20px] rounded-[10px] py-[10px] px-[20px] border-none cursor-pointer" style={{fontFamily:'Inter' ,fontWeight:'500', color:'rgba(255, 255, 255, 1)', background:'rgba(48, 123, 116, 1)'}}>Add to cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <Footer/>
        </div>
    )
}; export default Courses;