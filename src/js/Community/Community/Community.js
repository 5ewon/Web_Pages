import React from 'react';
import './Community.scss';
import FloatPost from "js/Community/FloatPost/FloatPost";
import Category from '../Category/Category';
import PostingBtn from '../PostingBtn/PostingBtn';
import { Route, Routes } from 'react-router-dom';
import Comment from '../Comment/Comment';
import Posting from '../Posting/WrapPosting/WrapPosting';

const Community = () => {
    return (
        <div id="community">
            <Routes>
                <Route path="/" element={
                    <>
                        <div id="box">
                            <FloatPost />
                        </div>
                        <div>
                            <Category />
                        </div>
                        <PostingBtn />
                    </>
                } />
                <Route path='/:id' element={<Comment />} />
                <Route path="posting" element={<Posting />} />
            </Routes>
        </div>
    );
}

export default Community;