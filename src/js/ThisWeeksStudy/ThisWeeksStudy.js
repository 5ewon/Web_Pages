import ThisWeeksStudyHistory from './ThisWeeksStudyHistory/ThisWeeksStudyHistory';
import ThisWeeksStudyOptions from './ThisWeeksStudyOptions/ThisWeeksStudyOptions';
import ThisWeeksStudyRanking from './ThisWeeksStudyRanking/ThisWeeksStudyRanking';
import './ThisWeeksStudy.scss';

function ThisWeeksStudy(){
    return(
        <div id="this-weeks-study">
            <div id="this-weeks-study-contents">
                <ThisWeeksStudyOptions />
                <ThisWeeksStudyRanking />
            </div>
            <ThisWeeksStudyHistory />
        </div>
    );
}

export default ThisWeeksStudy;