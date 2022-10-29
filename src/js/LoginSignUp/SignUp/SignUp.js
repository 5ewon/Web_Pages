import LoginSignUp from 'js/LoginSignUp/LoginSignUp';
import { useState } from 'react';
import './SignUp.scss';

function SignUp() {
    const [email, setEmail] = useState('');
    const [ID, setID] = useState('');
    const [PW, setPW] = useState('');
    const [rePW, setRePW] = useState('');
    const [Agrees, setAgrees] = useState({
        terms: false,
        personalInfo: false,
        marketing: false
    })

    return (
        <LoginSignUp>
            <div id="signup-section">
                <div id="signup-inputs">
                    <form>
                        <div>
                            <div>이메일</div>
                            <input
                                placeholder='이메일을 입력해주세요.'
                                value={email}
                                onChange={ e => setEmail(e.target.value) }
                            />
                        </div>
                        <div>
                            <div>아이디</div>
                            <input
                                placeholder='아이디를 입력해주세요.'
                                value={ID}
                                onChange={ e => setID(e.target.value) }
                            />
                        </div>
                        <div>
                            <div>비밀번호</div>
                            <input
                                placeholder='영문자, 숫자, 특수문자 포함 최소 8자'
                                value={PW}
                                onChange={ e => setPW(e.target.value) }
                            />
                            <input
                                placeholder='영문자, 숫자, 특수문자 포함 최소 8자'
                                value={rePW}
                                onChange={ e => setRePW(e.target.value) }
                            />
                        </div>
                        <div id="signup-terms">
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={e => setAgrees({
                                        terms: e.target.checked,
                                        personalInfo: e.target.checked,
                                        marketing: e.target.checked
                                    })}
                                />
                                전체동의
                            </label>
                            <div id="signup-checkbox-division-line"></div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={Agrees.terms}
                                    onChange={e => setAgrees(current => ({ ...current, terms: e.target.checked }))}
                                />
                                [필수] 이용약관 동의
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={Agrees.personalInfo}
                                    onChange={e => setAgrees(current => ({ ...current, personalInfo: e.target.checked }))}
                                />
                                [필수] 프로틴 개인정보 수집 및 이용 동의
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={Agrees.marketing}
                                    onChange={e => setAgrees(current => ({ ...current, marketing: e.target.checked }))}
                                />
                                [선택] 광고 수신 동의
                            </label>
                        </div>
                        <input type="submit" value="회원가입" />
                    </form>
                </div>
            </div>
        </LoginSignUp>
    );
}

export default SignUp;