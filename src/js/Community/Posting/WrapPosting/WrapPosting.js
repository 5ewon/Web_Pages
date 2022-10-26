import React from 'react';
import './WrapPosting.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Posting = () => {
    return (
        <div id="posting-wrap">
            <div id="guide-text">
                <div id="writing">커뮤니티 글 작성</div>
                <div id="notice">글 작성 시 욕설 및 남을 비방하는 게시물을 작성할 시 해당 계정에 페널티가 주어질 수 있습니다 :)</div>
            </div>
            <div id="input-wrap">
                <Input />
            </div>
            <div id="button-wrap">
                <Button />
            </div>
        </div>
    );
}

export default Posting;