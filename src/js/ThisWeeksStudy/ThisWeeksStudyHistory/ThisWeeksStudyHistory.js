import history from '../ThisWeeksStudy.json';

function ThisWeeksStudyHistory() {
    return (
        <div>
            <div>
                <img />
                <span id="this-weeks-study-history-id">yubin12</span>
                님의 공부법 시청기록
            </div>
            <ul>
                {
                    history.history.map(history => (
                        <li>
                            <img src={history} />
                            <h1>{history.title}</h1>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ThisWeeksStudyHistory;