import PlannerTodoListData from './PlannerTodoList.json';
import done from 'images/Planner/done.svg';
import undone from 'images/Planner/undone.svg';
import './PlannerTodoList.scss';

function PlannerTodoList() {
    return (
        <div id="planner-todo-list">
            <h1 id="planner-todo-header">오늘은 {}월 {}일 {}요일</h1>
            <div id="todo-contents">
                <h1 id="todo-contents-title">To Do</h1>
                <ul id="todos">
                    {
                        PlannerTodoListData.toDoList.map(toDo => (
                            <li key={toDo.toDoID}>
                                <img src={toDo.done ? done : undone} />
                                {toDo.contents}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default PlannerTodoList;