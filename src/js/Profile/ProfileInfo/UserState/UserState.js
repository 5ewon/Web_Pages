import './UserState.scss';
import profileImage from 'images/Profile/profile.svg';

function UserState() {
    return (
        <div id="user-state">
            <div>
                <img src={profileImage} alt="프로필사진" />
                <span id="user-name"><span>아무개</span>님</span>
                <span id="user-id">amugae1234</span>
            </div>
            <img id="setting" src="" alt="setting" />
        </div>
    )
}

export default UserState;