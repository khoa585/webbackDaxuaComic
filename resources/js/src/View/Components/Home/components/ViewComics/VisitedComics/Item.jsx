import React from "react";
import { BsX } from "react-icons/bs";

const Item = ({ item }) => {
  return (
    <div className="list-Stote_">
      <div>
        <span className="thumb" title="">
          <img className="img-fluid" src={item.image} alt=""></img>
        </span>
      </div>
      <div className="list_Stote_r">
    
          <h6 className="title">
            <span>{item.name}</span>
          </h6>

        <p className="chapter">
              <span>{item.name}</span>
          <span className="view pull-right">
            <BsX></BsX>
            <span className="visited-remove">
              Xóa
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Item;
