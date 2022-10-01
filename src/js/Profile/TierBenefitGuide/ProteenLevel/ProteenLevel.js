import { useEffect, useRef } from 'react';
import './ProteenLevel.scss';

function ProteenLevel() {
    const progressValue = useRef();
    useEffect(() => {
        progressValue.current.style.width = `${17092/20000*330}px`; // 현재 레벨/최대레벨 * 너비
    }, []);

    return (
        <div id="proteen-level">
            <div>
                <h1><span id="next-proteen"></span>g 획득 시 다음 등급 달성!</h1>
                <div id="progress">
                    <div id="progress-value" ref={progressValue}></div>
                </div>
                <div id="progress-figure">
                    <span id="current-level">
                        <span>17902</span>g
                    </span>
                    <span id="max-level">
                        <span>20000</span>g
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProteenLevel;