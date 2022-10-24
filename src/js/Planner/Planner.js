import PlannerCalendar from './PlannerCalendar/PlannerCalendar';
import PlannerTodoList from './PlannerTodoList/PlannerTodoList';
import './Planner.scss';

function Planner(){
    return(
        <div id="planner">
            <PlannerCalendar />
            <PlannerTodoList />
        </div>
    );
}

export default Planner;