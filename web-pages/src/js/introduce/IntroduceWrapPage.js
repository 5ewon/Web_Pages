import LoginPage from "./LoginPage";
import IntroduceWeb from "./IntroduceWeb";
import IntroduceFunction from "./IntroduceFunction";
import Footer from "./Footer";
import './css/introduceWrapPage.css';

function IntroduceWrapPage() {
    return(
        <div id="introduce-wrap-page">
            <LoginPage />
            <IntroduceWeb />
            <IntroduceFunction />
            <Footer />
        </div>
    );
}

export default IntroduceWrapPage;