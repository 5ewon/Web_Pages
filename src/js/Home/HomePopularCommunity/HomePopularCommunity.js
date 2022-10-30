import { Link } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomePopularCommunity.scss';
import fire from 'images/fire.svg';
import arrow from 'images/arrow.svg';
import Slider from 'react-slick';
import profile from 'images/profile.svg';
import dummy from '../Dummy.json';
import { useState } from 'react';
import { useEffect } from 'react';

function HomePopularCommunity() {
    const [popularContents, setPopularContents] = useState([]);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };
    useEffect(() => {
        const sortedContents = dummy.contents.sort((cur, comp) => ((cur.year + cur.month + cur.day - cur.comment.length * 5) - (comp.year + comp.month + comp.day - comp.comment.length * 5)));
        setPopularContents(sortedContents.slice(0, 7));
    }, []);
    return (
        <div id="home-popular-community">
            <div id="home-popular-community-title">
                <span>이번주 인기글</span>
                <img src={fire} alt="fire" />
                <img src={arrow} alt="arrow" />
            </div>
            <div id="home-popular-community-explain">
                사람들에게 도움이 많이 된 커뮤니티 글!
            </div>
            <div id="home-popular-community-contents">
                <Slider {...settings}>
                    {popularContents.map((content) => (
                        <Link to={`/main/community/${content.id}`} key={content.id}>
                            <div key={content.id}>
                                <div className="list">
                                    <div className="detail">
                                        <div className="writer-info">
                                            <img src={profile} alt="" style={{ width: "45px" }} />
                                            <div className='writer'>{content.writer}</div>
                                        </div>
                                        <div className="inner">
                                            <div className="tag">#{content.tag}</div><br />
                                            <div className="title">{content.title}</div><br />
                                            <div>{content.summary.length > 20 ? `${content.summary.slice(0, 25)}...` : content.summary}</div><br />
                                            <div className="under"><span className="gray">프로틴</span> <span className="bold">{content.proteen}g</span> <span className="gray">댓글</span> <span className="bold">{content.comment.length}개</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default HomePopularCommunity;