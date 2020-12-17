import React from "react";
import Header from "../Header/Header";
import { Container, Row } from "react-bootstrap";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import Button from "@material-ui/core/Button";
import { BsHeart } from "react-icons/bs";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import HomeIcon from "@material-ui/icons/Home";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import "./style.scss";
import TabControl from "./TabControl";
import { Link } from "react-router-dom";
export default function ViewsComics() {
    const [isAction, setAction] = React.useState(false);
    const [isScrcoll, setScroll] = React.useState(false);

    let scroll_Top = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    let handleScroll = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    React.useEffect(() => {
        document.addEventListener("scroll", handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    })
    let showSelected = () => {
        return <>
            <Button className="icon_Pre" ><SkipPreviousIcon /> </Button>
            <FormControl>
                <Select

                    labelId="demo-mutiple-name-label"
                    id="demo-mutiple-name"
                    displayEmpty

                >
                    <MenuItem>
                        Tập 1
                    </MenuItem>
                    <MenuItem>
                        Tập 2
                    </MenuItem>
                    <MenuItem>
                        Tập 3
                    </MenuItem>
                    {
                        ShowChapter()
                    }
                </Select>
            </FormControl>
            <Button className="icon_Next" ><SkipNextIcon /></Button>

        </>
    }
    let ShowChapter = () => {

    }
    const chapter = [
        "http://vi.c.pic.mangatoon.mobi/ps/193958/watermark/1000/E.jpg",
        "http://vi.c.pic.mangatoon.mobi/ps/193958/watermark/1000/s.jpg",
        "http://vi.c.pic.mangatoon.mobi/ps/193958/watermark/1000/d.jpg",
        "http://vi.c.pic.mangatoon.mobi/ps/193958/watermark/1000/E.jpg",
        "http://vi.c.pic.mangatoon.mobi/ps/193958/watermark/1000/E.jpg",
        "http://vi.c.pic.mangatoon.mobi/ps/193958/watermark/1000/E.jpg",
        "http://vi.c.pic.mangatoon.mobi/ps/193958/watermark/1000/E.jpg",
        "http://vi.c.pic.mangatoon.mobi/ps/193958/watermark/1000/E.jpg",
        "http://vi.c.pic.mangatoon.mobi/ps/193958/watermark/1000/E.jpg",
        "http://vi.c.pic.mangatoon.mobi/ps/193958/watermark/1000/E.jpg"
    ]
    const ShowImages = () => {
        return chapter.map((item, index) => {
            return (
                <div className="item" key={index}>
                    <img
                        className="img-fluid"
                        src={item}
                        alt="img"
                    ></img>
                </div>
            );
        });
    };
    let onLight = () => {
        setAction(!isAction)
    }
    return (
        <>
            <Header></Header>
            <Container fluid className={`container_Comics_Read ${isAction ? "light" : "dark"}`}>
                <div className="distant_Comics"></div>
                <Container className="container_Read">
                    <div className="reading-control">
                        <div className="reading-control-top">
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link to="/">Trang Chủ</Link>
                                <a>Đọc Truyện</a>
                                <a>Tiểu Thư Đỏng Đảnh</a>
                                <span>Tập 1</span>
                            </Breadcrumbs>
                            <div className="information_Comic">
                                <h5 className="detail-title">
                                    Tiểu Thư Đỏng Đảnh
                                </h5>
                                <span>~&#160;Tập 1 </span>
                                <span title="2018-07-14T06:13:49+07:00">
                                    Cập nhật lúc: 222
                                 </span>
                            </div>
                        </div>
                        <div className="alert alert-info ">
                            <NotificationsActiveIcon></NotificationsActiveIcon>&#160;
                                <em>Sử dụng mũi tên trái (←) hoặc phải (→) để chuyển chapter</em>
                        </div>
                        <div className="chose-chap">
                            <Button
                                variant="contained"
                                color="secondary"
                                className="follow_Comics"

                            >
                                <HomeIcon className="icon"></HomeIcon>
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                className="follow_Comics"
                            >
                                <ErrorOutlineIcon></ErrorOutlineIcon>&#160;<span>Báo lỗi</span>
                            </Button>
                            <div className="select_Chap">
                                {showSelected()}
                            </div>
                            <Button
                                variant="contained"
                                color="secondary"
                                className="follow_Comics"

                            >
                                <BsHeart></BsHeart>&#160;Theo dõi
                        </Button>
                            {
                                isAction ? <Button
                                    variant="contained"
                                    color="secondary"
                                    className="follow_Comics"
                                    onClick={() => { onLight() }}
                                >
                                    <EmojiObjectsIcon></EmojiObjectsIcon>&#160;Tắt Đèn
                                 </Button>
                                    :
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className="follow_Comics"
                                        onClick={() => { onLight() }}
                                    >
                                        <EmojiObjectsIcon></EmojiObjectsIcon>&#160;Bật Đèn
                                    </Button>
                            }

                        </div>
                    </div>
                    <div className="reading-detail box_doc">
                        {ShowImages()}
                    </div>
                </Container>
                {
                    isScrcoll ? <Container fluid className={`tab ${isAction ? "tabdark" : "tablight"}`}>
                        <Container>
                            <TabControl isAction={isAction} showSelected={showSelected} ShowChapter={ShowChapter} onLight={onLight}></TabControl>
                        </Container>
                    </Container>
                        :
                        null
                }
            </Container>

        </>
    );
}
