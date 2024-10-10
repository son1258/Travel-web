import { useNavigate } from "react-router";
import ExImage from '../assets/images/ex.jpg';
import Menu from '../assets/images/menu.svg';
import Logo1 from '../assets/images/only-logo.png';
import EX1 from '../assets/images/ex1.jpg';
import EX2 from '../assets/images/ex2.jpg';
import EX3 from '../assets/images/ex3.jpg';
import EX4 from '../assets/images/ex4.jpg';
import EX5 from '../assets/images/ex5.jpeg';
import EX6 from '../assets/images/ex6.jpeg';
import EX7 from '../assets/images/ex7.jpg';
import EX8 from '../assets/images/ex8.jpeg';
import SearchIcon from '../assets/icons/search_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png';
import CalendarIcon from '../assets/icons/calendar_month_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png';
import S1 from '../assets/images/z5844542045162_65465e05905351681f72e0718c859d1f.jpg';
import S2 from '../assets/images/z5844542045134_778f00731808cf06518fb5e98f073862.jpg';
import S3 from '../assets/images/z5844542045163_445b28ec9cbd71b612750ead30ee11bd.jpg';
import Tele from '../assets/images/teleop.svg';
import Email from '../assets/images/email_3178158.png';
import Phone from '../assets/images/telephone-call_3059561.png';
import Profile from '../assets/images/profile.jpg';
import FbIcon from '../assets/icons/facebook.svg';
import Insta from '../assets/icons/FormkitInstagram.svg';
import { useState } from "react";
import './experience.css';

function Experience() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Hàm để mở popup
    const openPopup = () => {
        setIsPopupVisible(true);
    };

    // Hàm để đóng popup
    const closePopup = () => {
        setIsPopupVisible(false);
    };
    const navigate = useNavigate();
    return (
        <div>
            <div className="hidden sm:block fixed top-0 right-0 sm:w-12 sm:h-12 z-[1000]" onClick={() => navigate('/menu')}>
                <img src={Menu} alt='logo-menu' />
            </div>
            <div className="py-[20px]"
                style={{
                    backgroundImage: `url(${ExImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="res-nav flex justify-evenly items-center sm:px-[100px] sm:py-[100px] py-[30px] text-white font-medium sm:text-[20px] xl:text-[30px]">
                    <p onClick={() => navigate('/destination')} className='cursor-pointer'>ĐIỂM ĐẾN</p>
                    <p onClick={() => navigate('/experience')} className='cursor-pointer'>TRẢI NGHIỆM</p>
                    <p onClick={() => navigate('/about')} className='cursor-pointer'>VỀ CHÚNG TÔI</p>
                    <p onClick={openPopup} className='cursor-pointer'>LIÊN HỆ</p>
                </div>
                <div className="res-text text-center font-medium text-[20px] sm:text-[28px] xl:text-[36px] text-white mt-2">
                    <p>Cao Bằng - Bắc Kạn</p>
                    <p>HƠI THỞ NÚI RỪNG - TINH HOA MIỀN SƠN CƯỚC</p>
                </div>
                <div className="flex justify-center items-center sm:mt-8 mt-4 pb-[40px] sm:pb-[100px] res-pb">
                    <button type="button" className="res-text-bt px-6 py-2 rounded-[30px] bg-white font-medium text-[20px] xl:text-[36px] xl:rounded-[40px] text-[#742B0C]" onClick={() => navigate('/experience2')}>Khám phá trải nghiệm</button>
                </div>
            </div>
            <div className="mt-12 grid sm:grid-cols-4 grid-cols-2 xl:gap-8 gap-2 px-2">
                <img src={EX1} alt="eximage" className="h-[220px] xl:w-[460px] xl:h-[280px]" />
                <img src={EX4} alt="eximage" className="h-[220px] xl:w-[460px] xl:h-[280px]" />
                <img src={EX6} alt="eximage" className="h-[220px] xl:w-[460px] xl:h-[280px]" />
                <img src={EX7} alt="eximage" className="h-[220px] xl:w-[460px] xl:h-[280px]" />
                <img src={EX8} alt="eximage" className="h-[220px] xl:w-[460px] xl:h-[280px]" />
                <img src={EX2} alt="eximage" className="h-[220px] xl:w-[460px] xl:h-[280px]" />
                <img src={EX3} alt="eximage" className="h-[220px] xl:w-[460px] xl:h-[280px]" />
            </div>
            <div className="mt-10 flex flex-col items-center" >
                <img src={Logo1} alt="logoimg" className="w-40 h-40 xl:w-[200px] xl:h-[200px]" />
                <p className="font-medium text-[40px] xl:text-[50px]">Cao Bằng - Bắc Kạn</p>
                <p className="w-2/3 mt-2 xl:text-[28px] text-center">Chuyến đi như một hành trình khám phá linh hồn của núi rừng, nơi những câu chuyện dân gian hòa quyện với cuộc sống hiện tại. Chúng ta sẽ cùng nhau tìm hiểu về văn hóa, phong tục tập quán của người Tày - Nùng, khám phá những bí ẩn của thiên nhiên và tận hưởng vẻ đẹp hoang sơ của núi rừng. </p>
            </div>
            {/* <div className="hidden md:flex mt-10 inline-flex gap-4 ml-10 sm:gap-8 sm:ml-20 xl:px-20">
                <div className="w-1/2 relative">
                    <input className="px-2 py-2 sm:w-[500px] xl:w-[700px] border-[1px] border-[black]/50 rounded-lg" placeholder="Tìm tour" />
                    <img src={SearchIcon} alt="search" className="w-6 h-5 absolute top-[10px]  sm:right-12 md:right-10" />
                </div>
                <div className="w-full sm:w-1/2 sm:ml-20 xl:w-full xl:ml-32 inline-flex sm:gap-16">
                    <div className="w-1/2 relative xl:w-full w-full">
                        <input className="px-2 py-2 border-[1px] border-[black]/50 rounded-lg xl:w-[300px]" placeholder="Từ ngày" />
                        <img src={CalendarIcon} alt="Calendar" className="w-6 h-5 absolute top-[10px] right-12" />
                    </div>
                    <div className="w-1/2 relative w-full">
                        <input className="px-2 py-2 border-[1px] border-[black]/50 rounded-lg xl:w-[300px]" placeholder="Đến ngày" />
                        <img src={CalendarIcon} alt="Calendar" className="w-6 h-5 absolute top-[10px] right-12" />
                    </div>
                </div>
            </div> */}
            <div className="hidden md:flex mt-10 gap-4 sm:gap-8 xl:px-20 px-10">
                {/* Search Input */}
                <div className="w-1/2 relative">
                    <input className="px-2 py-2 w-full border-[1px] border-[black]/50 rounded-lg" placeholder="Tìm tour" />
                    <img src={SearchIcon} alt="search" className="w-6 h-5 absolute top-[10px] sm:right-6 md:right-4" />
                </div>

                {/* Date Inputs */}
                <div className="w-full sm:w-1/2 sm:ml-20 xl:w-full xl:ml-32 inline-flex sm:gap-16">
                    <div className="w-full relative">
                        <input className="px-2 py-2 w-full border-[1px] border-[black]/50 rounded-lg" placeholder="Từ ngày" />
                        <img src={CalendarIcon} alt="Calendar" className="w-6 h-5 absolute top-[10px] right-4" />
                    </div>
                    <div className="w-full relative">
                        <input className="px-2 py-2 w-full border-[1px] border-[black]/50 rounded-lg" placeholder="Đến ngày" />
                        <img src={CalendarIcon} alt="Calendar" className="w-6 h-5 absolute top-[10px] right-4" />
                    </div>
                </div>
            </div>


            <div className="mt-12 grid sm:grid-cols-3 grid-cols-1 px-2 gap-2 md:px-32">
                <img src={S1} alt="eximage" className="h-[350px] w-full" />
                <img src={S2} alt="eximage" className="h-[350px] w-full" />
                <img src={S3} alt="eximage" className="h-[350px] w-full" />
            </div>
            <div className="res-logo mt-16 flex flex-col justify-center items-center w-full">
                <img src={Logo1} alt="profile_image" className="w-40 h-40 rounded-full" />
                <p className="font-medium text-2xl tracking-[6px] leading-10 res-text-three">LIÊN HỆ VỚI TƯ VẤN VIÊN CỦA VNOMAS</p>
                <p className="sm:text-[12px] sm:w-[520px] text-[9px] px-8 sm:px-2">Đội ngũ Tư vấn viên của VNomas luôn sẵn sàng phản hồi và giải đáp các thắc mắc của quý khách 24/7 thông qua các kênh Mạng xã hội (Facebook, Instagram), số Hotline và Email của công ty.</p>
            </div>
            <div className="mt-8 sm:px-[220px] px-[20px] flex justify-evenly">
                <div className="flex flex-col items-center sm:text-[16px] text-[10px]">
                    <img src={Tele} alt="logo contact" className="sm:w-[40px] w-[20px] sm:h-[40px] h-[20px]" />
                    <a href="https://www.facebook.com/profile.php?id=61564523907773" target="_blank" className="">Chăm sóc khách hàng</a>
                </div>
                <div className="flex flex-col items-center sm:ml-[10px] sm:text-[16px] text-[10px]">
                    <img src={Phone} alt="logo phone" className="sm:w-[40px]  w-[20px] sm:h-[40px] h-[20px]" />
                    <p>(+84) 832.123.231</p>
                </div>
                <div className="flex flex-col items-center sm:text-[16px] text-[10px]">
                    <img src={Email} alt="logo email" className="sm:w-[40px]  w-[20px] sm:h-[40px] h-[20px]" />
                    <p>vnomas.contact@gmail.com</p>
                </div>
            </div>
            <div className="mt-4 flex justify-center items-center">
                <button className="px-8 py-2 rounded-[20px] bg-[#742B0C]/50 mt-2 font-medium text-white" onClick={openPopup}>Trò chuyện ngay!</button>
            </div>
            {isPopupVisible && (
                <div className=" fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="res-chat bg-white rounded-lg shadow-lg w-[800px] p-6 relative">
                        <button
                            type="button"
                            className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-gray-900"
                            onClick={closePopup}
                        >
                            &times;
                        </button>
                        <div className='inline-flex gap-44 res-gap'>
                            <img src={Logo1} className='w-24 h-24' />
                            <h2 className="text-[30px] font-bold mb-4 text-center mt-2 res-text-chat">Trò chuyện nào!!</h2>
                        </div>
                        <form className='sm:px-8'>
                            <div className="hidden sm:flex mb-4 flex flex-row items-center gap-2">
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    placeholder="Nhập họ và tên đệm"
                                    className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"

                                />
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Nhập tên"
                                    className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"

                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    placeholder="Nhập họ và tên đệm"
                                    className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"

                                />
                            </div>
                            <div className="mb-4">
                            <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Nhập tên"
                                    className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"

                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Nhập email"
                                    className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"

                                />
                            </div>
                            <div className="mb-4">
                                <select className='w-full border-[1.5px] p-3 rounded-lg'>
                                    <option>Tôi Muốn</option>
                                    <option>Tôi có một câu hỏi chung</option>
                                    <option>Tôi muốn có báo giá chi tiết cho một chuyến đi cụ thể</option>
                                    <option>Đặt lịch tư vấn cho hành trình "Từ đầu"</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Nội dung
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Nhập nội dung"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    rows="4"

                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                Gửi Mail
                            </button>
                        </form>
                    </div>
                </div>
            )}
            <div className="mt-12 sm:h-[430px] bg-black/85">
                <div className="inline-flex w-full text-white">
                    <div className="w-1/4 sm:px-[20px] px-2 sm:mt-16 mt-8">
                        <p className="font-medium sm:text-xl text-[12px] leading-4">Đăng kí</p>
                        <p className="sm:text-sm text-[10px] leading-5">Nhận thông tin và khuyến mãi mới nhất</p>
                        <input className="w-full text-black sm:px-2 py-1 px-1 sm:text-[16px] text-[10px] sm:rounded-lg rounded-[4px] mt-1" placeholder="Nhập vào email của bạn" />
                        <button className="sm:px-6 sm:py-2 px-2 py-1 sm:rounded-lg rounded-[4px] sm:text-[16px] text-[10px] bg-[#F6C8B4]/80 mt-2 font-medium text-white">Submit</button>
                        <p className="sm:mt-8 mt-2 font-medium">Social</p>
                        <div className="flex justify-between items-center w-[50px] mt-1">
                            <a href="https://www.facebook.com/profile.php?id=61564523907773" target="_blank"><img src={FbIcon} alt="social_logo" className="w-6 h-6" /></a>
                            <a href="https://www.instagram.com/vnomas.travel/?hl=en" target="_blank"><img src={Insta} alt="social_logo" className="w-6 h-6" /></a>
                        </div>
                    </div>
                    <div className="w-3/4 sm:px-[40px] px-1">
                        <div className="sm:mt-16 mt-8 flex justify-between">
                            <div>
                                <p className="font-medium sm:text-xl text-[12px] leading-4">Thông tin</p>
                                <ul className="sm:mt-4 mt-2 text-[8px] sm:text-sm text-white/40 list-disc pl-5">
                                    <li>Về chúng tôi</li>
                                    <li>Liên hệ ngay với chúng tôi</li>
                                    <li>Online Enquiry</li>
                                    <li>Liên hệ ngay với chúng tôi</li>
                                    <li>Đối tác</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium sm:text-xl text-[12px] leading-4">Trải nghiệm</p>
                                <ul className="sm:mt-4 mt-2 text-[8px] sm:text-sm text-white/40 list-disc pl-5 sm:w-[250px] w-[80px]">
                                    <li>Cao Bằng - Bắc Kạn | HƠI THỞ NÚI RỪNG - TINH HOA MIỀN SƠN CƯỚC</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium sm:text-xl text-[12px] leading-4">Điểm đến</p>
                                <ul className="sm:mt-4 mt-2 text-[8px] sm:text-sm text-white/40 list-disc pl-5">
                                    <li>Bắc</li>
                                    <li>Trung</li>
                                    <li>Nam</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium sm:text-xl text-[12px] leading-4">Blog</p>
                                <ul className="sm:mt-4 mt-2 text-[8px] sm:text-sm text-white/40 list-disc pl-5">
                                    <li>Khám phá ngay</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] bg-white sm:mt-12 mt-8 mx-[20px]"></div>
                <p className="uppercase py-8 text-[9px] text-white/80 text-center">WEBSITE BY McArnolds  © Copyright 2022 PYGMY ELEPHANT  </p>
            </div>
        </div>
    )
}

export default Experience;