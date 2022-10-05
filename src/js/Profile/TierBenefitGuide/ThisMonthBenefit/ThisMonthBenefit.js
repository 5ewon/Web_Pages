import './ThisMonthBenefit.scss';
import coin from 'images/Profile/coin.svg';
import heart from 'images/Profile/heart.svg';
import graph from 'images/Profile/graph.svg';

function ThisMonthBenefit() {
    return (
        <div id="this-month-benefits">
            <h6><span className="user-name">아무개</span>님의 이번 달 등급과 혜택</h6>
            <div>
                <div>
                    <h5>계란</h5>
                    <ul>
                        <li>
                            <img src={coin} alt="코인" />
                            <div>매달 15일 100g 추가 적립</div>
                        </li>
                        <li>
                            <img src={heart} alt="하트이미지" />
                            <div>본인 작섣 글 커뮤니티 상단에 3일 고정</div>
                        </li>
                        <li>
                            <img src={graph} alt="그래프 이미지" />
                            <div>헬린이에 달성할 수 있는 기회!</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ThisMonthBenefit;