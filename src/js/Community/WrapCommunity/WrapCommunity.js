import React from 'react';
import './WrapCommunity.scss';
import FloatPost from "js/Community/FloatPost/FloatPost";
import Category from '../Category/Category';
import PostingBtn from '../PostingBtn/PostingBtn';

const WrapCommunity = () => {
    return (
        <div>
            <div id="box">             
                <FloatPost />
            </div>
            <div>
               <Category/>
            </div>
            <PostingBtn />
        </div>
    );
}

export default WrapCommunity;