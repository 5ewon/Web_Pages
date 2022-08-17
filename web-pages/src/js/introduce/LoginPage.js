import { useRef, useState } from 'react';
import './css/loginPage.css';

function LoginPage() {
    const scrollSign = useRef(null);
    const [scrollOpacity, setScrollOpacity] = useState(false);
    window.addEventListener('scroll', e => {
        window.scrollY > 10 ?
            setScrollOpacity(true)
            : setScrollOpacity(false)
    });
    if(scrollOpacity)
        setTimeout(() => scrollSign.current.classList.add('scroll-remove'), 0);
    else
    setTimeout(() => scrollSign.current.classList.remove('scroll-remove'), 0);
    return(
        <div className="containers">
            <form id="login-form">
                <input className="login-input" placeholder="아이디" />
                <input className="login-input" placeholder="비밀번호" />
                <input className="login-button" type="button" value="로그인"/>
                <input className="login-button" type="button" value="회원가입"/>
            </form>
            <div id="scroll-sign" ref={scrollSign}>
                스크롤하기
                <div id="mouse-body">
                    <div id="scroller"></div>
                </div>
            </div>
            {/* <img id="logo" />
            <img id="background-img" /> */}
        </div>
    )
}

export default LoginPage;