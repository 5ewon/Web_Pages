import LoginSignUp from 'js/LoginSignUp/LoginSignUp';
import { useState } from 'react';
import './Login.scss';

function Login() {
    const [ID, setID] = useState('');
    const [PW, setPW] = useState('');
    console.log(ID, PW);

    return (
        <LoginSignUp>
            <div id="login-section">
                <div id="login-inputs">
                    <form>
                        <div>
                            <div>아이디</div>
                            <input
                                placeholder='아이디를 입력해주세요.'
                                value={ID}
                                onChange={e => setID(e.target.value)}
                            />
                        </div>
                        <div>
                            <div>비밀번호</div>
                            <input
                                placeholder='비밀번호를 입력해주세요.'
                                value={PW}
                                onChange={e => setPW(e.target.value)}
                            />
                        </div>
                        <input type="submit" value="로그인" />
                    </form>
                    <input type="button" value="계정이 없으신가요?" />
                </div>
            </div>
        </LoginSignUp>
    );
}

export default Login;