import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({upload}) => {
    return (
        <div className="buttons">
            <Link to="/main/community"><button id="cancel">취소하기</button></Link>
            <button id="upload" onClick={upload}>글올리기</button>
        </div>
    );
}

export default Button;