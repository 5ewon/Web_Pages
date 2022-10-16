import ThisWeeksStudyHistory from './ThisWeeksStudyHistory/ThisWeeksStudyHistory';
import ThisWeeksStudyOptions from './ThisWeeksStudyOptions/ThisWeeksStudyOptions';
import ThisWeeksStudyRanking from './ThisWeeksStudyRanking/ThisWeeksStudyRanking';
import './ThisWeeksStudy.scss';

function ThisWeeksStudy(){
    return(
        <div id="this-weeks-study">
            <ThisWeeksStudyOptions />
            <div id="this-weeks-study-contents">
                <ThisWeeksStudyRanking />
                <ThisWeeksStudyHistory />
            </div>
        </div>
    );
}

export default ThisWeeksStudy;