import RightArrow from 'images/Home/right-arrow.svg';
import './HomeTodoList.scss';

function HomeTodoList() {
    return (
        <div id="home-todo-list">
            <div id="home-todo-list__wrap">
                <div id="home-todo-list__header">
                    <div>
                        <h1><span>{"아무개"}</span>님의 today-list</h1>
                        <img />
                    </div>
                    <h2>하루하루 플래너를 채워보세요!</h2>
                </div>
                <ul id="home-todo-list__contents">
                    <li id="home-todo-list__content">
                        <div id="home-todo-list__content__header">
                            <h3 id="home-todo-d-day">D-<span>{1}</span></h3>
                            <h3 id="home-todo-title">JS 함수 이론정리</h3>
                        </div>
                        <div id="home-todo-list__content__section">
                            <h5><span>{10}+</span> 프로틴 받으러 가기</h5>
                            <img src={RightArrow} alt="right-arrow" />
                        </div>
                    </li>
                    <li id="home-todo-list__content">
                        <div id="home-todo-list__content__header">
                            <h3 id="home-todo-d-day">D-<span>{1}</span></h3>
                            <h3 id="home-todo-title">JS 함수 이론정리</h3>
                        </div>
                        <div id="home-todo-list__content__section">
                            <h5><span>{10}+</span> 프로틴 받으러 가기</h5>
                            <img src={RightArrow} alt="right-arrow" />
                        </div>
                    </li>
                    <li id="home-todo-list__content">
                        <div id="home-todo-list__content__header">
                            <h3 id="home-todo-d-day">D-<span>{1}</span></h3>
                            <h3 id="home-todo-title">JS 함수 이론정리</h3>
                        </div>
                        <div id="home-todo-list__content__section">
                            <h5><span>{10}+</span> 프로틴 받으러 가기</h5>
                            <img src={RightArrow} alt="right-arrow" />
                        </div>
                    </li>
                    <li id="home-todo-list__content">
                        <div id="home-todo-list__content__header">
                            <h3 id="home-todo-d-day">D-<span>{1}</span></h3>
                            <h3 id="home-todo-title">JS 함수 이론정리</h3>
                        </div>
                        <div id="home-todo-list__content__section">
                            <h5><span>{10}+</span> 프로틴 받으러 가기</h5>
                            <img src={RightArrow} alt="right-arrow" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HomeTodoList;