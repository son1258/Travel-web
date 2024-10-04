import { useNavigate } from 'react-router';
import Image from '../assets/images/biaabus.png';
import Menu from '../assets/images/menu.svg';
import Logo1 from '../assets/images/only-logo.png';
import OurStore from '../assets/images/Ảnh mục 1. Câu chuyện của chúng tôi.png'
import OurValue from '../assets/images/Ảnh mục 2. Giá trị của chúng tôi.jpg';
import OurBenefit from '../assets/images/Ảnh mục 3. Lợi ích dành cho khách hàng.jpg';
import CT1 from '../assets/images/ct1.png';
import CT2 from '../assets/images/ct2.png';
import CT3 from '../assets/images/ct3.png';
import CT4 from '../assets/images/ct4.png';
import CT5 from '../assets/images/ct5.png';
import CT6 from '../assets/images/ct6.png';
import CT7 from '../assets/images/ct7.png';
import B1 from '../assets/images/book.png';
import B2 from '../assets/images/book2.png';
import Cost from '../assets/images/cost.jpg';
import Cost2 from '../assets/images/cost2.jpg';
import Tele from '../assets/images/teleop.svg';
import Email from '../assets/images/email_3178158.png';
import Phone from '../assets/images/telephone-call_3059561.png';
import Profile from '../assets/images/profile.jpg';
import FbIcon from '../assets/icons/facebook.svg';
import Insta from '../assets/icons/FormkitInstagram.svg';
import { useState } from 'react';
import './app.css';

function AboutUs() {
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
            <div className="hidden sm:block fixed top-0 right-0 w-[40px] h-[40px] sm:w-12 sm:h-12 z-[1000]" onClick={() => navigate('/menu')}>
                <img src={Menu} alt='logo-menu' />
            </div>
            <div className="app-text-p px-1 flex justify-evenly items-center sm:px-[10px] text-[8px] py-4 text-black sm:border-[1px] sm:shadow font-medium sm:text-[16px] xl:text-[24px] sm:py-[30px]">
                <p>CÂU CHUYỆN CỦA CHÚNG TÔI</p>
                <p>GIÁ TRỊ CHÚNG TÔI</p>
                <p>LỢI ÍCH DÀNH CHO KHÁCH HÀNG</p>
                <p>CHÚNG TÔI MANG ĐẾN</p>
            </div>
            <div className='grid grid-cols-2 gap-2 px-2'>
                <div className='w-full sm:h-[500px] mt-10'>
                    <img src={OurStore} alt="our_store" className='object-cover mt-8' />
                </div>
                <div className='w-full sm:mx-6 mx-2 sm:text-[12px] text-[8px] mt-2 sm:mt-20 xl:mt-24'>
                    <p className='font-medium text-[18px] sm:text-[30px] xl:text-[48px] app-text-medium'>CÂU CHUYỆN CỦA CHÚNG TÔI</p>
                    <p className='italic sm:text-[18px] text-[14px] sm:tracking-[6px] text-[#3399ff] xl:text-[30px] xl:mt-2'>VNOMAS, "VIỆT NAM" VÀ "NOMAD"</p>
                    <p className='w-[90%] mt-1 xl:text-[16px] xl:mt-3'>VNOMAS Travel ra đời với sứ mệnh khám phá và giới thiệu vẻ đẹp tiềm ẩn của Việt Nam đến với du khách khắp nơi. Cái tên VNOMAS là sự kết hợp hài hòa giữa "Việt Nam" và "Nomad" (người du mục), thể hiện tinh thần khám phá, tự do và sự kết nối sâu sắc với văn hóa địa phương.</p>
                    <p className='w-[90%] mt-1 xl:text-[16px] xl:mt-3'><span className='italic font-medium'>Slogan "Đắm say văn hóa, khám phá Việt Nam"</span> như một lời mời gọi du khách bước vào một cuốn tiểu thuyết đầy màu sắc. Mỗi trang sách là một trải nghiệm mới lạ, mỗi chương là một câu chuyện về văn hóa, bản sắc và con người Việt Nam. Từ "đắm say" gợi lên hình ảnh một du khách đang thả mình vào một dòng sông văn hóa sâu lắng, nơi họ được hòa mình trọn vẹn vào cuộc sống thường ngày của người dân địa phương. Còn "khám phá Việt Nam" như một tấm bản đồ kho báu, hấp dẫn du khách khám phá những điều kỳ diệu ẩn giấu trong từng ngóc ngách của đất nước</p>
                    <p className='w-[90%] mt-1 xl:text-[16px] xl:mt-3'><span className='italic font-medium'>Logo của VNOMAS:</span> là sự kết hợp hài hòa giữa các yếu tố thiên nhiên và hiện đại, thể hiện sự cân bằng giữa truyền thống và đổi mới. Hình ảnh con người, núi, máy bay và chữ "V" ẩn chứa nhiều ý nghĩa sâu sắc, tượng trưng cho sự kết nối, khát vọng và niềm tự hào dân tộc.</p>
                </div>
            </div>
            <div className='grid grid-cols-2 sm:gap-3 gap-2 mt-2 sm:mt-[180px] xl:mt-[200px]'>
                <div className='w-full sm:mx-8 mx-2 sm:text-[12px] text-[8px] sm:mt-[100px] mt-2 xl:mt-[200px]'>
                    <p className='font-medium text-[18px] sm:text-[30px] xl:text-[48px]  app-text-medium'>GIÁ TRỊ CỦA CHÚNG TÔI</p>
                    <ul className='list-disc pl-8 mt-2 xl:mt-4 xl:text-[20px] sm:text-[12px] text-[8px] px-4'>
                        <li><span className='italic font-medium xl:text-[24px] xl:mt-3 sm:text-[16px] text-[12px]'>Authenticity : </span>Chúng tôi cam kết mang đến những trải nghiệm du lịch chân thực, giúp du khách khám phá Việt Nam một cách sâu sắc nhất.</li>
                        <li><span className='italic font-medium xl:text-[24px] xl:mt-3 sm:text-[16px] text-[12px]'>Passion : </span>Chúng tôi đam mê khám phá và chia sẻ vẻ đẹp của Việt Nam với thế giới.</li>
                        <li><span className='italic font-medium xl:text-[24px] xl:mt-3 sm:text-[16px] text-[12px]'>Sustainability : </span>Chúng tôi luôn đặt bền vững lên hàng đầu, tôn trọng môi trường và cộng đồng địa phương.</li>
                        <li><span className='italic font-medium xl:text-[24px] xl:mt-3 sm:text-[16px] text-[12px]'>Innovation : </span>Chúng tôi không ngừng sáng tạo và đổi mới để mang đến những trải nghiệm du lịch độc đáo và mới lạ.</li>
                        <li><span className='italic font-medium xl:text-[24px] xl:mt-3 sm:text-[16px] text-[12px]'>Customer Satisfaction : </span>Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi.</li>
                    </ul>

                    <p className='w-[90%] mt-2 xl:text-[20px] xl:mt-4 sm:text-[12px] text-[8px]'><span className='italic font-medium xl:text-[24px] xl:mt-3 sm:text-[16px] text-[12px]'>TẦM NHÌN:</span> Trở thành một trong những công ty du lịch hàng đầu Việt Nam, mang đến những trải nghiệm du lịch độc đáo và bền vững, góp phần quảng bá hình ảnh đất nước và con người Việt Nam ra thế giới.</p>
                    <p className='w-[90%] mt-2 xl:text-[20px] xl:mt-4 sm:text-[12px] text-[8px]'><span className='italic font-medium xl:text-[24px] xl:mt-3 sm:text-[16px] text-[12px]'>SỨ MỆNH:</span> Kết nối du khách với vẻ đẹp của Việt Nam thông qua những hành trình khám phá ý nghĩa, đồng thời đóng góp vào sự phát triển bền vững của các cộng đồng địa phương.</p>
                </div>
                <div className='w-full h-full mt-8'>
                    <img src={OurValue} alt="our_store" className='object-cover' />
                </div>
            </div>
            <div className='grid grid-cols-2 sm:gap-3 mt-4 px-2'>
                <img src={OurBenefit} alt="our_store" className='w-full h-[400px] sm:h-full mt-4' />
                <div className='w-full sm:mx-8 mx-4  sm:text-[13px] sm:mt-[100px] mt-1 text-[8px] xl:mt-[200px]'>
                    <p className='font-medium text-[18px] sm:text-[30px] xl:text-[48px]  app-text-medium'>LỢI ÍCH DÀNH CHO KHÁCH HÀNG</p>
                    <ul className='list-disc sm:pl-8 pl-4 sm:mt-2 sm:text-[12px] text-[8px] xl:text-[20px] px-4'>
                        <li><span className='italic font-medium xl:text-[24px] xl:mt-3 sm:text-[16px] text-[12px]'>Trải nghiệm văn hóa độc đáo:</span> Khám phá những lễ hội truyền thống, làng nghề thủ công, và ẩm thực địa phương.giúp du khách khám phá Việt Nam một cách sâu sắc nhất.</li>
                        <li><span className='italic font-medium xl:text-[24px] xl:mt-3 sm:text-[16px] text-[12px]'>Hành trình khám phá tự do:</span> Tự thiết kế hành trình theo sở thích cá nhân, hoặc chọn những tour du lịch được thiết kế riêng bởi các chuyên gia của chúng tôi.</li>
                        <li><span className='italic font-medium xl:text-[24px] xl:mt-3 sm:text-[16px] text-[12px]'>Hướng dẫn viên chuyên nghiệp: </span> Đội ngũ hướng dẫn viên am hiểu văn hóa, nhiệt tình và giàu kinh nghiệm sẽ đồng hành cùng bạn trong suốt chuyến đi.</li>
                        <li><span className='italic font-medium xl:text-[24px] xl:mt-3 sm:text-[16px] text-[12px]'>Dịch vụ chất lượng cao:</span> Chúng tôi cam kết cung cấp dịch vụ tốt nhất với các khách sạn chất lượng, phương tiện di chuyển tiện nghi và các hoạt động giải trí đa dạng.</li>
                        <li><span className='italic font-medium xl:text-[24px] xl:mt-3 sm:text-[16px] text-[12px]'>Cộng đồng du lịch: </span> Tham gia cộng đồng du lịch của VNOMAS để chia sẻ kinh nghiệm, kết nối với những người bạn đồng hành.</li>
                    </ul>

                    <p className='w-[90%] mt-2 xl:text-[20px] xl:mt-4 sm:text-[12px] text-[8px]'><span className='italic font-medium xl:text-[24px] xl:mt-3 sm:text-[16px] text-[12px]'>TẦM NHÌN:</span> Trở thành một trong những công ty du lịch hàng đầu Việt Nam, mang đến những trải nghiệm du lịch độc đáo và bền vững, góp phần quảng bá hình ảnh đất nước và con người Việt Nam ra thế giới.</p>
                    <p className='w-[90%] mt-2 xl:text-[20px] xl:mt-4 sm:text-[12px] text-[8px]' ><span className='italic font-medium xl:text-[24px] xl:mt-3 sm:text-[16px] text-[12px]'>SỨ MỆNH:</span> Kết nối du khách với vẻ đẹp của Việt Nam thông qua những hành trình khám phá ý nghĩa, đồng thời đóng góp vào sự phát triển bền vững của các cộng đồng địa phương.</p>
                </div>
            </div>
            <div>
                <p className='text-center mt-8 py-3 sm:py-12 sm:text-[40px] text-[28px] font-medium app-text-medium'>HÀNH TRÌNH CHÚNG TÔI MANG ĐẾN</p>
                <div className='flex justify-between sm:py-4 sm:px-8 gap-2'>
                    <div className='flex flex-col items-center sm:text-[25px] text-[16px]'>
                        <img src={CT1} alt='logo ct' />
                        <p className='mt-2 font-medium pb-1 app-text-base'>HƠI THỞ NÚI RỪNG - TINH HOA MIỀN SƠN CƯỚC</p>
                        <p className='sm:text-[20px] px-20 text-[12px]'>Chuyến đi của chúng ta như một hành trình khám phá linh hồn của núi rừng, nơi những câu chuyện dân gian hòa quyện với cuộc sống hiện tại. Chúng ta sẽ cùng nhau tìm hiểu về văn hóa, phong tục tập quán của người Tày - Nùng, khám phá những bí ẩn của thiên nhiên và tận hưởng vẻ đẹp hoang sơ của núi rừng.</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center py-12 sm:text-[40px] text-[28px] font-medium app-text-medium'>DỊCH VỤ CHÚNG TÔI CUNG CẤP</p>
                <div className='flex justify-between sm:px-24 sm:gap-8 px-10 gap-2'>
                    <div className='flex flex-col items-center text-[12px]'>
                        <img src={B1} alt='logo ct' className='sm:w-28 sm:h-28 w-16 h-16' />
                        <p className='mt-2 sm:text-[24px] text-[16px] font-medium pb-1 app-text-base'>TƯ VẤN & ĐẶT LỊCH</p>
                        <p>Chúng tôi giúp bạn hiểu rõ về các sản phẩm được cung cấp từ nguồn cung ứng được chọn lọc kỹ càng. Chúng tôi đặt chỗ lưu trú và lên lịch cho các tour du lịch nhóm, cũng như các dịch vụ vận chuyển và hậu cần liên quan, nếu cần thiết.</p>
                    </div>
                    <div className='flex flex-col items-center text-[12px]'>
                        <img src={B2} alt='logo ct' className='sm:w-28 sm:h-28 w-16 h-16' />
                        <p className='mt-2 sm:text-[24px] text-[16px] font-medium pb-1 app-text-base'>HÀNH TRÌNH VNOMAS</p>
                        <p>Chúng tôi thiết kế những hành trình như một tác phẩm nghệ thuật, kết hợp hoàn hảo giữa những điểm đến độc đáo, phương tiện di chuyển tiện nghi và những trải nghiệm khó quên. Bạn chỉ cần tận hưởng, mọi thứ còn lại đã có chúng tôi lo.</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center py-12 sm:text-[40px] text-[28px] font-medium app-text-medium'>YÊN TÂM VỀ CHI PHÍ</p>
                <div className='flex justify-between sm:px-24 sm:gap-8 px-10 gap-2'>
                    <div className='flex flex-col items-center text-[12px] w-1/2'>
                        <img src={Cost} alt='logo ct' className='sm:w-28 sm:h-28 w-16 h-16' />
                        <p className='mt-2 sm:text-[24px] text-[16px] font-medium pb-1 app-text-base'>KHÔNG BAO GIỜ MẤT TIỀN ĐẶT CỌC CỦA BẠN</p>
                        <p> Chúng tôi hiểu rằng những kế hoạch có thể thay đổi bất ngờ. Vì vậy, nếu bạn cần hủy chuyến, số tiền bạn đã đặt có thể giữ lại để khám phá những hành trình mới cùng Vnomas.</p>
                    </div>
                    <div className='flex flex-col items-center text-[12px] w-1/2'>
                        <img src={Cost2} alt='logo ct' className='sm:w-28 sm:h-28 w-16 h-16' />
                        <p className='mt-2 sm:text-[24px] text-[16px] font-medium pb-1 app-text-base'>MINH BẠCH GIÁ CẢ</p>
                        <p>Khác biệt với các dịch vụ du lịch truyền thống, chúng tôi tin rằng sự minh bạch là chìa khóa để xây dựng mối quan hệ lâu dài với khách hàng. Bảng phân tích chi phí chi tiết của chúng tôi sẽ giúp bạn so sánh và đưa ra lựa chọn tốt nhất.</p>
                    </div>
                </div>
            </div>
            <div className="res-logo mt-16 xl:mt-24 flex flex-col justify-center items-center w-full">
                <img src={Logo1} alt="profile_image" className="w-40 h-40 rounded-full" />
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

export default AboutUs;