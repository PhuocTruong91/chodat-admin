import {Link} from 'react-router-dom'
import Right from "./Right";
import {logIn}  from '../../../../controller/User'

function SignIn() {

    function handleEnableButton(){
        var phone = document.querySelector(".signin .left input[name='username']").value;
        var pass = document.querySelector(".signin .left input[name='password']").value;

        if(phone.length > 0 && pass.length > 0){
            document.querySelector(".signin .left .signin-button").classList.remove('disabled');
        }else{
            document.querySelector(".signin .left .signin-button").classList.add('disabled');
        }
    }

    function handleLogin(){
        var phone = document.querySelector(".signin .left input[name='username']").value;
        var pass = document.querySelector(".signin .left input[name='password']").value;

        var data = {
            phone: phone,
            password: pass
        }

        logIn(data).then((result) => {
            if(!result.success){
                document.querySelector('.signin #error').textContent = result.message;
            }else{
                if(document.querySelector('[name="remember"]').checked){
                    localStorage.setItem('username', phone);
                    localStorage.setItem('pass', pass);
                }
                document.querySelector('#toHome').click();
            }
        });
    }

    if(localStorage.username && localStorage.pass){
        if(document.querySelector('.signin [name="username"]')) document.querySelector('.signin [name="username"]').value = localStorage.username;
        if(document.querySelector('.signin [name="password"]')) document.querySelector('.signin [name="password"]').value = localStorage.pass;
    }
	
    return ( 
		<div className="signin">
            <Link id="toHome" to='/management?tab=1'></Link>
            <div className="left">
                <p id="error" className='error'></p>
                <p className="bold upper title">đăng nhập</p>
                <input className="basic-input userName" onKeyUp={handleEnableButton} name="username" placeholder="số điện thoại đã đăng ký"></input>
                <input className="basic-input passWord" onKeyUp={handleEnableButton} name="password" type="password" placeholder="mật khẩu"></input>
                <div className="row">
                    <div className="remember">
                        <input id="remember" className="basic-input" name="remember" type="checkbox"></input>
                        <label for="remember" className="bold upper">ghi nhớ</label>
                    </div>
                    <div className="account-action">
                        <p className="light upper">kích hoạt tài khoản</p>
                        <p className="light upper">quên mật khẩu</p>
                    </div>
                </div>
                <div className="bold signin-button basic-button disabled" onClick={handleLogin}>đăng nhập</div>
                <p className="bold upper basic-button support">hỗ trợ kỹ thuật: 078.3456.434</p>
            </div>
            <Right type="signin"></Right>
        </div>
    );
}

export default SignIn;