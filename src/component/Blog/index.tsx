import Footer from "../Footer";
import Navbar from "../Navbar";
import BlogImg from '../../assets/imgs/blogImg.jpg'




export const Blog: React.FC = () => {

    const news = [
        {
            id: 1,
            image: BlogImg,
            name: 'Blog',
            date: '24,May 2024',
            title:'The Art Taking Right Decission To Success',
            description: 'Learn how to take the right decission in critical time to get succes and how to overcome bad times'
        },
        {
            id: 2,
            image: BlogImg,
            name: 'Blog',
            date: '24,May 2024',
            title:'The Art Taking Right Decission To Success',
            description: 'Learn how to take the right decission in critical time to get succes and how to overcome bad times'
        },
        {
            id: 3,
            image: BlogImg,
            name: 'Blog',
            date: '24,May 2024',
            title:'The Art Taking Right Decission To Success',
            description: 'Learn how to take the right decission in critical time to get succes and how to overcome bad times'
        },
    ]
    
    return (
        <div>
            <Navbar/>
            <div className="px-[60px] pt-[63px] pb-[270px]">
                <div className="pb-[50px]">
                    <span className="text-[24px]" style={{fontFamily:'Inter', fontWeight:'600', color:'rgba(255, 180, 60, 1)'}}>Our Blog</span>
                    <h2 className="text-[48px] pt-[5px]" style={{fontFamily:'Inter', fontWeight:'700', color:'rgba(48, 123, 116, 1)'}}>Latest News</h2>
                </div>
                <div className="flex gap-[20px] flex-wrap">
                    {news.map((item, index) => (
                        <div key={index} className="w-[427px] rounded-[20px]" style={{background:'rgba(238, 236, 236, 1)'}}>
                            <img style={{borderRadius:'20px 20px 0 0 '}}  src={item.image} alt="image" />
                            <div className="px-[20px] pt-[16px] pb-[25px]">
                                <div className="flex items-center justify-between pb-[24px]">
                                    <span className="text-[20px]" style={{fontFamily:'Inter', fontWeight:'600', color:'rgba(48, 123, 116, 1)'}}>{item.name}</span>
                                    <p className="text-[16px]" style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(255, 180, 60, 1)'}}>{item.date}</p>
                                </div>

                                <div className="pb-[20px]">
                                    <h3 className="text-[24px] pb-[12px]" style={{fontFamily:'Inter', fontWeight:'600', color:'rgba(0, 0, 0, 1)'}}>{item.title}</h3>
                                    <p className="text-[20px]" style={{fontFamily:'Inter', fontWeight:'400', color:'rgba(0, 0, 0, 1)'}}>{item.description}</p>
                                </div>
                                <button className="text-[20px] rounded-[10px] py-[10px] px-[15px] border-none cursor-pointer" style={{fontFamily:'Inter', fontWeight:'600', color:'rgba(48, 123, 116, 1)', background:'rgba(185, 225, 221, 1)'}}>Read More</button>
                            </div>

                        </div>
                    ))}
                </div>

            </div>



            <Footer/>
        </div>
    );

}; export default Blog;