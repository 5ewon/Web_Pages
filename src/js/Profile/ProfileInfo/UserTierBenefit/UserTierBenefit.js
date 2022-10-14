import './UserTierBenefit.scss';
import hearts from 'images/Profile/heart.svg';
import angleBracket from 'images/Profile/angle-bracket.svg';
import fire from 'images/Profile/fire.svg';
import document from 'images/Profile/document.svg';

function UserTierBenefit() {
    return (
        <div id="tier-information">
            <div id="show-benefit"><span></span> 등급 혜택 보기</div>
            <div id="options">
                <div id="about-information">
                    <div id="about-proteen">
                        <div>
                            <img src={hearts} alt="하트이미지" />
                            <span className="user-name">아무개</span>님이 받은 프로틴
                        </div>
                        <div id="proteen-count"><span>17902</span>g</div>
                    </div>
                    <div id="about-follower">
                        <div id="follower">
                            <div>팔로워</div>
                            <div id="follower-count"></div>
                        </div>
                        <div className='vertical-line'></div>
                        <div id="following">
                            <div>팔로잉</div>
                            <div id="following-count"></div>
                        </div>
                        <div className='vertical-line'></div>
                        <div id="study-methods">
                            <div>작성한 공부법</div>
                            <div id="study-methods-count"></div>
                        </div>
                    </div>
                </div>
                <div id="manage-information">
                    <div>
                        📝공부법 관리
                        <img id="angle-bracket" src={angleBracket} alt=">" />
                    </div>
                    <div>
                        ✍️댓글 관리
                        <img id="angle-bracket" src={angleBracket} alt=">" />
                    </div>
                    <div>
                        <img id="document" src={document} alt="" />
                        <span></span>님 지금 공부법 작성하고 최대 1000g 받으세요
                        <img id="fire" src={fire} alt="" />
                        <img id="fire" src={fire} alt="" />
                        <img id="angle-bracket" src={angleBracket} alt=">" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserTierBenefit;