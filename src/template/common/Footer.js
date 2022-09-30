import {Link} from 'react-router-dom';

import chplay from '../../image/chplay.png';
import appstore from '../../image/appstore.png';
import logo from '../../image/logo.png';
import '../../css/footer.scss'

function Footer(props) {
    return ( 
        <div className="footer">
            <div className="container">
                <div className="left">
                    <img src={logo}></img>
                    <div className="info">
                        <p>CÔNG TY TNHH MTV CHỢ ĐẤT</p>
                    </div>
                    <div className="contact">
                        <div className="contact-item">
                            <p>Addr: <span>Tầng 7, Số 60 Nguyễn Văn Thủ - Phường Đa Kao - Quận 1 - Thành phố Hồ Chí Minh</span></p>
                        </div>
                        <div className="contact-item">
                            <p>Phone1: <span>078 - 3456 - 434</span></p>
                            <p>-</p>
                            <p>Phone2: <span>097 - 2664 - 535</span></p>
                        </div>
                        <div className="contact-item">
                            <p>Email: <span>support@chodat.net.vn</span></p>
                        </div>
                    </div>
                    <div className="law">
                        <p>Giấy ĐKKD số: 0316951040 Do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp lần đầu ngày 12/08/2021.</p>
                        {/* <p>Giấy phép ICP số 16/GP-STTTT do Sở Thông tin và Truyền thông TP. Hồ Chí Minh cấp ngày x tháng x năm xxxx.</p> */}
                        <p>Đại diện theo pháp luật, Người chịu trách nhiệm Sàn giao dịch thương mại điện tử và Giấy phép ICP: <br/>Ông Võ Mai Trinh - chức vụ: Giám đốc</p>
                        <p>Quy chế của Sàn giao dịch điện tử chodat.net.vn chính thức có hiệu lực từ ngày 01/08/2022</p>
                    </div>
                    
                </div>
                <div className="right">
                    <p className='footer-title'>quy định</p>
                    <p>cơ chế giải quyết tranh chấp</p>
                    <p>chính sách bảo mật thông tin</p>
                    <p>quy chế hoạt động</p>
                    <p>thư ngỏ</p>
                    <p>hướng dẫn tạo tài khoản & đăng tin</p>
                    <p>giới thiệu dịch vụ data bất động sản</p>
                    <p>liên hệ</p>
                    <p>sitemap</p>
                    <Link to="/quotation"><p>bảng báo giá dịch vụ</p></Link>
                    <div className='app'>
                        <p className='title'>Tải ứng dụng tại</p>
                        <div className='group-app'>
                            <div className='group-app-item'>
                                <img src={chplay}/>
                                <a href=''><p>Google Play</p></a>
                                
                            </div>
                            <div className='group-app-item'>
                                <img src={appstore}/>
                                <a href=''><p>App Store</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                All content copyright 20222
            </div>
        </div>
     );
}

export default Footer;