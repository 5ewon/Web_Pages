import './Home.scss';
import HomeTodoList from './HomeTodoList/HomeTodoList';
import HomeRanking from './HomeRanking/HomeRanking';

function Home(){
    return(
        <div id="home">
            <div id="banner"></div>
            <div id="home-contents">
                <HomeTodoList />
                <HomeRanking />
            </div>
        </div>
    );
}

export default Home;