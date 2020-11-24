import React from "react";
import { Col } from "react-bootstrap";
import { BsFillEyeFill, BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import "./ImageItem.scss";
const ImageItem = ({ image, alt, views, like, title, id }) => {

  return (
    <Col lg={3} className="my-3" md={4} sm={6} xs={6}>
      <div className="item_Store">
        <span>
          <a>
            <div className="image">
              <Link to="/detail">
                <img className="img-fluid" src={image} alt={alt} />
              </Link>
              <div className="follow_View_Store">
                <span>
                  <BsFillEyeFill />
                  {views}
                </span>
                <span>
                  <BsFillHeartFill />
                  {like}
                </span>
              </div>
              <div className="hot_trend">
                <span>Hot</span>
              </div>
            </div>
          </a>
        </span>
        <div className="title_Item">
          <span className="jtip" data-jtip="#truyen-tranh-9929">

            <h6>{title}</h6>

          </span>

        </div>
      </div>
    </Col>
  );
};

export default React.memo(ImageItem);
