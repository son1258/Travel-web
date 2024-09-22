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
import Ex2 from '../assets/images/ex2.webp';
import vh from '../assets/images/xedap.jpg';
import price from '../assets/images/price.jpg';
import tep from '../assets/images/kep.jpg';
import house from '../assets/images/home.jpg';
import date from '../assets/images/date.jpg';
import ImgL from '../assets/images/imgl.jpg';
import Img2 from '../assets/images/img2.jpg';
import { useState } from "react";

function Experience2() {
    const navigate = useNavigate();
    const months = [
        "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
        "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
    ];

    // Create an array to manage the active state of each month (12 false values initially)
    const [activeMonths, setActiveMonths] = useState(Array(12).fill(false));

    // Handle click for each month by toggling its active state
    const handleClick = (index) => {
        const newActiveMonths = Array(12).fill(false); // Reset all to false
        newActiveMonths[index] = true; // Set the clicked month to active
        setActiveMonths(newActiveMonths); // Update the state
    };

    return (
        <div>
            <div className="fixed top-0 right-0 w-12 h-12 z-[1000]" onClick={() => navigate('/menu')}>
                <img src={Menu} alt='logo-menu' />
            </div>
            <div className="py-[20px]"
                style={{
                    backgroundImage: `url(${Ex2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="flex justify-evenly items-center px-[100px] py-[100px] text-white font-bold text-[24px]">
                    <p onClick={() => navigate('/destination')} className='cursor-pointer'>ĐIỂM ĐẾN</p>
                    <p onClick={() => navigate('/experience')} className='cursor-pointer'>TRẢI NGHIỆM</p>
                    <p onClick={() => navigate('/about')} className='cursor-pointer'>VỀ CHÚNG TÔI</p>
                    <p>BLOG</p>
                    <p>GẶP GỠ CHÚNG TÔI</p>
                    <p>LIÊN HỆ</p>
                </div>
                <div className="text-center font-medium text-[28px] text-white mt-2">
                    <p>Cao Bằng - Bắc Kạn</p>
                    <p>HƠI THỞ NÚI RỪNG - TINH HOA MIỀN SƠN CƯỚC</p>
                </div>
                <div className="flex justify-center items-center mt-8 pb-[100px]">
                    <button type="button" className="px-6 py-2 rounded-[30px] bg-white font-medium text-[20px] text-[#742B0C]" onClick={() => navigate('/experience2')}>Đặt tour ngay!</button>
                </div>
            </div>
            <div className="mt-12 text-center text-[26px] font-medium">
                <p>Cao Bằng - Bắc Kạn</p>
                <p>Chạm đến tinh hoa  - Dệt nên ký ức</p>
            </div>
            <div className="mt-10 grid grid-cols-5 gap-2 font-medium px-16">
                <div className="flex flex-col items-center">
                    <img src={house} alt='logo icon' className="w-24 h-20" />
                    <p>Homestay/Khách sạn</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={date} alt='logo icon' className="w-24 h-20" />
                    <p>4 ngày 3 đêm</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={tep} alt='logo icon' className="w-24 h-20" />
                    <p>Hướng dẫn viên bản địa</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={price} alt='logo icon' className="w-24 h-20" />
                    <p>Chỉ từ 8.000.000 VNĐ</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={vh} alt='logo icon' className="w-24 h-20" />
                    <p>Máy bay, xe du lịch</p>
                </div>
            </div>
            <div className="flex justify-between text-center border-[1px] shadow mt-12 text-[20px] font-bold">
                <p className="hover:bg-[#000000]/10 py-8 w-full">ĐIỂM HẤP DẪN</p>
                <p className="hover:bg-[#000000]/10 py-8 w-full">LỊCH TRÌNH CHI TIẾT</p>
                <p className="hover:bg-[#000000]/10 py-8 w-full">SỰ THẬT CẦN BIẾT</p>
                <p className="hover:bg-[#000000]/10 py-8 w-full">TƯ VẤN NGAY!</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center mt-10 shadow pb-16">
                <p className="text-[45px] font-bold">ĐIỂM HẤP DẪN</p>
                <div className="w-[750px] leading-8">
                    <p>Thác Bản Giốc được coi là nơi có cảnh sắc hùng vĩ, như tiên cảnh ở dòng Quây Sơn, Cao Bằng. Dòng thác không chỉ mang vẻ đẹp của cảnh quan thiên nhiên hùng vĩ, mà còn được đắm mình trong câu chuyện tình yêu đậm màu sắc huyền thoại của đôi trai gái miền sơn cước. Nước dòng Quây Sơn có màu ngọc bích trong tiết trời vào thu. Trên mặt sông, hơi nước hình thành một khoảng sương mù, khi ánh nắng chiếu vào mang đến khung cảnh huyền ảo. Cảnh đẹp say đắm lòng người với từng tầng thác nối tiếp nhau tuôn nước ồ ạt, bọt tung trắng xóa.</p>
                    <p>Làng Phia Thắp dưới bàn tay người dân tộc Nùng với các làm thủ công, tạo nên nhứng nén hương sạch, ngày càng được biết đến gần xa, đặc biệt khi du lịch phát triển, Hương Phia Thắp cùng vì vậy mà ngày càng được bay xa. Làng nghề làm hương truyền thống Phia Thắp thuộc xã Quốc Dân, huyện Quảng Uyên, tỉnh Cao Bằng của người Nùng góp phần bảo tồn những nét văn hóa tâm linh đẹp đẽ của dân tộc.</p>
                    <p>Nằm trong khu vực khí hậu nhiệt đới gió mùa, Hồ Ba Bể mang vẻ đẹp hoang sơ và thơ mộng với không khí mát lạnh, dễ chịu. Buổi sáng sớm ở hồ Ba Bể thường có lớp sương bao phủ khiến hồ mang một vẻ đẹp hữu tình, mặt nước phản chiếu bầu trời, in hình núi rừng, như tấm gương lớn phản chiếu mọi vật xung quanh. Cùng với đó là tiếng chim hót lót, vang vọng khắp núi rừng, không khí tĩnh mịch, trong lành, chẳng còn tiếng còi xe chen chúc, khói bụi phả ra từ những ống bô xe khiến cho những du khách dù khó tính đến như thế nào cũng thấy rung động trước bức tranh thiên nhiên tuyệt đẹp này.</p>
                </div>
                <img src={ImgL} alt="imgl" />
            </div>
            <div className="flex flex-col items-center py-12">
                <p className="text-[45px] font-bold">TÙY CHỌN HÀNH TRÌNH</p>
                <p className="italic">Điều chỉnh chuyến đi bộ đường dài theo ngân sách và sở thích của bạn</p>
                <div className="grid grid-cols-3 py-10 px-48">
                    <div className="hover:text-white hover:bg-[#ff471a] px-8 py-14 border-[1px]">
                        <p className="text-center uppercase font-bold">Tiết kiệm ngân sách</p>
                        <ul className="list-disc uppercase px-2 mt-10 italic text-[12px]">
                            <li>11 đêm/10 giai đoạn</li>
                            <li>3 đên tại khách sạn 3 sao</li>
                            <li>Tắm đêm ở kí túc xá</li>
                        </ul>
                        <p className="mt-12 font-bold">Từ 2.125 đô la Mỹ/người</p>
                    </div>
                    <div className="hover:text-white hover:bg-[#ff471a] px-8 py-14 border-[1px]">
                        <p className="text-center uppercase font-bold">Tiết kiệm ngân sách</p>
                        <ul className="list-disc uppercase px-2 mt-10 italic text-[12px]">
                            <li>11 đêm/10 giai đoạn</li>
                            <li>3 đên tại khách sạn 3 sao</li>
                            <li>Tắm đêm ở kí túc xá</li>
                        </ul>
                        <p className="mt-12 font-bold">Từ 2.125 đô la Mỹ/người</p>
                    </div>
                    <div className="hover:text-white hover:bg-[#ff471a] px-8 py-14 border-[1px]">
                        <p className="text-center uppercase font-bold ">Tiết kiệm ngân sách</p>
                        <ul className="list-disc uppercase px-2 mt-10 italic text-[12px]">
                            <li>11 đêm/10 giai đoạn</li>
                            <li>3 đên tại khách sạn 3 sao</li>
                            <li>Tắm đêm ở kí túc xá</li>
                        </ul>
                        <p className="mt-12 font-bold">Từ 2.125 đô la Mỹ/người</p>
                    </div>
                    <div className="hover:text-white hover:bg-[#ff471a] px-8 py-14 border-[1px] mt-2">
                        <p className="text-center uppercase font-bold">TRẺ EM 2-5 TUỔI</p>
                        <ul className="list-disc uppercase px-2 mt-10 italic text-[12px]">
                            <li>Mua 90% vé máy bay người lớn. Gia đình tự lo cho bé ăn ngủ và tự trả phí tham quan (nếu có)</li>
                            <li>Hai người lớn chỉ được kèm một trẻ em dưới 6 tuổi. Từ trẻ thứ 2 trở lên, mỗi em phải đóng bằng giá trẻ em từ 6-11 tuổi.</li>
                        </ul>
                        <p className="mt-12 font-bold">TỪ 3.200.000 VND</p>
                    </div>
                    <div className="hover:text-white hover:bg-[#ff471a] px-8 py-14 border-[1px] mt-2">
                        <p className="text-center uppercase font-bold">Trẻ em 6 - 11 tuổi:</p>
                        <ul className="list-disc uppercase px-2 mt-10 italic text-[12px]">
                            <li>Vé máy bay, ăn uống và tham quan theo chương trình, ngủ chung giường với phụ huynh.</li>
                        </ul>
                        <p className="mt-12 font-bold">TỪ 4.800.000 VNĐ</p>
                    </div>
                    <div className="hover:text-white hover:bg-[#ff471a] px-8 py-14 border-[1px] mt-2">
                        <p className="text-center uppercase font-bold ">Người lớn:</p>
                        <ul className="list-disc uppercase px-2 mt-10 italic text-[12px]">
                            <li>Dịch vụ tiêu chuẩn.</li>
                        </ul>
                        <p className="mt-12 font-bold">TỪ 8.000.000 VNĐ</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mx-auto w-[80%] shadow font-medium border-[1px]">
                <div className="grid grid-cols-2">
                    <div className="px-8 py-14 border-[1px]">
                        <p className="text-center uppercase font-bold">Giá tour bao gồm:</p>
                        <ul className="list-disc uppercase px-2 mt-10 italic text-[12px]">
                            <li>- Vé máy bay khứ hồi của Vietnam Airlines. </li>
                            <li>Chi phí xe máy lạnh phục vụ theo chương trình.</li>
                            <li>Chi phí khách sạn 3,4 và 5 sao hoặc homestay</li>
                            <li>Chi phí ăn – uống theo chương trình.</li>
                            <li>Chi phí tham quan.</li>
                            <li>Chi phí Hướng dẫn viên tiếng Việt.</li>
                            <li className="text-red-500">Quà tặng: Nón, nước suối, khăn lạnh.</li>
                        </ul>
                        <p className="mt-12 font-bold">Từ 2.125 đô la Mỹ/người</p>
                    </div>
                    <div className="px-8 py-14 border-[1px]">
                        <p className="text-center uppercase font-bold">Giá tour không bao gồm:</p>
                        <ul className="list-disc uppercase px-2 mt-10 italic text-[12px]">
                            <li>Chi phí tham quan - ăn uống ngoài chương trình, giặt ủi, điện thoại và các chi phí cá nhân khác.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <img src={Img2} className="mx-auto" alt='img2' />
            <div className="py-8">
                <p className="text-center text-[45px] font-bold">CÁC HOẠT ĐỘNG</p>
                <div className="grid grid-cols-5 gap-2 text-center mt-5 px-8">
                    <p className="hover:bg-red-500 py-8 hover:font-medium hover:text-white">Làm bánh khẩu sli và nghe những câu chuyện tình yêu lãng mạn của người Tày.</p>
                    <p className="hover:bg-red-500 py-8 hover:font-medium hover:text-white">Tham gia lễ hội hát Then, đắm mình trong âm thanh du dương của tiếng đàn tính và những câu hát trữ tình</p>
                    <p className="hover:bg-red-500 py-8 hover:font-medium hover:text-white">Tham gia lễ hội Lồng Tồng, hòa mình vào không khí vui tươi của người dân bản địa.</p>
                    <p className="hover:bg-red-500 py-8 hover:font-medium hover:text-white">Tìm hiểu về chữ Nôm của người Tày và khám phá nghề dệt thủ công truyền thống.</p>
                    <p className="hover:bg-red-500 py-8 hover:font-medium hover:text-white">Xem buổi biểu diễn hát Sli - Lượn, một loại hình âm nhạc độc đáo của người Tày.</p>
                </div>
            </div>
            <div className="mt-10 flex flex-col items-center" >
                <img src={Logo1} alt="logoimg" className="w-40 h-40" />
                <p className="font-medium text-[40px]">SỰ THẬT CẦN BIẾT</p>
            </div>
            <div className="px-12">
                <p className="text-[20px] font-medium">Tuyến đường và phương tiện?</p>
                <div className="px-8">
                    <p>Từ Hà Nội có thể lên Cao Bằng qua Quốc lộ 3 (QL3) đi qua Thái Nguyên, Bắc Kạn. Cũng có thể đi QL1 đến Lạng Sơn rồi rẽ QL4 qua Thất Khê, Đông Khê tới Cao Bằng. Từ Hà Giang, đi QL34 qua Tĩnh Túc (Cao Bằng) là tới.</p>
                    <p>Từ Hà Nội lên thác Bản Giốc có 2 con đường:</p>
                    <p>Hà Nội – Thái Nguyên – Bắc Kạn – Cao Bằng – Trùng Khánh – Bản Giốc
                        Hà Nội – Lạng Sơn – Đông Khê (Cao Bằng) – Trùng Khánh – Bản Giốc.
                        Bạn có thể mua vé xe ô tô đi Cao Bằng tại bến xe ở các tỉnh trên. Lưu ý giá vé, chất lượng xe, bến xuất và điểm đến.
                    </p>
                    <p>Nếu di chuyển bằng phương tiện cá nhân (xe máy hoặc ô tô) cần chú ý đảm bảo đầy đủ thiết bị an toàn: phanh, lốp, xích... Khi đi mang theo đầy đủ giấy tờ cần thiết, tuân thủ luật an toàn giao thông. Nên mang theo một số dụng cụ sửa xe thông dụng do đoạn đường từ thị xã Cao Bằng vào Bản Giốc khá khó đi.</p>
                </div>
            </div>
            <div className="px-12">
                <p className="text-[20px] font-medium pb-4">Mùa nào đẹp nhất?</p>
                <div className="grid grid-cols-12 py-4 border-[1px] shadow px-2">
                    {months.map((month, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center cursor-pointer"
                            onClick={() => handleClick(index)}
                        >
                            <p>{month}</p>
                            <div
                                className={`w-5 h-5 mt-2 rounded-full border-[1px] ${activeMonths[index] ? "bg-blue-500" : "bg-white"
                                    }`}
                            ></div>
                        </div>
                    ))}
                </div>
                <p className="px-8 pt-4">Vào mỗi mùa, Cao Bằng lại mang trong mình một vẻ đẹp riêng. Vì vậy tùy theo mục đích chuyến đi để lựa chọn thời gian đến thích hợp. Tuy nhiên, theo nhiều người, khoảng thời gian đẹp nhất để đến Cao Bằng là tháng 8 - 9 khi thác Bản Giốc đầy nước trong xanh và vào tháng 11 - 12 khi hoa tam giác mạch và hoa dã quỳ nở khắp núi rừng.</p>
            </div>
            <div className="px-12">
                <p className="text-[20px] font-medium" >Ăn gì?</p>
                <p className="px-8">Sản vật phong phú với: rau dạ hiến, rau bò khai, bánh coóng phù, hạt dẻ Trùng Khánh, phở chua, cháo nhộng ong, chè dây, chè đắng, bánh khảo, mận Bảo Lạc, lê Đông Khê, cá hồ Thang Hen, măng chua, lạp xườn, vịt quay…</p>
            </div>
            <div className="px-12">
                <p className="text-[20px] font-medium">Một số lưu ý?</p>
                <p className="px-8">Khi đi du lịch Cao Bằng - Bắc Kạn rất cần mang theo đầy đủ giấy tờ tùy thân do đây là khu vực biên giới.
                    Vì đường đi xa và không quá đẹp nên du khách nên mang theo một ít thuốc cứu thương cá nhân phòng khi cần dùng.
                </p>
            </div>
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

export default Experience2;