import React, { useState } from "react";
import Logo from '../assets/images/logo.svg';
import Menu from '../assets/images/menu.svg';
import Tele from '../assets/images/teleop.svg';
import Email from '../assets/images/email_3178158.png';
import Phone from '../assets/images/telephone-call_3059561.png';
import Image2 from '../assets/images/7.png';
import Image3 from '../assets/images/8.png';
import Image4 from '../assets/images/4.jpg';
import Image41 from '../assets/images/5.png';
import Image6 from '../assets/images/6.png';
import Image10 from '../assets/images/1.png';
import Image11 from '../assets/images/2.png';
import Image12 from '../assets/images/3.jpg';
import Image13 from '../assets/images/free-photo-of-l-nh-tuy-t-phong-c-nh-thien-nhien.jpeg';
import Profile from '../assets/images/profile.jpg';
import FbIcon from '../assets/icons/facebook.svg';
import Insta from '../assets/icons/FormkitInstagram.svg';
import Home from '../assets/images/home.webp';
import Logo1 from '../assets/images/only-logo.png';
import './homepage.css';

import { useNavigate } from "react-router";

const Homepage = () => {
    const navigate = useNavigate();
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Hàm để mở popup
    const openPopup = () => {
        setIsPopupVisible(true);
    };

    // Hàm để đóng popup
    const closePopup = () => {
        setIsPopupVisible(false);
    }

    return (
        <div className="pb-4">
            <div className="hidden sm:block fixed top-0 right-0 w-[40px] h-[40px] sm:w-12 sm:h-12 z-[1000] " onClick={() => navigate('/menu')}>
                <img src={Menu} alt='logo-menu' />
            </div>
            <div className="mt-4 flex flex-col justify-center items-center py-8">
                <img src={Logo} alt='logo' className="w-[150px] h-[120px]" />
                <p className="font-medium text-[22px] sm:text-[30px] lg:text-[40px]  uppercase">Đắm say văn hóa</p>
                <p className="text-[16px] sm:text-[20px] lg:text-[28px] leading-4">Khám phá Việt Nam</p>
            </div>
            <div className="mt-8 px-2">
                <div className="inline-flex grid-rows-2 gap-1">
                    <div className="w-1/2 object-cover items-center justify-center">
                        <img src={Image6} alt="image" className="w-full object-fit" />
                    </div>
                    <div className="w-1/2 grid-rows-2 inline-flex gap-1">
                        <div className="w-1/2" >
                            <img src={Image2} alt='image' className="pb-1" />
                            <img src={Image3} alt='image' className="pb-1" />
                            <img src={Image3} alt='image' className="pb-1" />
                            <img src={Image3} alt='image' />
                        </div>
                        <div className="w-1/2">
                            <img src={Image3} alt='image' className="pb-1" />
                            <img src={Image3} alt='image' className="pb-1" />
                            <img src={Image3} alt='image' className="pb-1" />
                            <img src={Image3} alt='image' />

                        </div>
                    </div>
                </div>
                {/* <div className="mt-8 relative">
                    <img src={Home} alt="image" className="w-full h-50 lg:h-100 lg:h-[900px] object-fit bg-cover" />
                    <p className="leading-5 absolute lg:top-10 top-4 text-center text-[16px] lg:text-[35px] sm:text-[30px] font-medium w-full text-size">
                        Điều gì làm sản phẩm của chúng tôi trở nên khác biệt ?
                    </p>
                    <div className="absolute top-10 mt-2 lg:top-20 flex flex-col items-center">
                        <p className="leading-5 font-medium text-[10px] sm:text-[12px] lg:text-[12px] lg:w-[55%] sm:w-[55%] w-[80%]">
                            Trải nghiệm không chỉ là khám phá thiên nhiên mà còn là hành trình hướng tới lối sống bền vững.
                            Khi tham gia tour, bạn sẽ nhận được một túi thổ cẩm độc đáo thay thế túi nilon, góp phần bảo vệ môi trường.
                            Đặc biệt, mỗi khoảnh khắc đáng nhớ sẽ được lưu giữ trong cuốn sổ thiết kế riêng từ công ty, với 5 bức ảnh Polaroid màu sắc ghi lại những khoảnh khắc đáng nhớ.
                        </p>
                        <p className="leading-5 mt-4 font-medium text-[10px] sm:text-[12px] lg:text-[12px] lg:w-[55%] sm:w-[55%] w-[80%]">
                            Ngoài ra, khi bạn lựa chọn tour của chúng tôi, bạn không chỉ được chiêm ngưỡng thiên nhiên hùng vĩ mà còn có cơ hội giao lưu, học hỏi và hỗ trợ cộng đồng địa phương.
                            Mỗi chuyến đi của bạn là một đóng góp vào việc bảo tồn ngôn ngữ, chữ viết, phong tục tập quán của đồng bào các dân tộc.
                            Hãy để hành trình của bạn trở thành một câu chuyện ý nghĩa và đóng góp vào việc bảo tồn giá trị văn hóa quý báu của cộng đồng địa phương!
                        </p>
                    </div>
                    <div className="absolute w-[350px] left-[54px] sm:w-[700px] sm:left-36 sm:top-[280px] lg:w-[800px] lg:w-full top-60 lg:left-80 lg:top-80">
                        <img src={Image41} alt='image' className="object-fit flex justify-center items-center" />
                    </div>
                </div> */}
                <div className="mt-8 relative">
                    <img src={Home} alt="image" className="w-full h-50 lg:h-100 lg:h-[900px] object-fit bg-cover" />
                    <p className="res-text leading-5 absolute lg:top-10 top-4 text-center text-[16px] lg:text-[35px] sm:text-[30px] font-medium w-full text-size">
                        Điều gì làm sản phẩm của chúng tôi trở nên khác biệt ?
                    </p>
                    <div className="absolute top-10 mt-2 lg:top-20 flex flex-col items-center">
                        <p className="res-text-one leading-5 font-medium text-[10px] sm:text-[12px] lg:text-[12px] lg:w-[55%] sm:w-[55%] w-[80%]">
                            Trải nghiệm không chỉ là khám phá thiên nhiên mà còn là hành trình hướng tới lối sống bền vững.
                            Khi tham gia tour, bạn sẽ nhận được một túi thổ cẩm độc đáo thay thế túi nilon, góp phần bảo vệ môi trường.
                            Đặc biệt, mỗi khoảnh khắc đáng nhớ sẽ được lưu giữ trong cuốn sổ thiết kế riêng từ công ty, với 5 bức ảnh Polaroid màu sắc ghi lại những khoảnh khắc đáng nhớ.
                        </p>
                        <p className="res-text-two leading-5 mt-4 font-medium text-[10px] sm:text-[12px] lg:text-[12px] lg:w-[55%] sm:w-[55%] w-[80%]">
                            Ngoài ra, khi bạn lựa chọn tour của chúng tôi, bạn không chỉ được chiêm ngưỡng thiên nhiên hùng vĩ mà còn có cơ hội giao lưu, học hỏi và hỗ trợ cộng đồng địa phương.
                            Mỗi chuyến đi của bạn là một đóng góp vào việc bảo tồn ngôn ngữ, chữ viết, phong tục tập quán của đồng bào các dân tộc.
                            Hãy để hành trình của bạn trở thành một câu chuyện ý nghĩa và đóng góp vào việc bảo tồn giá trị văn hóa quý báu của cộng đồng địa phương!
                        </p>
                    </div>
                    <div className="absolute res-img inset-0 flex justify-center items-center sm:top-[600px] top-[450px]">
                        <img src={Image41} alt="image" className="object-contain w-[400px] sm:w-[800px] lg:w-[900px]" />
                    </div>
                </div>

                <div className="res-des flex mt-[250px] lg:mt-[320px] sm:mt-[300px] justify-center items-center">
                    <div className="w-1/2">
                        <img src={Image12} alt="image" />
                    </div>
                    <div className="w-1/2 px-2">
                        <p className="res-text-des font-medium text-[20px] sm:text-[40px] lg:text-[50px] leading-4">Điểm đến của chúng tôi</p>
                        <p className="lg:text-[25px] sm:text-[23px] text-[12px] leading-5 lg:mt-8 sm:mt-7 mt-2">Khám phá Việt Nam</p>
                        <p className="lg:text-[25px] sm:text-[23px] text-[12px] leading-5 lg:mt-6 sm:mt-5 mt-2">“Đắm say văn hóa, khám phá Việt Nam” - VNomas</p>
                        <div className="flex mt-5 gap-8 lg:text-[20px] sm:text-[16px] text-[12px]">
                            <p><span className="font-medium text-black]">Bắc</span> <span className="text-[#742B0C]">(29)</span></p>
                            <p><span className="font-medium text-black]">Trung</span> <span className="text-[#742B0C]">(29)</span></p>
                            <p><span className="font-medium text-black]">Nam</span> <span className="text-[#742B0C]">(29)</span></p>
                        </div>
                        <button className="res-des-mt sm:px-6 sm:py-3 px-4 py-1 rounded-[50px] bg-[#742B0C]/50 mt-10 font-medium text-white sm:text-[20px] text-[16px]">Khám phá ngay</button>
                    </div>
                </div>
                <div className="relative">
                    <img src={Image13} alt="image" className="sm:h-[630px] w-full h-[350px]" />
                    <div className="absolute sm:top-28 sm:left-10 top-5 left-5">
                        <p className="font-medium sm:text-[45px] text-[18px] text-white">Miền đất Tây Bắc sống động…</p>
                        <p className="w-1/2 sm:text-[15px] text-[11px] text-white">Tìm hiểu thêm về nguồn cảm hứng của bạn và những ý tưởng, lời khuyên đến từ những du khách trước đó…</p>
                        <button className="sm:px-3 sm:py-2 px-2 py-1 rounded-[20px] text-[12px] sm:text-[16px] bg-[#742B0C]/50 mt-2 font-medium text-white">Tìm hiểu thêm</button>
                    </div>
                    <img src={Image10} alt="image" className="absolute sm:top-[360px] top-[200px] right-5 w-[150px] h-[200px] sm:right-10 sm:w-[350px] sm:h-[350px]" />
                    <img src={Image11} alt="image" className="absolute sm:top-[260px] sm:right-[369px] sm:w-[350px] sm:h-[400px] top-[180px] right-[150px] w-[150px] h-[200px]" />
                </div>
                <div className="res-logo mt-32 flex flex-col justify-center items-center w-full">
                    <img src={Logo1} alt="profile_image" className=" w-40 h-40 rounded-full" />
                    <p className="font-medium sm:text-2xl text-[12px] tracking-[6px] leading-10 res-text-three">LIÊN HỆ VỚI TƯ VẤN VIÊN CỦA VNOMAS</p>
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
                    <button className="sm:px-8 py-2 px-6 rounded-[20px] bg-[#742B0C]/50 mt-2 font-medium text-white" onClick={openPopup}>Trò chuyện ngay!</button>
                </div>
            </div>
            {isPopupVisible && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-[800px] p-6 relative">
                        <button
                            type="button"
                            className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-gray-900"
                            onClick={closePopup}
                        >
                            &times;
                        </button>
                        <div className='inline-flex gap-44'>
                            <img src={Logo1} className='w-24 h-24' />
                            <h2 className="text-[30px] font-bold mb-4 text-center mt-2">Trò chuyện nào!!</h2>
                        </div>
                        <form className='px-8'>
                            <div className="mb-4 flex flex-row items-center gap-2">
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

export default Homepage;