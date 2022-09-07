import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import './FirstPage.scss';
import logo from 'images/logo.svg';
import firstPageBG from 'images/cloud_computing.svg';

function FirstPage({ isLogined }) {
    const scrollSign = useRef(null);
    const [scrollOpacity, setScrollOpacity] = useState(false);

    window.addEventListener('scroll', e => {
        window.scrollY > 10 ? // 10이상으로 스크롤하면 scroll아이콘 지우기
            setScrollOpacity(true)
            : setScrollOpacity(false)
    });

    if (scrollOpacity)
        setTimeout(() => scrollSign.current.classList.add('introduce-remove'), 0);
    else
        setTimeout(() => scrollSign.current.classList.remove('introduce-remove'), 0);

    return (
        <div className="introduce-containers">
            <div id="introduce-login">
                <img id="introduce-logo" src={logo} alt="logo" />
                {isLogined ? null :
                    <div id="introduce-login-signup">
                        <Link to="/login" >
                            <div>
                                로그인
                            </div>
                        </Link>
                        <Link to="/signup">
                            <div>
                                회원가입
                            </div>
                        </Link>
                    </div>
                }
            </div>
            <div id="introduce-scroll-icon" ref={scrollSign}>
                스크롤하기
                <div id="introduce-mouse">
                    <div id="introduce-wheel"></div>
                </div>
            </div>
            <img id="introduce-bg-img" src={firstPageBG} alt="background" />
        </div>
    )
}

export default FirstPage;