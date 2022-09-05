import FirstPage from "js/Introduce/FirstPage/FirstPage";
import About from "js/Introduce/About/About";
import Function from "js/Introduce/Function/Function";
import Footer from "js/Introduce/Footer/Footer";
import './WrapPage.css';

function WrapPage({isLogined}) {
    return(
        <div>
            <FirstPage isLogined={isLogined} />
            <About />
            <Function />
            <Footer />
        </div>
    );
}

export default WrapPage;