import { useNavigate } from 'react-router';
import Logo1 from '../../assets/images/only-logo.png';
import ImgHeader from '../../assets/images/biaabus.png';


function Header() {
    const navigate = useNavigate();
    return (
        <div className="py-[28px] bg-black/40 bg-cover bg-center relative h-full relative"
             style={{ backgroundImage: `url(${ImgHeader})` }}>
            <div className="flex justify-evenly items-center px-[100px] text-white font-medium text-[20px]">
                <p onClick={() => navigate('/destination')} className='cursor-pointer'>ĐIỂM ĐẾN</p>
                <p onClick={() => navigate('/experience')} className='cursor-pointer'>TRẢI NGHIỆM</p>
                <p onClick={() => navigate('/about')} className='cursor-pointer'>VỀ CHÚNG TÔI</p>
                <p>BLOG</p>
                <p>GẶP GỠ CHÚNG TÔI</p>
                <p>LIÊN HỆ</p>
            </div>
            <div className="absolute left-[540px] top-[170px]">
                <img src={Logo1} alt="logo" className="w-[200px] h-[200px]" />
            </div>
            <p className="mt-64 text-center uppercase font-medium text-[28px] text-white">
                Đắm say văn hóa / Khám phá Việt Nam
            </p>
            <div className="flex justify-center items-center mt-8">
                <input type="text" className="py-2 px-4" placeholder="Nhập email của bạn" />
                <p className="px-2 py-2 bg-[#ff751a] font-medium text-white text-[16px] cursor-pointer">Go</p>
            </div>
        </div>
    );
}

export default Header;