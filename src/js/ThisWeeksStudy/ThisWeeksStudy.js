import ThisWeeksStudyHistory from './ThisWeeksStudyHistory/ThisWeeksStudyHistory';
import ThisWeeksStudyOptions from './ThisWeeksStudyOptions/ThisWeeksStudyOptions';
import ThisWeeksStudyRanking from './ThisWeeksStudyRanking/ThisWeeksStudyRanking';

function ThisWeeksStudy(){
    return(
        <div>
            <ThisWeeksStudyOptions />
            <ThisWeeksStudyRanking />
            <ThisWeeksStudyHistory />
        </div>
    );
}

export default ThisWeeksStudy;