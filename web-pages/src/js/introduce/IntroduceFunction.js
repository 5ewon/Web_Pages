import './css/introduceFunction.css';

function IntroduceFunction() {
    return(
        <div className="containers sticky">
            <h3 id="introduce-function-h3">기능소개</h3>
            <div id="functions-container">
                <div className="function">
                    <div className="wrap-function">
                        <div>
                            <img />
                            회원관리
                        </div>
                        <div className="function-paragraph">
                            기능
                        </div>
                    </div>
                </div>
                <div className="function">
                    <div className="wrap-function">
                        <div>
                            <img />
                            계시판 이용
                        </div>
                        <div>
                            기능
                        </div>
                    </div>
                </div>
                <div className="function">
                    <div className="wrap-function">
                        <div>
                            <img />
                            플래너 작성
                        </div>
                        <div>
                            기능
                        </div>
                    </div>
                </div>
                <div className="function">
                    <div className="wrap-function">
                        <div>
                            <img />
                            인공지능 챗봇
                        </div>
                        <div>
                            기능
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroduceFunction;