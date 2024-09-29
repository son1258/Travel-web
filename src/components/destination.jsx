import { useNavigate } from 'react-router';
import DesIm from '../assets/images/destination.png';
import Menu from '../assets/images/menu.svg';
import DES1 from '../assets/images/des1.webp';
import DES2 from '../assets/images/des2.webp';
import DES3 from '../assets/images/des3.webp';
import DES4 from '../assets/images/des4.webp';
import DES5 from '../assets/images/des5.webp';
import DES6 from '../assets/images/des6.webp';
import DES7 from '../assets/images/des7.webp';
import DES8 from '../assets/images/des8.webp';
import DES04 from '../assets/images/des04.png';
import DES02 from '../assets/images/des02.png';
import DES03 from '../assets/images/des03.jpg';
import { useState } from 'react';
import Logo1 from '../assets/images/only-logo.png';
import Tele from '../assets/images/teleop.svg';
import Email from '../assets/images/email_3178158.png';
import Phone from '../assets/images/telephone-call_3059561.png';
import Profile from '../assets/images/profile.jpg';
import FbIcon from '../assets/icons/facebook.svg';
import Insta from '../assets/icons/FormkitInstagram.svg';

function Destination() {
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
            <div className="hidden sm:block fixed top-0 right-0 w-[40px] h-[40px] sm:w-12 sm:h-12 z-[1000] cursor-pointer" onClick={() => navigate('/menu')}>
                <img src={Menu} alt='logo-menu' />
            </div>

            <div className='flex justify-center items-center w-full mt-2'>
                <div className='flex flex-row items-center sm:py-6 sm:px-8 px-4 py-2 sm:text-[24px] font-medium shadow justify-between sm:gap-72 xl:gap-80 gap-20'>
                    <p className='text-left lg:text-[28px] sm:text-[20px] text-[12px]'>Miền bạn muốn đến</p>
                    <div className='flex flex-row sm:gap-10 lg:gap-20 lg:text-[24px] sm:text-[20px] text-[12px] gap-4'>
                        <p className=''>Tất cả</p>
                        <p className=''>Miền Nam</p>
                        <p className=''>Miền Bắc</p>
                        <p className=''>Miền Trung</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center sm:mt-16 mt-8 px-4">
                <div className='sm:w-[300px] sm:text-[22px] w-[250px] text-[14px]'>
                    <p className='sm:text-[30px] text-[18px] font-medium'>Tất Cả (1)</p>
                    <p className='py-2'>Cao Bằng</p>
                    <div className='w-full h-[1px] bg-black/50'></div>
                    <p className='py-2 w-full'>Lạng Sơn (coming soon)</p>
                    <div className='w-full h-[1px] bg-black/50'></div>
                    <p className='py-2'>Bắc Kạn (coming soon)</p>
                    <div className='w-full h-[1px] bg-black/50'></div>
                    <p className='py-2'>Sapa (coming soon)</p>
                    <div className='w-full h-[1px] bg-black/50'></div>
                    <p className='py-2'>Ninh Bình (coming soon)</p>
                    <div className='w-full h-[1px] bg-black/50'></div>
                    <p className='py-2'>Tây Nguyên (coming soon)</p>
                    <div className='w-full h-[1px] bg-black/50'></div>
                    <p className='py-2'>Tuy Hoà - Quy Nhơn - Quảng Ngãi (coming soon)</p>
                    <div className='w-full h-[1px] bg-black/50'></div>
                    <p className='py-2'>Huế - Quảng Bình (coming soon)</p>
                    <div className='w-full h-[1px] bg-black/50'></div>
                    <p className='py-2'>Đông Nam Bộ (coming soon)</p>
                    <div className='w-full h-[1px] bg-black/50'></div>
                    <p className='py-2'>Miền Tây(coming soon)</p>
                    <div className='w-full h-[1px] bg-black/50'></div>

                    <div className='sm:mt-5 mt-4 w-full relative'>
                        <img src={DES3} alt='eximage' className="w-full" />
                        <p className='absolute sm:top-12 top-7 text-[10px] left-4 sm:left-12 font-medium sm:text-[15px] text-white uppercase sm:w-[150px]'>Liên hệ với tư vấn viên của VNomas</p>
                        <p className='absolute sm:top-24 top-14 text-[8px] left-4 sm:left-12 sm:text-[12px] text-white sm:w-[180px]'>VNomas luôn sẵn sàng phản hồi và giải đáp các thắc mắc của quý khách</p>
                        <button type="button" className="absolute sm:left-12 left-4 bottom-3 text-[10px] rounded-[20px] px-4 py-1 sm:bottom-4 sm:px-5 sm:py-2 sm:rounded-[30px] bg-white font-medium sm:text-[18px]" onClick={openPopup}>Gửi Mail ngay!</button>
                    </div>
                </div>

                <div className='ml-2 sm:ml-24 grid grid-cols-2 gap-1 mt-9'>
                    <img src={DES1} alt="eximage" className="sm:h-[220px] sm:w-[400px] w-[200px] h-[150px] cursor-pointer" onClick={() => navigate('/experience')} />
                    <img src={DES02} alt="eximage" className="sm:h-[220px] sm:w-[400px] w-[200px] h-[150px] " />
                    <img src={DES03} alt="eximage" className="sm:h-[220px] sm:w-[400px] w-[200px] h-[150px] " />
                    <img src={DES04} alt="eximage" className="sm:h-[220px] sm:w-[400px] w-[200px] h-[150px] " />
                    <img src={DES5} alt="eximage" className="sm:h-[220px] sm:w-[400px] w-[200px] h-[150px] " />
                    <img src={DES6} alt="eximage" className="sm:h-[220px] sm:w-[400px] w-[200px] h-[150px] " />
                    <img src={DES7} alt="eximage" className="sm:h-[220px] sm:w-[400px] w-[200px] h-[150px] " />
                    <img src={DES8} alt="eximage" className="sm:h-[220px] sm:w-[400px] w-[200px] h-[150px] " />
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

            <div className="mt-32 flex flex-col justify-center items-center w-full">
                <img src={Logo1} alt="profile_image" className="w-40 h-40 rounded-full" />
                <p className="font-medium sm:text-2xl text-[12px] tracking-[6px] leading-10">LIÊN HỆ VỚI TƯ VẤN VIÊN CỦA VNOMAS</p>
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

export default Destination;