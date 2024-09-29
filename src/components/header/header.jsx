import { useNavigate } from 'react-router';
import Logo1 from '../../assets/images/only-logo.png';
import ImgHeader from '../../assets/images/biaabus.png';
import { useState } from 'react';


function Header() {
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
        <div 
            className="sm:py-[28px] bg-black/40 bg-cover bg-center relative h-full w-auto object-cover sm:h-full xl:py-60 header lg:py-40"
            style={{ backgroundImage: `url(${ImgHeader})`, backgroundSize: 'cover',  backgroundPosition: 'center'  }}>
            {/* Navigation bar */}
            <div className="lg:absolute lg:top-8 lg:w-full py-2 flex justify-evenly items-center lg:px-[50px] text-white px-4 font-medium text-[12px] sm:text-[16px] lg:text-[30px]">
                <p onClick={() => navigate('/destination')} className="cursor-pointer">ĐIỂM ĐẾN</p>
                <p onClick={() => navigate('/experience')} className="cursor-pointer">TRẢI NGHIỆM</p>
                <p onClick={() => navigate('/about')} className="cursor-pointer">VỀ CHÚNG TÔI</p>
                <p onClick={openPopup} className="cursor-pointer">LIÊN HỆ </p>
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
            {/* Logo section */}
            <div className="absolute left-1/2 lg:top-[280px] xl:top-[350px] sm:top-[190px] top-[98px] transform -translate-x-1/2">
                <img src={Logo1} alt="logo" className="w-[90px] h-[90px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px]" />
            </div>
            
            {/* Header text */}
            <p className="mt-32 sm:mt-64 text-center uppercase font-medium sm:text-[22px] lg:text-[28px] text-white">
                Đắm say văn hóa / Khám phá Việt Nam
            </p>

            {/* Email input section */}
            <div className="flex justify-center items-center sm:mt-8 mt-6 space-x-2 py-4">
                <input 
                    type="text" 
                    className="sm:py-2 sm:px-4 py-1 px-2 text-black w-[150px] sm:w-[220px] lg:w-[300px] rounded sm:text-[16px] text-[10px]" 
                    placeholder="Nhập email của bạn" 
                />
                <p className="sm:px-4 sm:py-2 py-1 px-2 bg-[#ff751a] font-medium text-white text-[10px] sm:text-[14px] lg:text-[16px] cursor-pointer">
                    Go
                </p>
            </div>
        </div>
    );
}

export default Header;
