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
                                <div className="summary">
                                    <img id="profile" src={profile} alt="" style={{ width: "45px" }} />
                                    <div className="">
                                        <div className="gray">{contents.year}년 {contents.month}월 {contents.day}일</div>
                                        <div className="tag">#{contents.tag}</div><br />
                                        <div className="title">{contents.title}</div><br />
                                        <div>{contents.summary}</div><br />
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