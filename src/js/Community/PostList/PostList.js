import React from 'react';
import './PostList.scss';
import dummy from "js/Community/Dummy/Dummy"
import profile from 'images/profile.svg';
import { Link } from 'react-router-dom';

const PostList = ({ lang }) => {

    return (
        <div id="PostList-wrap">
            {dummy.contents.map((contents, i) => (
                contents.tag === lang ?
                    <Link to={`${contents.id}`} key={contents.id}>
                        <div className="post">
                            <div key={contents.id} className="background">
                                <div className="detail">
                                    <div className="writer-info">
                                        <img src={profile} alt=""/>
                                        <div className='post-info'>
                                            <div className='writer'>{contents.writer}</div>
                                            <div className="date">{contents.year}년 {contents.month}월 {contents.day}일</div>
                                        </div>
                                    </div>
                                    <div className="contents">
                                        <div className="tag">#{contents.tag}</div><br />
                                        <div className="title">{contents.title}</div><br />
                                        <div className='summary'>{contents.summary}</div><br />
                                        <div className="under"><span className="gray">프로틴</span> <span className="bold">{contents.proteen}g</span> <span className="gray">댓글</span> <span className="bold">{contents.comment.length}개</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    : null
            ))}
        </div>
    );
}

export default PostList;