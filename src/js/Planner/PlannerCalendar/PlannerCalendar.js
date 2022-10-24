import { useState } from "react";
import { Calendar } from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import './PlannerCalendar.scss';

function PlannerCalendar() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendar onChange={onChange} value={value} onClickDay={v => console.log(v)} />
        </div>
    )
}

export default PlannerCalendar;