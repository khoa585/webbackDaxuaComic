import React from "react";
import Header from "../Header/Header";
import "../Home/style.scss";
import { Container, Col, Row } from "react-bootstrap";
import { BsFileEarmarkText, BsCardList } from "react-icons/bs";
import { TiPlus } from "react-icons/ti";
import {
  BsChevronRight,
  BsFillPersonFill,
  BsTagFill,
  BsWifi,
  BsEyeFill,
  BsFillStarFill,
  BsHeart,
} from "react-icons/bs";
import "./style.scss";
import Footer from "../Footer";
import TopComics from "../TopComics/TopComics";
import { Link } from "react-router-dom";
export default React.memo(function DetailedStory() {


  return (
    <>
      <header className="header">
        <Header></Header>
      </header>
      <div className="container_Detail">
        <div className="distant_Comics"></div>
        <Container className="detail_Comics">
          <Row>
            <Col lg={8} className="container_lg">
              <div className="title_Menu">
                <div className="title_comics">
                  <li className="itemListElement">
                    <span>Trang chủ</span>&#160;
                    <BsChevronRight></BsChevronRight>
                  </li>
                  <li className="itemListElement">
                    <span>Thể loại</span>&#160;<BsChevronRight></BsChevronRight>
                  </li>
                  <li className="itemListElement">
                    <span>Tên Truyện</span>
                  </li>
                </div>
              </div>
              <div className="detail-info">
                <div className="name_Story">
                  <h4>Bách Luyện Thành Thần</h4>
                  <span>Đánh giá: 9.1/10 từ 44061 lượt</span>
                </div>
                <Container className="content_Story">
                  <Row>
                    <Col lg={4}>
                      <div className="image_Store">
                        <img className="img-fluid" src="http://st.truyenchon.com/data/comics/84/bach-luyen-thanh-than.jpg" />
                      </div>
                    </Col>
                    <Col lg={8} className="list_Comics">
                      <div className="list_Info">
                        <div>
                          <Row className="author row">
                            <Col className="name col-lg-4" lg={4} md={4} sm={4} xs={4}>
                              <BsFillPersonFill></BsFillPersonFill>&#160; Tác
                              giả
                            </Col>
                            <Col className="status_ col-lg-8" lg={8} md={8} sm={8} xs={8}>
                              Đang cập nhật
                            </Col>
                          </Row>
                          <Row className="status row">
                            <Col className="name col-lg-4" lg={4} md={4} sm={4} xs={4}>
                              <BsWifi></BsWifi>&#160; Tình trạng
                            </Col>
                            <Col className="status_ col-lg-8" lg={8} md={8} sm={8} xs={8}>Đang tiến hành</Col>
                          </Row>
                          <Row>
                            <Col className="name col-lg-4" lg={4} md={4} sm={4} xs={4}>
                              <BsTagFill></BsTagFill>&#160; Thể loại
                            </Col>
                            <Col className="status_ col-lg-8 show_genres" lg={8} md={8} sm={8} xs={8}>

                            </Col>
                          </Row>
                          <Row className="row">
                            <Col className="name col-lg-4" lg={4} md={4} sm={4} xs={4}>
                              <BsEyeFill></BsEyeFill>&#160; Lượt xem
                            </Col>
                            <Col className="status_ col-lg-8" lg={8} md={8} sm={8} xs={8}>33333333</Col>
                          </Row>
                        </div>
                        <div className="follow row">
                          <span className="follow-link btn btn-success col-lg-4">
                            <BsHeart></BsHeart>&#160;Theo dõi
                          </span>
                          <span className="col-lg-8">
                            <b>33.521</b> Người Đã Theo Dõi
                          </span>
                          <div className="read-action mrt10">
                            <Link to="/seen">
                              <span className="btn btn-warning mrb5">
                                Đọc từ đầu
                            </span>
                            </Link>
                            <span className="btn btn-warning mrb5">
                              Đọc mới nhất
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="content_detail">
                <div>
                  <h5 className="list-title">
                    <BsFileEarmarkText></BsFileEarmarkText>&#160; Nội dung
                  </h5>
                </div>
                <div>
                  <p>Cảnh giới: Luyện nhục cảnh, Luyện cốt cảnh, Luyện tạng cảnh....\nLa Chính vì gái mà bị đày làm nô bộc. La Bái Nhiên tham vọng đầy mình :))\nLa Chính lại vì gái mà đâm đầu tu luyện :))\nLa Gia trong phủ nước sôi lửa bỏng, tranh giành kịch liệt... thôi thì đọc tiếp sẽ biết :)\n1 thanh niên dại gái tu luyện võ công =))</p>
                </div>
              </div>
              <div className="list_Chapter">
                <div>
                  <h5 className="list-title">
                    <BsCardList></BsCardList>&#160; DANH SÁCH CHƯƠNG
                  </h5>
                </div>
                <div className="listAll_Chapter">
                  <Row className="row head_Chap">
                    <Col className="col-lg-6 wrap_Tex" lg={6} md={6} sm={6} xs={6}>
                      <span>Số chương</span>
                    </Col>
                    <Col className="col-lg-3 wrap_Tex" >
                      <span>Cập nhật</span>
                    </Col>
                    <Col className="col-lg-3 wrap_Tex" lg={3} md={3} sm={3} xs={3}>
                      <span>Lượt xem</span>
                    </Col>
                  </Row>
                </div>
                <div className="viewsAdd">
                  <button type="button" className="btn btn-link" >
                    <TiPlus></TiPlus>&#160;Xem thêm
                    </button>
                </div>
              </div>
              <div className="comment_comic">
                {/* <Comment {...{ comicId: data._id, asPath }} /> */}
              </div>
            </Col>
            <Col lg={4}>
              <div className="comic-wrap">
                <div className="ModuleContent">
                  <div className="tab-nav clearfix">
                    <TopComics></TopComics>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="distant_Comics"></div>
      <Footer></Footer>
    </>
  );
})