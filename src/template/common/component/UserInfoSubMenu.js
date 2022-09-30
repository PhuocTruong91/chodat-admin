import {Link} from 'react-router-dom';
import {MANAGEMENT_FEATURE} from '../../../define/management_define';

function  UserInfoSubMenu(props) {
   
    function handleClick () {
        props.showSubmenu(false);
        window.reload();
    }
    return ( 
        <div className={"user-info-submenu " + (props.display ? 'active' : '')}>
            <div className='container'>
                <div className='list-tab'>
                    <Link onClick={handleClick} to={"/management?tab=" + MANAGEMENT_FEATURE.changeInfo}><p>QUẢN LÝ TÀI KHOẢN</p></Link>
                    <Link onClick={handleClick} to={"/management?tab=" + MANAGEMENT_FEATURE.listPost}><p>QUẢN LÝ TIN ĐĂNG</p></Link>
                </div>
                <p className='logout' onClick={() => {localStorage.removeItem('token'); window.location.reload()}}>ĐĂNG XUẤT</p>
            </div>
            
        </div>
    );
}

export default  UserInfoSubMenu;