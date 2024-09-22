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
            <div className="fixed top-0 right-0 w-12 h-12 z-[1000] cursor-pointer" onClick={() => navigate('/menu')}>
                <img src={Menu} alt='logo-menu' />
            </div>
            <div className="h-[600px]"
                style={{
                    backgroundImage: `url(${DesIm})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
            <div className='flex flex-row py-6 px-8 items-center text-[24px] font-medium shadow'>
                <p>Miền bạn muốn đến</p>
                <div className='ml-[420px] flex flex-row items-center gap-10'>
                    <p>Tất cả</p>
                    <p>Miền Nam</p>
                    <p>Miền Bắc</p>
                    <p>Miền Trung</p>
                </div>
            </div>
            <div className="inline-flex px-16 mt-16">
                <div className='w-[300px] text-[22px]'>
                    <p className='text-[30px] font-medium'>Tất Cả (1)</p>
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
                    <p className='py-2'>Nghệ An (coming soon)</p>
                    <div className='w-full h-[1px] bg-black/50'></div>
                    <p className='py-2'>Đà Nẵng (coming soon)</p>
                    <div className='w-full h-[1px] bg-black/50'></div>
                    <p className='py-2'>Tây Ninh (coming soon)</p>
                    <div className='w-full h-[1px] bg-black/50'></div>
                    <p className='py-2'>Đông Nam Bộ (coming soon)</p>
                    <div className='w-full h-[1px] bg-black/50'></div>
                    <p className='py-2'>Miền Tây(coming soon)</p>
                    <div className='w-full h-[1px] bg-black/50'></div>
                    <div className='mt-5 w-[300px] relative'>
                        <img src={DES3} alt='eximage' />
                        <p className='absolute top-12 left-12 font-medium text-[15px] text-white uppercase w-[150px]'>Liên hệ với tư vấn viên của VNomas</p>
                        <p className='absolute top-24 left-12 text-[12px] text-white w-[180px]'>VNomas luôn sẵn sàng phản hồi và giải đáp các thắc mắc của quý khách</p>
                        <button type="button" className="absolute left-12 bottom-4 px-5 py-2 rounded-[30px] bg-white font-medium text-[18px]" onClick={openPopup}>Gửi Mail ngay!</button>

                    </div>
                </div>
                <div className='ml-24 grid grid-cols-2 gap-1'>
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
            <div className="mt-16 flex flex-col justify-center items-center w-full">
                <img src={Profile} alt="profile_image" className="w-24 h-24 rounded-full" />
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
                    <p>+84 032.123.231</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Email} alt="logo email" className="w-[40px] h-[40px]" />
                    <p>vnomas.contact@gmail.com</p>
                </div>
            </div>
            <div className="mt-4 flex justify-center items-center">
                <button className="px-8 py-2 rounded-[20px] bg-[#742B0C]/50 mt-2 font-medium text-white">LET’S TALK!</button>
            </div>
            <div className="mt-12 h-[400px] bg-black/85">
                <div className="inline-flex w-full text-white">
                    <div className="w-1/4 px-[20px] mt-16">
                        <p className="font-medium text-xl leading-4">Đăng kí</p>
                        <p className="text-sm leading-5">Nhận thông tin và khuyến mãi mới nhất</p>
                        <input className="w-full px-2 py-1 rounded-lg mt-1" placeholder="Nhập vào email của bạn" />
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

export default Destination;