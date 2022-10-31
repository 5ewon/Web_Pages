import './HomeRanking.scss';
import ranking from 'images/ranking.svg';
import arrow from 'images/arrow.svg';
import dummy from './HomeRanking.json';
import { useEffect, useState } from 'react';

function HomeRanking() {
    const [topRanking, setTopRanking] = useState([]);
    useEffect(() => {
        const topRank = dummy.ranking.sort((a, b) => b.proteen - a.proteen);
        setTopRanking(topRank[0]);
    }, []);

    return (
        <div id="home-ranking">
            <div id="home-ranking-title">
                <span>이번주 랭킹</span>
                <img src={ranking} alt="ranking" />
                <img src={arrow} alt="arrow" />
            </div>
            <div id="home-ranking-explain">사람들이 많이 찾아본 프로틴러들의 공부법!</div>
            <div id="home-ranking-contents">
                <div>1</div>
                <div>{topRanking.title}</div>
                <div>{topRanking.author}</div>
                <div>{topRanking.proteen}</div>
            </div>
        </div>
    )
}

export default HomeRanking;