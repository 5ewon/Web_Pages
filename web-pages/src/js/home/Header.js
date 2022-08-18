import '../introduce/css/header.css';
import logo from '../../images/logo.png';

function Header(){
    return(
        <header className="HomeWrapPage-header">
            <div>
                <ul>
                    <li id="logo"><img src={logo}/></li>
                    <li id="studyMethod">이주의 공부법</li>
                    <li id="planner">플래너</li>
                    <li id="community">커뮤니티</li>
                    <li id="introduce">소개</li>
                    <div id="homeLogin">
                        <li>로그인</li>
                        <li>회원가입</li>
                    </div>
                </ul>
            </div>
        </header>
    );
}

export default Header;