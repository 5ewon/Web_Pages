import './CommentList.scss';

function CommentList({ comments }) {
    return (
        <ul id="comment-list">
            {comments.map(cmt => (
                <li key={cmt.id}>
                    <div className="commenter-info">
                        <span className="commenter">{cmt.commenter}</span>
                        <span className='date'>
                            {cmt.year}년
                            {cmt.month}월
                            {cmt.day}일
                            {cmt.hour}:{cmt.minute}:{cmt.second}
                        </span>
                    </div>
                    <div className="comment">
                        {cmt.comment}
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default CommentList;