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
            <div className="fixed top-0 right-0 w-12 h-12 z-[1000]" onClick={() => navigate('/menu')}>
                <img src={Menu} alt='logo-menu' />
            </div>
            <div className="flex justify-evenly items-center px-[100px] text-black font-medium text-[16px] py-[30px]">
                <p>CÂU CHUYỆN CỦA CHÚNG TÔI</p>
                <p>GIÁ TRỊ CHÚNG TÔI</p>
                <p>LỢI ÍCH DÀNH CHO KHÁCH HÀNG</p>
                <p>CHÚNG TÔI MANG ĐẾN</p>
            </div>
            <div className='inline-flex gap-4'>
                <div className='w-1/2 h-[500px]'>
                    <img src={OurStore} alt="our_store" className='object-cover'/>
                </div>
                <div className='w-1/2 mx-8 text-[13px] mt-12'>
                    <p className='font-medium text-[36px]'>CÂU CHUYỆN CỦA CHÚNG TÔI</p>
                    <p className='italic text-[20px] tracking-[6px] text-[#3399ff]'>VNOMAS, "VIỆT NAM" VÀ "NOMAD"</p>
                    <p className='w-[90%] mt-1'>VNOMAS Travel ra đời với sứ mệnh khám phá và giới thiệu vẻ đẹp tiềm ẩn của Việt Nam đến với du khách khắp nơi. Cái tên VNOMAS là sự kết hợp hài hòa giữa "Việt Nam" và "Nomad" (người du mục), thể hiện tinh thần khám phá, tự do và sự kết nối sâu sắc với văn hóa địa phương.</p>
                    <p className='w-[90%] mt-1'><span className='italic font-medium'>Slogan "Đắm say văn hóa, khám phá Việt Nam"</span> như một lời mời gọi du khách bước vào một cuốn tiểu thuyết đầy màu sắc. Mỗi trang sách là một trải nghiệm mới lạ, mỗi chương là một câu chuyện về văn hóa, bản sắc và con người Việt Nam. Từ "đắm say" gợi lên hình ảnh một du khách đang thả mình vào một dòng sông văn hóa sâu lắng, nơi họ được hòa mình trọn vẹn vào cuộc sống thường ngày của người dân địa phương. Còn "khám phá Việt Nam" như một tấm bản đồ kho báu, hấp dẫn du khách khám phá những điều kỳ diệu ẩn giấu trong từng ngóc ngách của đất nước</p>
                    <p className='w-[90%] mt-1'><span className='italic font-medium'>Logo của VNOMAS:</span> là sự kết hợp hài hòa giữa các yếu tố thiên nhiên và hiện đại, thể hiện sự cân bằng giữa truyền thống và đổi mới. Hình ảnh con người, núi, máy bay và chữ "V" ẩn chứa nhiều ý nghĩa sâu sắc, tượng trưng cho sự kết nối, khát vọng và niềm tự hào dân tộc.</p>
                </div>
            </div>
            <div className='inline-flex gap-4 mt-20'>
                <div className='w-1/2 mx-8 text-[13px] mt-12'>
                    <p className='font-medium text-[36px]'>GIÁ TRỊ CỦA CHÚNG TÔI</p>
                    <ul className='list-disc pl-8 mt-2'>
                        <li><span className='italic font-medium'>Tính xác thực : </span>Chúng tôi cam kết mang đến những trải nghiệm du lịch chân thực, giúp du khách khám phá Việt Nam một cách sâu sắc nhất.</li>
                        <li><span className='italic font-medium'>Tình yêu : </span>Chúng tôi đam mê khám phá và chia sẻ vẻ đẹp của Việt Nam với thế giới.</li>
                        <li><span className='italic font-medium'>Tính bền vững : </span>Chúng tôi luôn đặt bền vững lên hàng đầu, tôn trọng môi trường và cộng đồng địa phương.</li>
                        <li><span className='italic font-medium'>Sáng kiến : </span>Chúng tôi không ngừng sáng tạo và đổi mới để mang đến những trải nghiệm du lịch độc đáo và mới lạ.</li>
                        <li><span className='italic font-medium'>Sự hài lòng của khách hàng : </span>Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi.</li>
                    </ul>

                    <p className='w-[90%] mt-2'><span className='italic font-medium'>TẦM NHÌN:</span> Trở thành một trong những công ty du lịch hàng đầu Việt Nam, mang đến những trải nghiệm du lịch độc đáo và bền vững, góp phần quảng bá hình ảnh đất nước và con người Việt Nam ra thế giới.</p>
                    <p className='w-[90%] mt-2'><span className='italic font-medium'>SỨ MỆNH:</span> Kết nối du khách với vẻ đẹp của Việt Nam thông qua những hành trình khám phá ý nghĩa, đồng thời đóng góp vào sự phát triển bền vững của các cộng đồng địa phương.</p>
                </div>
                <img src={OurValue} alt="our_store" className='w-1/2 h-[500px]' />
            </div>
            <div className='inline-flex gap-4'>
                <img src={OurBenefit} alt="our_store" className='w-1/2 h-[500px]' />
                <div className='w-1/2 mx-8 text-[13px] mt-12'>
                    <p className='font-medium text-[36px]'>LỢI ÍCH DÀNH CHO KHÁCH HÀNG</p>
                    <ul className='list-disc pl-8 mt-2'>
                        <li><span className='italic font-medium'>Trải nghiệm văn hóa độc đáo:</span> Khám phá những lễ hội truyền thống, làng nghề thủ công, và ẩm thực địa phương.giúp du khách khám phá Việt Nam một cách sâu sắc nhất.</li>
                        <li><span className='italic font-medium'>Hành trình khám phá tự do:</span> Tự thiết kế hành trình theo sở thích cá nhân, hoặc chọn những tour du lịch được thiết kế riêng bởi các chuyên gia của chúng tôi.</li>
                        <li><span className='italic font-medium'>Hướng dẫn viên chuyên nghiệp: </span> Đội ngũ hướng dẫn viên am hiểu văn hóa, nhiệt tình và giàu kinh nghiệm sẽ đồng hành cùng bạn trong suốt chuyến đi.</li>
                        <li><span className='italic font-medium'>Dịch vụ chất lượng cao:</span> Chúng tôi cam kết cung cấp dịch vụ tốt nhất với các khách sạn chất lượng, phương tiện di chuyển tiện nghi và các hoạt động giải trí đa dạng.</li>
                        <li><span className='italic font-medium'>Cộng đồng du lịch: </span> Tham gia cộng đồng du lịch của VNOMAS để chia sẻ kinh nghiệm, kết nối với những người bạn đồng hành.</li>
                    </ul>

                    <p className='w-[90%] mt-2'><span className='italic font-medium'>TẦM NHÌN:</span> Trở thành một trong những công ty du lịch hàng đầu Việt Nam, mang đến những trải nghiệm du lịch độc đáo và bền vững, góp phần quảng bá hình ảnh đất nước và con người Việt Nam ra thế giới.</p>
                    <p className='w-[90%] mt-2'><span className='italic font-medium'>SỨ MỆNH:</span> Kết nối du khách với vẻ đẹp của Việt Nam thông qua những hành trình khám phá ý nghĩa, đồng thời đóng góp vào sự phát triển bền vững của các cộng đồng địa phương.</p>
                </div>
            </div>
            <div>
                <p className='text-center py-12 text-[40px] font-medium'>HÀNH TRÌNH CHÚNG TÔI MANG ĐẾN</p>
                <div className='flex justify-between py-4 px-8 gap-2'>
                    <div className='flex flex-col items-center text-[25px]'>
                        <img src={CT1} alt='logo ct' />
                        <p className='mt-2 font-medium pb-1'>HƠI THỞ NÚI RỪNG - TINH HOA MIỀN SƠN CƯỚC</p>
                        <p className='text-[20px] px-20'>Chuyến đi của chúng ta như một hành trình khám phá linh hồn của núi rừng, nơi những câu chuyện dân gian hòa quyện với cuộc sống hiện tại. Chúng ta sẽ cùng nhau tìm hiểu về văn hóa, phong tục tập quán của người Tày - Nùng, khám phá những bí ẩn của thiên nhiên và tận hưởng vẻ đẹp hoang sơ của núi rừng.</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center py-12 text-[40px] font-medium'>DỊCH VỤ CHÚNG TÔI CUNG CẤP</p>
                <div className='flex justify-between px-24 gap-8'>
                    <div className='flex flex-col items-center text-[12px]'>
                        <img src={B1} alt='logo ct' className='w-28 h-28' />
                        <p className='mt-2 text-[24px] font-medium pb-1'>TƯ VẤN & ĐẶT LỊCH</p>
                        <p>Chúng tôi giúp bạn hiểu rõ về các sản phẩm được cung cấp từ nguồn cung ứng được chọn lọc kỹ càng. Chúng tôi đặt chỗ lưu trú và lên lịch cho các tour du lịch nhóm, cũng như các dịch vụ vận chuyển và hậu cần liên quan, nếu cần thiết.</p>
                    </div>
                    <div className='flex flex-col items-center text-[12px]'>
                        <img src={B2} alt='logo ct' className='w-28 h-28' />
                        <p className='mt-2 text-[24px] font-medium pb-1'>HÀNH TRÌNH VNOMAS</p>
                        <p>Chúng tôi thiết kế những hành trình như một tác phẩm nghệ thuật, kết hợp hoàn hảo giữa những điểm đến độc đáo, phương tiện di chuyển tiện nghi và những trải nghiệm khó quên. Bạn chỉ cần tận hưởng, mọi thứ còn lại đã có chúng tôi lo.</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center py-12 text-[40px] font-medium'>YÊN TÂM VỀ CHI PHÍ</p>
                <div className='flex justify-between px-24 gap-8'>
                    <div className='flex flex-col items-center text-[12px] w-1/2'>
                        <img src={Cost} alt='logo ct' className='w-28 h-28' />
                        <p className='mt-2 text-[22px] font-medium pb-1'>KHÔNG BAO GIỜ MẤT TIỀN ĐẶT CỌC CỦA BẠN</p>
                        <p> Chúng tôi hiểu rằng những kế hoạch có thể thay đổi bất ngờ. Vì vậy, nếu bạn cần hủy chuyến, số tiền bạn đã đặt có thể giữ lại để khám phá những hành trình mới cùng Vnomas.</p>
                    </div>
                    <div className='flex flex-col items-center text-[12px] w-1/2'>
                        <img src={Cost2} alt='logo ct' className='w-28 h-28' />
                        <p className='mt-2 text-[22px] font-medium pb-1'>MINH BẠCH GIÁ CẢ</p>
                        <p>Khác biệt với các dịch vụ du lịch truyền thống, chúng tôi tin rằng sự minh bạch là chìa khóa để xây dựng mối quan hệ lâu dài với khách hàng. Bảng phân tích chi phí chi tiết của chúng tôi sẽ giúp bạn so sánh và đưa ra lựa chọn tốt nhất.</p>
                    </div>
                </div>
            </div>
            <div className="mt-16 flex flex-col justify-center items-center w-full">
                <img src={Logo1} alt="profile_image" className="w-44 h-44 rounded-full" />
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
                <button className="px-8 py-2 rounded-[20px] bg-[#742B0C]/50 mt-2 font-medium text-white outline-none" onClick={openPopup}>Trò chuyện ngay!</button>
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

export default AboutUs;