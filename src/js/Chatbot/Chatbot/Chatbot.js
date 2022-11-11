import './Chatbot.scss';
import chatbot_image from 'images/Chatbot/chatbot.svg';
import three_dots from 'images/Chatbot/three_dots.svg';
import close from 'images/Chatbot/close.svg';
import file from 'images/Chatbot/file.svg';
import emoticon from 'images/Chatbot/emoticon.svg';
import icon from 'images/Chatbot/icon.svg';
import user1 from 'images/Chatbot/user1.svg';

import { useState, render } from 'react';
import ChatbotKit from '../ChatbotKit/ChatbotKit';

function Chatbot() {
    const [isSelect, setIsSelect] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const [isSetting, setIsSetting] = useState(false);
    const [MSG, setMSG] = useState('');
    const [answer, setAnswer] = useState()
    const todayTime = () => {
        let now = new Date();  // 현재 날짜 및 시간; 
        let todayMonth = now.getMonth() + 1;
        let todayDate = now.getDate();
        let hours = now.getHours()>=12 ? now.getHours()-12 : now.getHours();
        let minutes = now.getMinutes();
        return todayMonth + '월' + todayDate + '일 ' + hours + ':' + minutes;
    }
    const [questions, setQuestions] = useState("질문하기");
    return (
        <div id="chatbot">
            {isClick ? <div>
                <ChatbotKit />
            </div>
                
                // (isSetting ? 
                //     <div id="chatbot-container">
                //         <div id="chatbot-header">
                //             설정
                //             <div id="chatbot-header-buttons">
                //                 <img id="chatbot-settings" src={three_dots} alt="settings" onClick={() => setIsSetting(false)}/>
                //                 <img id="chatbot-close" src={close} alt="close" onClick={() => setIsClick(false)} />
                //             </div>
                //         </div>
                //         <div id="chatbot-section-wrap">
                //             <div id="chatbot-section-setting">
                //                 <div id="setting">
                //                     <div id="amugae">
                //                         <img src={user1} alt="user1" />
                //                         <div>
                //                             <p>아무개씨</p><br />
                //                             <p id="email">abcdef@gmail.com</p>
                //                         </div>
                //                     </div>
                //                 </div>
                //                 <div id="line" />
                //                 {isSelect ? <div id="setting-option">
                //                     <div onClick={() => setIsSelect(false)} style={{cursor:"pointer"}}>X</div>
                //                     <ul>
                //                         <li>1</li>
                //                         <li>2</li>
                //                         <li>3</li>
                //                     </ul>
                //                 </div> : <div id="setting-option" onClick={() => setIsSelect(true)} style={{cursor:"pointer"}}>
                //                     옵션
                //                 </div>}
                //             </div>
                //         </div>
                //     </div> : <div id="chatbot-container">
                //         <div id="chatbot-header">
                //             프로틴
                //             <div id="chatbot-header-buttons">
                //                 <img id="chatbot-settings" src={three_dots} alt="settings" onClick={() => setIsSetting(true)}/>
                //                 <img id="chatbot-close" src={close} alt="close" onClick={() => setIsClick(false)} />
                //             </div>
                //         </div> 
                //         <div id="chatbot-section-wrap">
                //             <div id="chatbot-section-content">
                //                 <div id="chatbot-date">{todayTime().slice(0, 20)}</div>
                //                 <div id="chatbot-box">
                //                     <img src={icon} alt="icon" />
                //                     <div id="chatbot-box-wrap">
                //                         <div id="proteen-text">프로틴</div>
                //                         <div id="chatbot-box-bot">
                //                             <p>프로틴에 오신 것을 환영합니다!<br />
                //                             챗봇 AI에서는 뭐든 질문할 수 있어요.</p>
                //                             <p>프로틴에 대해 알고 싶으신가요?<br />
                //                             아래 버튼을 눌러 궁금증을 해소해보세요 :)</p>
                //                         </div>
                //                     </div>
                //                 </div>
                //                 <div id="chatbot-options">
                //                     <div className="chatbot-options-radios">
                //                         <input type="radio" id="plan" value="plan" name="ch_info"/>
                //                         <label htmlFor="plan" onClick={() => setQuestions("플래너 작성법")}><div>플래너 작성법</div></label>
                //                     </div>
                //                     <div className="chatbot-options-radios">
                //                         <input type="radio" id="info" value="info" name="ch_info" />
                //                         <label htmlFor="info" onClick={() => setQuestions("개발자 정보")}><div>개발자 정보</div></label>
                //                     </div>
                //                     <div className="chatbot-options-radios">
                //                         <input type="radio" id="com" value="com" name="ch_info" />
                //                         <label htmlFor="com" onClick={() => setQuestions("커뮤니티 글 작성법")}><div>커뮤니티 글 작성법</div></label>
                //                     </div>
                //                     <div className="chatbot-options-radios">
                //                         <input type="radio" id="tr" value="tr" name="ch_info" />
                //                         <label htmlFor="tr" onClick={() => setQuestions("티어 올리는 방법")}><div>티어 올리는 방법</div></label>
                //                     </div>
                //                 </div>
                //                 <div id="chatbot-box-user">
                //                     {questions}
                //                 </div>
                //                 <div id="chatbot-box">
                //                     <img src={icon} alt="icon" />
                //                     <div id="chatbot-box-wrap">
                //                         <div id="proteen-text">프로틴</div>
                //                         <div id="chatbot-box-bot">
                //                             <p>프로틴에 오신 것을 환영합니다!<br />
                //                             챗봇 AI에서는 뭐든 질문할 수 있어요.</p>
                //                             <p>프로틴에 대해 알고 싶으신가요?<br />
                //                             아래 버튼을 눌러 궁금증을 해소해보세요 :)</p>
                //                         </div>
                //                     </div>
                //                 </div>
                //             </div>
                //         </div>
                //         <div id="chatbot-message">
                //             <div>
                //                 <input placeholder="글을 입력해주세요." value={MSG} onChange={e => setMSG(e.target.value)} />
                //                 <div id="buttons">
                //                     <img src={emoticon} alt="emoticon" />
                //                     <img src={file} alt="file" />
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // )
                : <div id="chatbot-button" onClick={() => setIsClick(true)}>
                        <div>챗봇</div>
                        <img src={chatbot_image} alt="chatbot" />
                    </div>}
        </div>
    );
}

export default Chatbot;