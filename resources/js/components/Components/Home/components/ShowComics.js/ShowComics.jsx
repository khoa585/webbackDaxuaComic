import React from "react";
import { GoUnfold } from "react-icons/go";
import { BsChevronRight } from "react-icons/bs";
import { Container, Col, Row } from "react-bootstrap";
import ImageItem from "./ImageItem";
import {DATA} from './DATA'
import { Link } from "react-router-dom";
export default React.memo(function ShowComics() {

  return (
    <div>
      <div className="page-title">
        <h5>
          <GoUnfold />
          &#160;TRUYỆN MỚI CẬP NHẬT&#160;
          <BsChevronRight />
        </h5>
      </div>
      <div className="list_Stote">
        <Row>
          {DATA.map((item) => (
      
            <ImageItem
              title={item.name}
              key={item.id}
              id={item.id}
              image={item.image}
              alt={item.name}
              // chapters={item.chapters}
              views={item.views}
            />
      
          ))}
        </Row>
      </div>
      <div className="pagination">
      </div>
    </div>
  );
})
