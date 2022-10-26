import React from 'react';
import './Input.scss';

const Input = () => {
    return (
        <div>
            <div>
                <textarea id="input-title" type="text" maxlength="30" placeholder='제목_30자 이내 작성'></textarea>
            </div>
            <div>
                <textarea id="input-detail" type="text" maxlength="5000" placeholder='5000자 이내 작성'></textarea>
            </div>
        </div>
    );
}

export default Input;