import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";
import "./PostCategories.css";

class PostCategories extends Component {
  render() {
    const { prefix, categories } = this.props;
    if (categories) {
      return (
        <span>
          {prefix}
          {categories.map((category) => (
            <span key={category}>
              <Link key={category} to={`/categories/${_.kebabCase(category)}`}>
                {category}
              </Link>
              {/* {index !== arr.length - 1 ? ", " : ""} */}
            </span>
          ))}
        </span>
      );
    }
    return null;
  }
}

export default PostCategories;
