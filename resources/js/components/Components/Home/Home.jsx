import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

import Header from "../Header/Header";
import Background from "./components/Background/Background";
import "./style.scss";
import ShowComics from "./components/ShowComics.js/ShowComics";
import ViewComics from "./components/ViewComics/VisitedComics/ViewComics";
import Comment from "./components/Comment/Comment";
import Footer from "../Footer";
import BackToTop from "../Comon/BackToTop/BackToTop";
import TopComics from "../TopComics/TopComics";

export default function Home() {

  return (
    <React.Fragment>
      <Header />
      <Background />
      <div className="distant"></div>
      <Container>
        <Row>
          <Col lg={9} className="Store_Left">
            <ShowComics />
          </Col>
          <Col lg={3} className="Store_Right">
            <div className="right-side">
              <ViewComics />
            </div>
            <div className="comic-wrap">
              <div className="ModuleContent">
                <div className="tab-nav clearfix">
                  <TopComics></TopComics>
                </div>
              </div>
            </div>
            <div className="new-comments">
              <div className="ModuleContent">
                <div className="darkBox">
                  <h6>Bình luận mới</h6>
                  <Comment></Comment>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="distant"></div>
      <Footer></Footer>
      <BackToTop></BackToTop>
    </React.Fragment>
  );
}
