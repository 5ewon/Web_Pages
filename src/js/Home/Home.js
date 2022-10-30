import './Home.scss';
import HomeTodoList from './HomeTodoList/HomeTodoList';
import HomeRanking from './HomeRanking/HomeRanking';
import HomePopularCommunity from './HomePopularCommunity/HomePopularCommunity';

function Home(){
    return(
        <div id="home">
            <div id="banner"></div>
            <div id="home-contents">
                <HomeTodoList />
                <HomeRanking />
                <HomePopularCommunity />
            </div>
        </div>
    );
}

export default Home;