import React from 'react';
import './Community.scss';
import FloatPost from "js/Community/FloatPost/FloatPost";
import Category from '../Category/Category';
import PostingBtn from '../PostingBtn/PostingBtn';
import { Route, Routes } from 'react-router-dom';
import Posting from '../Posting/Posting/Posting';
import ContentDetail from '../ContentDetail/ContentDetail';

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
                <Route path='/:id' element={<ContentDetail />} />
                <Route path="posting" element={<Posting />} />
            </Routes>
        </div>
    );
}

export default Community;