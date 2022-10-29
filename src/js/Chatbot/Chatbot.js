import './Chatbot.scss';
import chatbot_image from 'images/Chatbot/chatbot.svg';
import three_dots from 'images/Chatbot/three_dots.svg';
import close from 'images/Chatbot/close.svg';
import file from 'images/Chatbot/file.svg';
import emoticon from 'images/Chatbot/emoticon.svg';

import { useState } from 'react';

function Chatbot() {
    const [isClick, setIsClick] = useState(false);
    const [MSG, setMSG] = useState('');

    return (
        <div id="chatbot">
            {isClick ?
                <div id="chatbot-container">
                    <div id="chatbot-header">
                        프로틴
                        <div id="chatbot-header-buttons">
                            <img id="chatbot-settings" src={three_dots} alt="settings" />
                            <img id="chatbot-close" src={close} alt="close" onClick={() => setIsClick(false)} />
                        </div>
                    </div>
                    <div id="chatbot-section"></div>
                    <div id="chatbot-message">
                        <div>
                            <input placeholder="글을 입력해주세요." value={MSG} onChange={e => setMSG(e.target.value)} />
                            <div id="buttons">
                                <img src={emoticon} alt="emoticon" />
                                <img src={file} alt="file" />
                            </div>
                        </div>
                    </div>
                </div> : <div id="chatbot-button" onClick={() => setIsClick(true)}>
                    <div>챗봇</div>
                    <img src={chatbot_image} alt="chatbot" />
                </div>}
        </div>
    );
}

export default Chatbot;