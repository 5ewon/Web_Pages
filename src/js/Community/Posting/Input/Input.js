import React, { useState } from 'react';
import './Input.scss';

const Input = () => {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');


    return (
        <div>
            <div>
                <textarea
                    id="input-title"
                    type="text"
                    maxLength="30"
                    placeholder='제목_30자 이내 작성'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                ></textarea>
            </div>
            <div>
                <textarea
                    id="input-detail"
                    type="text"
                    maxLength="5000"
                    placeholder='5000자 이내 작성'
                    value={contents}
                    onChange={e => setContents(e.target.value)}
                ></textarea>
            </div>
        </div>
    );
}

export default Input;