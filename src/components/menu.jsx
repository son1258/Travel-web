import React, { useState } from "react";
import Logo1 from '../assets/images/only-logo.png';
import DES1 from '../assets/images/des1.webp';
import DES2 from '../assets/images/des2.webp';
import DES3 from '../assets/images/des3.webp';
import DES4 from '../assets/images/des4.webp';
import DES5 from '../assets/images/des5.webp';
import DES6 from '../assets/images/des6.webp';
import DES7 from '../assets/images/des7.webp';
import DES8 from '../assets/images/des8.webp';
import { useNavigate } from "react-router";
import CallI from '../assets/icons/call_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';
import MailI from '../assets/icons/mail_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg';

const Menu = () => {
    const navigate = useNavigate();
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Hàm để mở popup
    const openPopup = () => {
        setIsPopupVisible(true);
    };

    // Hàm để đóng popup
    const closePopup = () => {
        setIsPopupVisible(false);
    };
    return (
        <div>
            <div className="inline-flex gap-1">
                <div className="w-3/4">
                    <div className="inline-flex items-center uppercase text-[20px] font-bold">
                        <img src={Logo1} className="w-50 h-28" />
                        <div className="text-center text-[26px] ">
                            <p>Cao Bằng - Bắc Kạn</p>
                            <p>Chạm đến tinh hoa  - Dệt nên ký ức</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-1">
                        <img src={DES1} alt="eximage" className="h-[220px] w-[400px]" />
                        <img src={DES2} alt="eximage" className="h-[220px] w-[400px]" />
                        <img src={DES3} alt="eximage" className="h-[220px] w-[400px]" />
                        <img src={DES4} alt="eximage" className="h-[220px] w-[400px]" />
                        <img src={DES5} alt="eximage" className="h-[220px] w-[400px]" />
                        <img src={DES6} alt="eximage" className="h-[220px] w-[400px]" />
                        <img src={DES7} alt="eximage" className="h-[220px] w-[400px]" />
                        <img src={DES8} alt="eximage" className="h-[220px] w-[400px]" />
                    </div>
                </div>
                <div className="w-1/3 bg-black/90 text-white" >
                    <p onClick={() => navigate(-1)} className="float-right px-4 mt-2 text-bold uppercase text-[20px] text-white cursor-pointer font-bold">X</p>
                    <div className="mt-10 px-8 text-[24px] font-bold">
                        <p className="py-2 cursor-pointer hover:text-red-500" onClick={() => navigate('/')}>TRANG CHỦ</p>
                        <p className="py-2 cursor-pointer hover:text-red-500" onClick={() => navigate('/destination')}>ĐIỂM ĐẾN</p>
                        <p className="py-2 cursor-pointer hover:text-red-500" onClick={() => navigate('/experience')}>TRẢI NGHIỆM</p>
                        <p className="py-2 cursor-pointer hover:text-red-500">DÀI</p>
                        <p className="py-2 cursor-pointer hover:text-red-500">VỀ CHÚNG TÔI</p>
                        <p className="py-2 cursor-pointer hover:text-red-500">BÀI VIẾT</p>
                        <p className="py-2 cursor-pointer hover:text-red-500">GẶP GỠ</p>
                        <p className="py-2 cursor-pointer hover:text-red-500" onClick={openPopup}>TƯƠNG TÁC</p>
                        <p className="flex flex-row py-2 text-[18px] cursor-pointer hover:text-red-500 mt-2"><img src={CallI} alt='call icon' /> +84 0123.456.789</p>
                        <p className="flex flex-row py-2 text-[18px] cursor-pointer hover:text-red-500"><img src={MailI} alt='mail icon' />  vnomas.contact@gmail.com</p>
                    </div>
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
        </div>
    )
}

export default Menu;