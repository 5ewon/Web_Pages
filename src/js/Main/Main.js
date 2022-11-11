import { Routes, Route, Navigate } from 'react-router-dom';

import Header from 'js/Header/Header';
import Chatbot from 'js/Chatbot/Chatbot/Chatbot';
// import Chatbot from 'js/Chatbot/ChatbotKit/ChatbotKit';
import Home from 'js/Home/Home';
import Profile from 'js/Profile/Profile';
import Planner from 'js/Planner/Planner';
import Community from 'js/Community/Community/Community';
import NotFound from 'js/NotFound/NotFound';
import ThisWeeksStudy from 'js/ThisWeeksStudy/ThisWeeksStudy';

function Main({isLogined}) {
    return (
        <div>
            <Header isLogined={isLogined} />
            <Chatbot />
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="planner" element={<Planner />} />
                <Route path="twoweeksstudy" element={<ThisWeeksStudy />} />
                <Route path="community/*" element={<Community />} />
                <Route path="/" element={<Navigate to="home" />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default Main;