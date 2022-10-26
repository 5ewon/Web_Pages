import { Link } from 'react-router-dom';
import './PostingBtn.scss';
import postingBtn from 'images/postingBtn.svg';

const PostingBtn = () => {
    return (
        <div id="PB">
            <Link to="posting"><img src={postingBtn} alt="" /></Link>
        </div>
    );
}

export default PostingBtn;