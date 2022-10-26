import React, { useState } from "react";
import Slider from "react-slick";
import "./Category.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dummy from "js/Community/Dummy/Dummy";
import PostList from "../PostList/PostList";

const Category = () => {
  const [tag, setTag] = useState("C");

  function selectTag(e) {
    setTag(e.target.value);
    // console.log(e.target);
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    arrows: false,
  };
  return (
    <div id="category-wrap">
        <div id="category-options">
          {/* <Slider {...settings}> */}
                {
                    dummy.options.map((options) => {
                        return (
                            <div id="category-options-radios">
                                <input type="radio" className="radio-hide" id={options.id} value={options.category} name="chk_info" onClick={selectTag} />
                                <label htmlFor={options.id}>{options.category}</label>
                            </div>
                        );
                    })
                }
          {/* </Slider> */}
        </div>
        <div>
            <PostList lang={tag} />
        </div>
    </div>
  );
};

export default Category;
