import { useState } from 'react';
import './AddComment.scss';

function AddComment() {
    const [comment, setComment] = useState('');
    return (
        <div id="add-comment">
            <input
                id="comment-input"
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder='댓글을 입력하세요' 
            />
            <input id="add-button" type="submit" value="댓글 달기" />
        </div>
    );
}

export default AddComment;