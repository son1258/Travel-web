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
            <div className="fixed top-0 right-0 w-12 h-12 z-[1000]" onClick={() => navigate('/menu')}>
                <img src={Menu} alt='logo-menu' />
            </div>
            <div className="mt-4 flex flex-col justify-center items-center py-8">
                <img src={Logo} alt='logo' className="w-[150px] h-[120px]" />
                <p className="font-medium text-[40px]  uppercase">Đắm say văn hóa</p>
                <p className="text-[28px] leading-4">Khám phá Việt Nam</p>
            </div>
            <div className="mt-8">
                <div className="inline-flex grid-rows-2 gap-1">
                    <div className="w-1/2 object-cover items-center justify-center">
                        <img src={Image6} alt="image" className="w-full" />
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
                <div className="mt-8 relative">
                    <img src={Home} alt="image" className="w-full h-100" />
                    <p className="leading-5 absolute top-10 left-60 font-medium text-[30px] w-full">
                        Điều gì làm sản phẩm của chúng tôi trở nên khác biệt ?
                    </p>
                    <p className="leading-5  absolute top-20 left-[265px] font-medium text-[12px] text-center w-[55%]">
                        Trải nghiệm không chỉ là khám phá thiên nhiên mà còn là hành trình hướng tới lối sống bền vững.
                        Khi tham gia tour, bạn sẽ nhận được một túi thổ cẩm độc đáo thay thế túi nilon, góp phần bảo vệ môi trường.
                        Đặc biệt, mỗi khoảnh khắc đáng nhớ sẽ được lưu giữ trong cuốn sổ thiết kế riêng từ công ty, với 5 bức ảnh Polaroid màu sắc ghi lại những khoảnh khắc đáng nhớ.
                    </p>
                    <p className="leading-5 absolute top-40 left-[265px] font-medium text-[12px] w-[55%] text-center">
                        Ngoài ra, khi bạn lựa chọn tour của chúng tôi, bạn không chỉ được chiêm ngưỡng thiên nhiên hùng vĩ mà còn có cơ hội giao lưu, học hỏi và hỗ trợ cộng đồng địa phương.
                        Mỗi chuyến đi của bạn là một đóng góp vào việc bảo tồn ngôn ngữ, chữ viết, phong tục tập quán của đồng bào các dân tộc.
                        Hãy để hành trình của bạn trở thành một câu chuyện ý nghĩa và đóng góp vào việc bảo tồn giá trị văn hóa quý báu của cộng đồng địa phương!
                    </p>
                    <div className="absolute w-3/4 left-1/2 -translate-x-1/2 top-80">
                        <img src={Image41} alt='image' />
                    </div>
                </div>
                <div className="flex mt-[320px] justify-center items-center">
                    <div className="w-1/2">
                        <img src={Image12} alt="image" />
                    </div>
                    <div className="w-1/2 pl-4">
                        <p className="font-medium text-[50px] leading-4">Điểm đến của chúng tôi</p>
                        <p className="text-[25px] leading-5 mt-8">Khám phá Việt Nam</p>
                        <p className="text-[25px] leading-5 mt-6">“Đắm say văn hóa, khám phá Việt Nam” - VNomas</p>
                        <div className="flex mt-5 gap-8 text-[20px]">
                            <p><span className="font-medium text-black]">Bắc</span> <span className="text-[#742B0C]">(29)</span></p>
                            <p><span className="font-medium text-black]">Trung</span> <span className="text-[#742B0C]">(29)</span></p>
                            <p><span className="font-medium text-black]">Nam</span> <span className="text-[#742B0C]">(29)</span></p>
                        </div>
                        <button className="px-6 py-3 rounded-[50px] bg-[#742B0C]/50 mt-10 font-medium text-white text-[20px]">Khám phá ngay</button>
                    </div>
                </div>
                <div className="relative">
                    <img src={Image13} alt="image" className="h-[630px] w-full" />
                    <div className="absolute top-28 left-10">
                        <p className="font-medium text-[45px] text-white">Miền đất Tây Bắc sống động…</p>
                        <p className="w-1/2 text-[15px] text-white">Tìm hiểu thêm về nguồn cảm hứng của bạn và những ý tưởng, lời khuyên đến từ những du khách trước đó…</p>
                        <button className="px-3 py-2 rounded-[20px] bg-[#742B0C]/50 mt-2 font-medium text-white">Tìm hiểu thêm</button>
                    </div>
                    <img src={Image10} alt="image" className="absolute top-[360px] right-10 w-400px] h-[350px]" />
                    <img src={Image11} alt="image" className="absolute top-[260px] right-[369px] w-[350px] h-[400px]" />
                </div>
                <div className="mt-32 flex flex-col justify-center items-center w-full">
                    <img src={Logo1} alt="profile_image" className="w-40 h-40 rounded-full" />
                    <p className="font-medium text-2xl tracking-[6px] leading-10">LIÊN HỆ VỚI TƯ VẤN VIÊN CỦA VNOMAS</p>
                    <p className="text-[12px] w-[520px]">Đội ngũ Tư vấn viên của VNomas luôn sẵn sàng phản hồi và giải đáp các thắc mắc của quý khách 24/7 thông qua các kênh Mạng xã hội (Facebook, Instagram), số Hotline và Email của công ty.</p>
                </div>
                <div className="mt-8 px-[220px] flex justify-evenly">
                    <div className="flex flex-col items-center">
                        <img src={Tele} alt="logo contact" className="w-[40px] h-[40px]" />
                        <a href="https://www.facebook.com/profile.php?id=61564523907773" target="_blank">Chăm sóc khách hàng</a>
                    </div>
                    <div className="flex flex-col items-center ml-[46px]">
                        <img src={Phone} alt="logo phone" className="w-[40px] h-[40px]" />
                        <p>(+84) 832.123.231</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={Email} alt="logo email" className="w-[40px] h-[40px]" />
                        <p>vnomas.contact@gmail.com</p>
                    </div>
                </div>
                <div className="mt-4 flex justify-center items-center">
                    <button className="px-8 py-2 rounded-[20px] bg-[#742B0C]/50 mt-2 font-medium text-white" onClick={openPopup}>Trò chuyện ngay!</button>
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
            <div className="mt-12 h-[400px] bg-black/85">
                <div className="inline-flex w-full text-white">
                    <div className="w-1/4 px-[20px] mt-16">
                        <p className="font-medium text-xl leading-4">Đăng kí</p>
                        <p className="text-sm leading-5">Nhận thông tin và khuyến mãi mới nhất</p>
                        <input className="w-full text-black px-2 py-1 rounded-lg mt-1" placeholder="Nhập vào email của bạn" />
                        <button className="px-6 py-2 rounded-lg bg-[#F6C8B4]/80 mt-2 font-medium text-white">Submit</button>
                        <p className="mt-8 font-medium">Social</p>
                        <div className="flex justify-between items-center w-[50px] mt-1">
                            <a href="https://www.facebook.com/profile.php?id=61564523907773" target="_blank"><img src={FbIcon} alt="social_logo" className="w-6 h-6" /></a>
                            <a href="https://www.instagram.com/vnomas.travel/?hl=en" target="_blank"><img src={Insta} alt="social_logo" className="w-6 h-6" /></a>
                        </div>
                    </div>
                    <div className="w-3/4 px-[40px]">
                        <div className="mt-16 flex justify-between">
                            <div>
                                <p className="font-medium text-xl leading-4">Thông tin</p>
                                <ul className="mt-4 text-sm text-white/40 list-disc pl-5">
                                    <li>Về chúng tôi</li>
                                    <li>Liên hệ ngay với chúng tôi</li>
                                    <li>Online Enquiry</li>
                                    <li>Liên hệ ngay với chúng tôi</li>
                                    <li>Đối tác</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium text-xl leading-4">Trải nghiệm</p>
                                <ul className="mt-4 text-sm text-white/40 list-disc pl-5 w-[250px]">
                                    <li>Cao Bằng - Bắc Kạn | HƠI THỞ NÚI RỪNG - TINH HOA MIỀN SƠN CƯỚC</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium text-xl leading-4">Điểm đến</p>
                                <ul className="mt-4 text-sm text-white/40 list-disc pl-5">
                                    <li>Bắc</li>
                                    <li>Trung</li>
                                    <li>Nam</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium text-xl leading-4">Blog</p>
                                <ul className="mt-4 text-sm text-white/40 list-disc pl-5">
                                    <li>Khám phá ngay</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] bg-white mt-12 mx-[20px]"></div>
                <p className="uppercase mt-8 text-[9px] text-white/80 text-center">WEBSITE BY McArnolds  © Copyright 2022 PYGMY ELEPHANT  </p>
            </div>
        </div>
    )
}

export default Homepage;