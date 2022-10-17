import history from '../ThisWeeksStudy.json';

import './ThisWeeksStudyHistory.scss';

function ThisWeeksStudyHistory() {
    return (
        <div id="this-weeks-study-history">
            <div id="this-weeks-study-history-header">
                <img src="" alt="기록" />
                <span id="this-weeks-study-history-id">yubin12</span>
                님의 공부법 시청기록
            </div>
            <div id="this-weeks-study-history-scroll">
                <ul>
                    {
                        history.history.map((history, i) => (
                            <li key={i}>
                                <img src={history} />
                                <h1>{history.title}</h1>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ThisWeeksStudyHistory;