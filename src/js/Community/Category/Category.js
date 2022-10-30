import React, { useRef, useState } from "react";
// import Slider from "react-slick";
import "./Category.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dummy from "js/Community/Dummy/Dummy";
import PostList from "../PostList/PostList";

const Category = () => {
  const [tag, setTag] = useState("C");
  const options = useRef(['C', 'TypeScript', 'HTML', 'Python', 'C++', 'Java', 'JavaScript', 'React', 'Other...']);

  function selectTag(e) {
    setTag(e.target.value);
  }
  return (
    <div id="category-wrap">
      <div id="category-options">
        {
          options.current.map((option, i) => (
            <div className="category-options-radios" key={i}>
              <input type="radio" className="radio-hide" id={option} value={option} name="chk_info" onClick={selectTag} />
              <label htmlFor={option}>{option}</label>
            </div>
          ))
        }
      </div>
      <div>
        <PostList lang={tag} />
      </div>
    </div>
  );
};

export default Category;
