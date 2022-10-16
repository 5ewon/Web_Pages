import ranking from '../ThisWeeksStudy.json';
import './ThisWeeksStudyRanking.scss';

function ThisWeeksStudyRanking() {
    return (
        <div id="this-weeks-study-ranking">
            <div id="ranking-header">
                <h1 >순위</h1>
                <h1 >제목</h1>
                <h1 >사용자</h1>
                <h1 >받은 프로틴</h1>
            </div>
            <ul id="ranking-list">
                {
                    ranking.ranking.map((rank, i) => (
                        <li key={i}>
                            <h2>{i+1}</h2>
                            <h2>{rank.title}</h2>
                            <h2>{rank.author}</h2>
                            <h2>{rank.proteen}</h2>
                        </li>
                    ))
                }
            </ul>
            <div id="this-weeks-study-my-ranking"><span id="this-weeks-study-user-name">양유빈</span>님은 현재 345231217위입니다.</div>
        </div>
    )
}

export default ThisWeeksStudyRanking;