import './HomeRanking.scss';
import ranking from 'images/ranking.svg';
import arrow from 'images/arrow.svg';

function HomeRanking() {
    return (
        <div id="home-ranking">
            <div id="home-ranking-title">
                <span>이번주 랭킹</span>
                <img src={ranking} alt="ranking" />
                <img src={arrow} alt="arrow" />
            </div>
            <div id="home-ranking-explain">사람들이 많이 찾아본 프로틴러들의 공부법!</div>
            <div id="home-ranking-contents">
            </div>
        </div>
    )
}

export default HomeRanking;