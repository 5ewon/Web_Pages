import './ThisWeeksStudyOptions.scss';

function ThisWeeksStudyOptions() {
    return (
        <div id="this-weeks-study-options">
            <div id="this-weeks-study-options-radios">
                <input id="twsor-1" type="radio" name="this-weeks-study-options-radio" defaultChecked />
                <label htmlFor='twsor-1'>
                    이 주의 공부법
                </label>
                <input id="twsor-2" type="radio" name="this-weeks-study-options-radio" />
                <label htmlFor='twsor-2'>
                    오늘의 공부법
                </label>
                <input id="twsor-3" type="radio" name="this-weeks-study-options-radio" />
                <label htmlFor='twsor-3'>
                    랭킹
                </label>
            </div>
            <button>
                공부법 올리기
                <img src="" />
            </button>
        </div>
    )
}

export default ThisWeeksStudyOptions;