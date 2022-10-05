import { useState } from 'react';
import './TiersInfo.scss';

function TiersInfo() {
    const [infoNum, setInfoNum] = useState(null);
    return (
        <div id="tiers-info">
            <div id="tiers">
                <input id="chicken-tier" type="radio" name="tier" />
                <label htmlFor='chicken-tier' onClick={() => setInfoNum(1)}>
                    닭
                </label>
                <input id="proteen-tier" type="radio" name="tier" />
                <label htmlFor='proteen-tier' onClick={() => setInfoNum(2)}>
                    단
                </label>
                <input id="health-tier" type="radio" name="tier" />
                <label htmlFor='health-tier' onClick={() => setInfoNum(3)}>
                    헬
                </label>
                <input id="egg-tier" type="radio" name="tier" />
                <label htmlFor='egg-tier' onClick={() => setInfoNum(4)}>
                    계
                </label>
                <input id="bean-tier" type="radio" name="tier" />
                <label htmlFor='bean-tier' onClick={() => setInfoNum(5)}>
                    콩
                </label>
            </div>
            <div id="tier-explanations">
                {
                    infoNum === 1 ?
                        <fieldset>
                            <legend>닭</legend>
                            <ul>
                                <li><div></div>매달 15일 150g 추가 적립</li>
                                <li><div></div>본인 작섣 글 커뮤니티 상단에 1주일 고정</li>
                                <li><div></div>다음 등급에 달성할 수 있는 기회!</li>
                            </ul>
                        </fieldset>
                    : infoNum === 2 ?
                        <fieldset>
                            <legend>단백질</legend>
                            <ul>
                                <li><div></div>매달 15일 150g 추가 적립</li>
                                <li><div></div>본인 작섣 글 커뮤니티 상단에 1주일 고정</li>
                                <li><div></div>다음 등급에 달성할 수 있는 기회!</li>
                            </ul>
                        </fieldset>
                    : infoNum === 3 ?
                        <fieldset>
                            <legend>헬린이</legend>
                            <ul>
                                <li><div></div>매달 15일 150g 추가 적립</li>
                                <li><div></div>본인 작섣 글 커뮤니티 상단에 1주일 고정</li>
                                <li><div></div>다음 등급에 달성할 수 있는 기회!</li>
                            </ul>
                        </fieldset>
                    : infoNum === 4 ?
                        <fieldset>
                            <legend>계란</legend>
                            <ul>
                                <li><div></div>매달 15일 150g 추가 적립</li>
                                <li><div></div>본인 작섣 글 커뮤니티 상단에 1주일 고정</li>
                                <li><div></div>다음 등급에 달성할 수 있는 기회!</li>
                            </ul>
                        </fieldset>
                    : infoNum === 5 ?
                        <fieldset>
                            <legend>콩</legend>
                            <ul>
                                <li><div></div>매달 15일 150g 추가 적립</li>
                                <li><div></div>본인 작섣 글 커뮤니티 상단에 1주일 고정</li>
                                <li><div></div>다음 등급에 달성할 수 있는 기회!</li>
                            </ul>
                        </fieldset>
                    : null
                }
            </div>
        </div>
    )
}

export default TiersInfo;