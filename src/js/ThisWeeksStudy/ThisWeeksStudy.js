import ThisWeeksStudyHistory from './ThisWeeksStudyHistory/ThisWeeksStudyHistory';
import ThisWeeksStudyOptions from './ThisWeeksStudyOptions/ThisWeeksStudyOptions';
import ThisWeeksStudyRanking from './ThisWeeksStudyRanking/ThisWeeksStudyRanking';
import './ThisWeeksStudy.scss';
import { useState } from 'react';
import ThisWeeksStudyTodayRanking from './ThisWeeksStudyTodayRanking/ThisWeeksStudyTodayRanking';
import ThisWeeksStudyThisWeekRanking from './ThisWeeksStudyThisWeekRanking/ThisWeeksStudyThisWeekRanking';

function ThisWeeksStudy(){
    const [rankingPage, setRankingPage] = useState(1);
    return(
        <div id="this-weeks-study">
            <div id="this-weeks-study-contents">
                <ThisWeeksStudyOptions setRankingPage={setRankingPage} />
                {
                    rankingPage === 1 ?
                        <ThisWeeksStudyThisWeekRanking />
                    : rankingPage === 2 ?
                        <ThisWeeksStudyTodayRanking />
                    : rankingPage === 3 ?
                        <ThisWeeksStudyRanking />
                    : null
                }
            </div>
            <ThisWeeksStudyHistory />
        </div>
    );
}

export default ThisWeeksStudy;