import { useNavigate } from "react-router";
import Menu from '../assets/images/menu.svg';
import Logo1 from '../assets/images/only-logo.png';
import Tele from '../assets/images/teleop.svg';
import Email from '../assets/images/email_3178158.png';
import Phone from '../assets/images/telephone-call_3059561.png';
import FbIcon from '../assets/icons/facebook.svg';
import Insta from '../assets/icons/FormkitInstagram.svg';
import Ex2 from '../assets/images/ex2.webp';
import ExImage from '../assets/images/ex.jpg';
import vh from '../assets/images/xedap.jpg';
import price from '../assets/images/price.jpg';
import tep from '../assets/images/kep.jpg';
import house from '../assets/images/home.jpg';
import date from '../assets/images/date.jpg';
import ImgL from '../assets/images/imgl.jpg';
import Img2 from '../assets/images/img2.jpg';
import { useState } from "react";
import './experience.css';

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
            <div className="hidden sm:block fixed top-0 right-0 w-12 h-12 z-[1000]" onClick={() => navigate('/menu')}>
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
                <div className="res-nav flex justify-evenly items-center px-[100px] py-[100px] text-white font-medium text-[20px] xl:text-[30px]">
                    <p onClick={() => navigate('/destination')} className='cursor-pointer'>ĐIỂM ĐẾN</p>
                    <p onClick={() => navigate('/experience')} className='cursor-pointer'>TRẢI NGHIỆM</p>
                    <p onClick={() => navigate('/about')} className='cursor-pointer'>VỀ CHÚNG TÔI</p>
                    <p onClick={openPopup}>LIÊN HỆ</p>
                </div>
                <div className="res-text text-center font-medium text-[28px] xl:text-[36px] text-white mt-2">
                    <p>Cao Bằng - Bắc Kạn</p>
                    <p>HƠI THỞ NÚI RỪNG - TINH HOA MIỀN SƠN CƯỚC</p>
                </div>
                <div className="flex justify-center items-center mt-8 pb-[100px] res-pb">
                    <button type="button" className="res-text-bt px-6 py-2 rounded-[30px] bg-white font-medium text-[20px] xl:text-[36px] xl:rounded-[40px] text-[#742B0C]" onClick={() => navigate('/experience2')}>Đặt tour ngay!</button>
                </div>
            </div>
            <div className="mt-12 text-center text-[26px] font-medium res-text">
                <p>Cao Bằng - Bắc Kạn</p>
                <p>Chạm đến tinh hoa  - Dệt nên ký ức</p>
            </div>
            <div className="res-dis mt-10 grid grid-cols-5 gap-2 font-medium px-16">
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
                <p className="hover:bg-[#000000]/10 py-8 w-full res-text-one">ĐIỂM HẤP DẪN</p>
                <p className="hover:bg-[#000000]/10 py-8 w-full res-text-one">LỊCH TRÌNH CHI TIẾT</p>
                <p className="hover:bg-[#000000]/10 py-8 w-full res-text-one">SỰ THẬT CẦN BIẾT</p>
                <p className="hover:bg-[#000000]/10 py-8 w-full res-text-one">TƯ VẤN NGAY!</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center mt-10 shadow pb-16">
                <p className="text-[45px] font-bold res-title">ĐIỂM HẤP DẪN</p>
                <div className="w-[750px] leading-8 res-p">
                    <p>Thác Bản Giốc được coi là nơi có cảnh sắc hùng vĩ, như tiên cảnh ở dòng Quây Sơn, Cao Bằng. Dòng thác không chỉ mang vẻ đẹp của cảnh quan thiên nhiên hùng vĩ, mà còn được đắm mình trong câu chuyện tình yêu đậm màu sắc huyền thoại của đôi trai gái miền sơn cước. Nước dòng Quây Sơn có màu ngọc bích trong tiết trời vào thu. Trên mặt sông, hơi nước hình thành một khoảng sương mù, khi ánh nắng chiếu vào mang đến khung cảnh huyền ảo. Cảnh đẹp say đắm lòng người với từng tầng thác nối tiếp nhau tuôn nước ồ ạt, bọt tung trắng xóa.</p>
                    <p>Làng Phia Thắp dưới bàn tay người dân tộc Nùng với các làm thủ công, tạo nên nhứng nén hương sạch, ngày càng được biết đến gần xa, đặc biệt khi du lịch phát triển, Hương Phia Thắp cùng vì vậy mà ngày càng được bay xa. Làng nghề làm hương truyền thống Phia Thắp thuộc xã Quốc Dân, huyện Quảng Uyên, tỉnh Cao Bằng của người Nùng góp phần bảo tồn những nét văn hóa tâm linh đẹp đẽ của dân tộc.</p>
                    <p>Nằm trong khu vực khí hậu nhiệt đới gió mùa, Hồ Ba Bể mang vẻ đẹp hoang sơ và thơ mộng với không khí mát lạnh, dễ chịu. Buổi sáng sớm ở hồ Ba Bể thường có lớp sương bao phủ khiến hồ mang một vẻ đẹp hữu tình, mặt nước phản chiếu bầu trời, in hình núi rừng, như tấm gương lớn phản chiếu mọi vật xung quanh. Cùng với đó là tiếng chim hót lót, vang vọng khắp núi rừng, không khí tĩnh mịch, trong lành, chẳng còn tiếng còi xe chen chúc, khói bụi phả ra từ những ống bô xe khiến cho những du khách dù khó tính đến như thế nào cũng thấy rung động trước bức tranh thiên nhiên tuyệt đẹp này.</p>
                </div>
                <img src={ImgL} alt="imgl" className="res-i" />
            </div>
            <div className="flex flex-col items-center py-12">
                <p className="text-[45px] font-bold res-title">CHÍNH SÁCH TOUR</p>
                <p className="italic res-p">Điều chỉnh chuyến đi bộ đường dài theo ngân sách và sở thích của bạn</p>
                <div className="grid grid-cols-3 py-10 px-48 res-grid">
                    <div className="res-item hover:text-white hover:bg-[#ff471a] px-8 py-14 border-[1px] mt-2 xl:py-28">
                        <p className="text-center uppercase font-bold res-item-t">TRẺ EM 2-5 TUỔI</p>
                        <ul className="list-disc uppercase px-2 mt-10 italic text-[12px] res-item-l">
                            <li>Mua 90% vé máy bay người lớn. Gia đình tự lo cho bé ăn ngủ và tự trả phí tham quan (nếu có)</li>
                            <li>Hai người lớn chỉ được kèm một trẻ em dưới 6 tuổi. Từ trẻ thứ 2 trở lên, mỗi em phải đóng bằng giá trẻ em từ 6-11 tuổi.</li>
                        </ul>
                        <p className="mt-12 font-bold res-price">TỪ 3.200.000 VND</p>
                    </div>
                    <div className="res-item hover:text-white hover:bg-[#ff471a] px-8 py-14 border-[1px] mt-2 xl:py-28">
                        <p className="text-center uppercase font-bold res-item-t">Trẻ em 6 - 11 tuổi:</p>
                        <ul className="list-disc uppercase px-2 mt-10 italic text-[12px] res-item-l">
                            <li>Vé máy bay, ăn uống và tham quan theo chương trình, ngủ chung giường với phụ huynh.</li>
                        </ul>
                        <p className="mt-12 font-bold res-price">TỪ 4.800.000 VNĐ</p>
                    </div>
                    <div className="res-item hover:text-white hover:bg-[#ff471a] px-8 py-14 border-[1px] mt-2 xl:py-28">
                        <p className="text-center uppercase font-bold res-item-t">Người lớn:</p>
                        <ul className="list-disc uppercase px-2 mt-10 italic text-[12px] res-item-l">
                            <li>Dịch vụ tiêu chuẩn.</li>
                        </ul>
                        <p className="mt-12 font-bold res-price">TỪ 8.000.000 VNĐ</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mx-auto w-[80%] shadow font-medium border-[1px]">
                <div className="grid grid-cols-2">
                    <div className="px-8 py-14 border-[1px] res-item-note">
                        <p className="text-center uppercase font-bold res-item-t">Giá tour bao gồm:</p>
                        <ul className="list-disc uppercase px-2 mt-10 italic text-[12px]  res-item-l">
                            <li>- Vé máy bay khứ hồi của Vietnam Airlines. </li>
                            <li>Chi phí xe máy lạnh phục vụ theo chương trình.</li>
                            <li>Chi phí khách sạn 3,4 và 5 sao hoặc homestay</li>
                            <li>Chi phí ăn – uống theo chương trình.</li>
                            <li>Chi phí tham quan.</li>
                            <li>Chi phí Hướng dẫn viên tiếng Việt.</li>
                            <li className="text-red-500">Quà tặng: Nón, nước suối, khăn lạnh.</li>
                        </ul>
                    </div>
                    <div className="px-8 py-14 border-[1px] res-item-note">
                        <p className="text-center uppercase font-bold res-item-t">Giá tour không bao gồm:</p>
                        <ul className="list-disc uppercase px-2 mt-10 italic text-[12px]  res-item-l">
                            <li>Chi phí tham quan - ăn uống ngoài chương trình, giặt ủi, điện thoại và các chi phí cá nhân khác.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <img src={Img2} className="mx-auto mt-2 res-i" alt='img2' />
            <div className="py-8">
                <p className="text-center text-[45px] font-bold res-title">CÁC HOẠT ĐỘNG</p>
                <div className="grid grid-cols-5 gap-2 text-center mt-5 px-8 res-grid res-price">
                    <p className="hover:bg-red-500 py-8 hover:font-medium hover:text-white res-item">Làm bánh khẩu sli và nghe những câu chuyện tình yêu lãng mạn của người Tày.</p>
                    <p className="hover:bg-red-500 py-8 hover:font-medium hover:text-white res-item">Tham gia lễ hội hát Then, đắm mình trong âm thanh du dương của tiếng đàn tính và những câu hát trữ tình</p>
                    <p className="hover:bg-red-500 py-8 hover:font-medium hover:text-white res-item">Tham gia lễ hội Lồng Tồng, hòa mình vào không khí vui tươi của người dân bản địa.</p>
                    <p className="hover:bg-red-500 py-8 hover:font-medium hover:text-white res-item">Tìm hiểu về chữ Nôm của người Tày và khám phá nghề dệt thủ công truyền thống.</p>
                    <p className="hover:bg-red-500 py-8 hover:font-medium hover:text-white res-item">Xem buổi biểu diễn hát Sli - Lượn, một loại hình âm nhạc độc đáo của người Tày.</p>
                </div>
            </div>
            <p className="text-center text-[45px] font-bold res-title">LỊCH TRÌNH CHI TIẾT</p>
            <div className="flex flex-col m-auto items-center res-div">
                <div className="res-w">
                    <div className="flex flex-row items-center gap-4 mt-4">
                        <p className="res-bt px-5 w-24 py-2 border-[1px] shadow bg-red-400 font-medium rounded-[20px] text-white">Ngày 1</p>
                        <p className="font-medium text-[20px] res-t-t">TP HCM - Hà Nội  - Cao Bằng | Hơi ấm của nhà sàn</p>
                    </div>
                    <ul className="w-[580px] ml-[60px] list-disc res-il">
                        <li><span className="font-medium">Buổi sáng : </span> Khởi hành từ sân bay Tân Sơn Nhất - Đến Sân bay Nội Bài, sau đó đón đoàn khởi hành đi Cao Bằng.</li>
                        <li><span className="font-medium">Buổi chiều : </span> Đến với Cao Bằng, chúng ta sẽ được đón tiếp nồng hậu trong một ngôi nhà sàn truyền thống. Ngồi bên bếp lửa hồng, thưởng thức chén trà thơm cùng những câu chuyện về cuộc sống của người dân nơi đây.</li>
                        <li><span className="font-medium">Buổi tối : </span> Hòa mình vào không khí sôi động của chợ đêm Cao Bằng, thưởng thức các món ăn đặc sản và tìm hiểu về cuộc sống về đêm của người dân địa phương.</li>
                    </ul>
                </div>
                <div className="res-w">
                    <div className="flex flex-row items-center gap-4 mt-4">
                        <p className="res-bt px-5 w-24 py-2 border-[1px] shadow bg-red-400 font-medium rounded-[20px] text-white">Ngày 2</p>
                        <p className="font-medium text-[20px] res-t-t">Cao Bằng | Bản tình ca của thác Bản Giốc</p>
                    </div>
                    <ul className="w-[580px] ml-[60px] list-disc res-il">
                        <li><span className="font-medium">Buổi sáng : </span> Ăn sáng tại homestay và chuẩn bị cho chuyến hành trình tiếp theo.  Khám phá thác Bản Giốc hùng vĩ, nghe tiếng nước đổ ào ào và cảm nhận sức mạnh của thiên nhiên.</li>
                        <li><span className="font-medium">Buổi trưa : </span> Nghỉ trưa tại nhà hàng gần thác với các món ăn đặc sản Cao Bằng như vịt quay 7 vị, thịt gà nướng mắc khén, và rau dớn xào tỏi.</li>
                        <li><span className="font-medium">Buổi chiều : </span> Đến thăm làng Phia Thắp, học cách làm bánh khẩu sli và nghe những câu chuyện tình yêu lãng mạn của người Tày. Sau đó quay lại homestay.</li>
                        <li><span className="font-medium">Buổi tối : </span> Tham gia lễ hội hát Then, đắm mình trong âm thanh du dương của tiếng đàn tính và những câu hát trữ tình.</li>
                    </ul>
                </div>
                <div className="res-w">
                    <div className="flex flex-row items-center gap-4 mt-4">
                        <p className="res-bt px-5 w-24 py-2 border-[1px] shadow bg-red-400 font-medium rounded-[20px] text-white">Ngày 3</p>
                        <p className="font-medium text-[20px] res-t-t">Cao Bằng - Bắc Kạn | Bí mật của hồ Ba Bể</p>
                    </div>
                    <ul className="w-[580px] ml-[60px] list-disc res-il">
                        <li><span className="font-medium">Buổi sáng : </span> Đoàn di chuyển từ Cao Bằng đến Bắc Kạn. Sau đó khám phá hồ Ba Bể, một trong những hồ nước ngọt tự nhiên lớn nhất Việt Nam. Quý khách lên thuyền du ngoạn dọc theo dòng sông Năng, ngắm nhìn cảnh quan và đời sống của của người dân tộc Tày.</li>
                        <li><span className="font-medium">Buổi chiều : </span> Lên thuyền khám phá hồ, tham quan động nàng Tiên, khám phá sông nước bằng thuyền độc mộc, đánh bắt cá hay xem các thiếu nữ Tày múa hát.</li>
                        <li><span className="font-medium">Buổi tối : </span> Tham gia lễ hội Lồng Tồng, hòa mình vào không khí vui tươi của người dân bản địa.</li>
                    </ul>
                </div>
                <div className="res-w">
                    <div className="flex flex-row items-center gap-4 mt-4">
                        <p className="res-bt px-5 w-24 py-2 border-[1px] shadow bg-red-400 font-medium rounded-[20px] text-white">Ngày 4</p>
                        <p className="font-medium text-[20px] res-t-t">Di sản văn hóa Tày - Nùng</p>
                    </div>
                    <ul className="w-[580px] ml-[60px] list-disc res-il">
                        <li><span className="font-medium">Buổi sáng : </span> Tìm hiểu về chữ Nôm của người Tày và khám phá nghề dệt thủ công truyền thống.</li>
                        <li><span className="font-medium">Buổi chiều  : </span> Xem buổi biểu diễn hát Sli - Lượn, một loại hình âm nhạc độc đáo của người Tày. Sau đó, xe đưa đoàn ra sân bay Nội Bài, về TP. Hồ Chí Minh.</li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 flex flex-col items-center" >
                <p className="text-center text-[45px] font-bold res-title">SỰ THẬT CẦN BIẾT</p>
            </div>
            <div className="px-12">
                <p className="text-[20px] font-medium res-price">Tuyến đường và phương tiện?</p>
                <div className="px-8 res-item-t">
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
                <p className="text-[20px] font-medium pb-4 res-price">Mùa nào đẹp nhất?</p>
                <div className="grid grid-cols-12 py-4 border-[1px] shadow px-2 res-month">
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
                <p className="px-8 pt-4 res-item-t">Vào mỗi mùa, Cao Bằng lại mang trong mình một vẻ đẹp riêng. Vì vậy tùy theo mục đích chuyến đi để lựa chọn thời gian đến thích hợp. Tuy nhiên, theo nhiều người, khoảng thời gian đẹp nhất để đến Cao Bằng là tháng 8 - 9 khi thác Bản Giốc đầy nước trong xanh và vào tháng 11 - 12 khi hoa tam giác mạch và hoa dã quỳ nở khắp núi rừng.</p>
            </div>
            <div className="px-12">
                <p className="text-[20px] font-medium res-price" >Ăn gì?</p>
                <p className="px-8 res-item-t">Sản vật phong phú với: rau dạ hiến, rau bò khai, bánh coóng phù, hạt dẻ Trùng Khánh, phở chua, cháo nhộng ong, chè dây, chè đắng, bánh khảo, mận Bảo Lạc, lê Đông Khê, cá hồ Thang Hen, măng chua, lạp xườn, vịt quay…</p>
            </div>
            <div className="px-12">
                <p className="text-[20px] font-medium res-price">Một số lưu ý?</p>
                <p className="px-8 res-item-t">Khi đi du lịch Cao Bằng - Bắc Kạn rất cần mang theo đầy đủ giấy tờ tùy thân do đây là khu vực biên giới.
                    Vì đường đi xa và không quá đẹp nên du khách nên mang theo một ít thuốc cứu thương cá nhân phòng khi cần dùng.
                </p>
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

export default Experience2;