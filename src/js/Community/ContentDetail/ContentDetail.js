import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './ContentDetail.scss';
import dummy from "js/Community/Dummy/Dummy"
import profile from 'images/profile.svg';
import CommentList from './CommentList/CommentList';
import AddComment from './AddComment/AddComment';

function ContentDetail() {
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState({});
    const { id } = useParams();
    const findContent = async (id) => {
        let content = null;
        dummy.contents.forEach(currentContent => {
            if (currentContent.id === Number(id)) {
                // console.log(currentContent);
                content = currentContent;
            }
        });
        if (content) return content;
        else throw new Error('존재하지 않는 커뮤니티입니다.');
    }
    const getContent = async () => {
        await findContent(id).then(content => {
            setContent(content);
        }).catch(error => {
            console.log(error);
        })
        setLoading(false);
    }
    // console.log(id);
    useEffect(() => { getContent() }, []);
    return (
        loading ? <h1>새ㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㄵ</h1> :
            <div id="content-detail-page">
                <div className="content-detail">
                    <div key={content.id} className="content-detail-wrap">
                        <div className="detail">
                            <div className="writer-info">
                                <img src={profile} alt="" />
                                <div className='post-info'>
                                    <div className='writer'>{content.writer}</div>
                                    <div className="date">{content.year}년 {content.month}월 {content.day}일</div>
                                </div>
                            </div>
                            <div className="contents">
                                <div className="tag">#{content.tag}</div><br />
                                <div className="title">{content.title}</div><br />
                                <div className='summary'>{content.summary}</div><br />
                                <div className="under"><span className="gray">프로틴</span> <span className="bold">{content.proteen}g</span> <span className="gray">댓글</span> <span className="bold">{content.comment.length}개</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <CommentList comments={content.comment} />
                <AddComment />
            </div>
    )
}

export default ContentDetail;