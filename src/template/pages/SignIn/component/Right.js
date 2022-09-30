
function Right(prop) {
	
    return ( 
		<div className="right">
            <div className="up">
                {
                    prop.type === 'signin' ? 
                    <>
                        <p className="upper">bạn chưa có tài khoản ? đăng ký ngay</p>
                        <p className="basic-button">đăng ký tài khoản</p>
                    </>
                    :
                    <>
                        <p className="upper">bạn đã có tài khoản ? đăng nhập ngay</p>
                        <p className="basic-button">đăng nhập</p>
                    </>
                }
            </div>
            <p>hoặc</p>
            <div className="down">
                <p className="basic-button google">đăng nhập qua google</p>
                <p className="basic-button facebook">đăng nhập qua facebook</p>
            </div>
        </div>
    );
}

export default Right;