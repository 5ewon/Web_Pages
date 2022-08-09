import LoginPage from "./LoginPage";
import IntroduceWeb from "./IntroduceWeb";
import IntroduceFunction from "./IntroduceFunction";
import Footer from "./Footer";
import './introduce.css';

function FirstPage() {
    return(
        <div id="first-page">
            <LoginPage />
            <IntroduceWeb />
            <IntroduceFunction />
            <Footer />
        </div>
    );
}

export default FirstPage;