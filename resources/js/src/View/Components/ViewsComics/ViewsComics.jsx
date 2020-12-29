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
import { Link, useParams } from "react-router-dom";
import { detialChapter } from '../../../api/chapter'
import { timeToString } from '../../../Common/timeHelper'
import BackToTop from '../Comon/BackToTop/BackToTop'
import Loading from "../Comon/Loading";
import TabControl from './TabControl'
export default function ViewsComics() {
    const { id } = useParams()

    const [chapter, setData] = React.useState([])
    React.useEffect(() => {
        (async () => {
            const result = await detialChapter(id);
            if (result?.data?.status === "success") {
                setData(result?.data?.data)
            }
        })()
    }, [])
    console.log(chapter)
    let name = chapter.chapter?.name
    const [isAction, setAction] = React.useState(false);
    const [isScrcoll, setScroll] = React.useState(false)
    const [chapter_, setChapter_] = React.useState(name);
    const handleChange = (event) => {
        setChapter_(event.target.value);

        scroll_Top()
    };
    let scroll_Top = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    let ShowChapter = () => {
        return chapter.listChapters?.map((item) => {
            return (
                <MenuItem
                    key={item._id}
                // value={`/doc-truyen/${to_slug(chapter.chapter?.comic_id?.name)}-${to_slug(
                //     item.name
                // )}.${item._id}`}
                >
                    {item.name.slice(0, (item.name.indexOf(":") > 0 ? item.name.indexOf(":") : item.name.length))}
                </MenuItem>
            );
        });
    }
    let onLight = () => {
        setAction(!isAction)
    }
    const isShowButtonPreviews = () => {
        let isShowPreview = false
        chapter.listChapters?.forEach((item) => {
            if (item.index < chapter.chapter?.index) {
                isShowPreview = true;
            }
        });
        return isShowPreview;
    };

    const isShowButtonNext = () => {
        let isShowNext = false;
        chapter.listChapters?.forEach((item) => {
            if (item.index > chapter.chapter?.index) {
                isShowNext = true;
            }
        });
        return isShowNext;
    };
    const onNextChapter = () => {
        let chapterNext;
        chapter.listChapters?.forEach((item) => {
            if (item.index == chapter.chapter?.index + 1) {
                chapterNext = item;
            }
        });
        if (chapterNext) {
            setChapter_(chapterNext.name)
            scroll_Top()
        }
    }
    const onPreviewChapter = () => {
        let chapterNext;
        chapter.listChapters?.forEach((item) => {
            if (item.index == chapter.chapter?.index - 1) {
                chapterNext = item;
            }
        });
        if (chapterNext) {
            setChapter_(chapterNext.name)
            scroll_Top()
        }
    }
    const showOptionsSelect = () => {
        return chapter.listChapters?.map((item) => {
            return (
                <Option
                    key={item._id}
                // value={`/doc-truyen/${to_slug(chapter.chapter?.comic_id?.name)}-${to_slug(
                //     item.name
                // )}.${item._id}`}
                >
                    {item.name}
                </Option>
            );
        });
    };
    const ShowImages = () => {
        return chapter.chapter?.images?.map((item, index) => {
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
    React.useEffect(() => {

    }, [chapter])
    let showSelected = () => {
        return <>
            {isShowButtonPreviews() ? <Button className="icon_Pre" onClick={onPreviewChapter}><SkipPreviousIcon /> </Button> : null}
            <FormControl>
                <Select
                    value={chapter_}
                    labelId="demo-mutiple-name-label"
                    id="demo-mutiple-name"
                    displayEmpty
                    onChange={handleChange}
                >
                    <MenuItem value={chapter_}>
                        <em>{name}</em>
                    </MenuItem>
                    {
                        ShowChapter()
                    }
                </Select>
            </FormControl>
            {isShowButtonNext() ? <Button className="icon_Next" onClick={onNextChapter}><SkipNextIcon /></Button> : null}

        </>
    }
    return (
        <>
            <Header></Header>
            {
                chapter.length != 0 ?
                    <Container fluid className={`container_Comics_Read ${isAction ? "light" : "dark"}`}>
                        <div className="distant_Comics"></div>
                        <Container className="container_Read">
                            <div className="reading-control">
                                <div className="reading-control-top">
                                    <Breadcrumbs aria-label="breadcrumb">
                                        {/* <Link to="/" >
                                  <a>Trang Chủ</a>
                              </Link>
                              <Link as="/the-loai" href="/register">
                                  <a>Đọc Truyện</a>
                              </Link>
                              <Link
                                  to=""
                              >
                                  <a>{chapter.chapter?.comic_id?.name}</a>
                              </Link> */}
                                        <span>{chapter.chapter?.name}</span>
                                    </Breadcrumbs>
                                    <div className="information_Comic">
                                        <h5 className="detail-title">
                                            {/* <Link route="/register" >
                                      <a>{chapter.chapter?.comic_id?.name}</a>
                                  </Link>{" "} */}
                                        </h5>
                                        <span>~&#160;{chapter.chapter?.name}</span>
                                        <span title="2018-07-14T06:13:49+07:00">
                                            (Cập nhật lúc: {timeToString(chapter.chapter?.createdAt)})
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
                                    <TabControl isAction={isAction} showSelected={showSelected} ShowChapter={ShowChapter} onPreviewChapter={onPreviewChapter} onNextChapter={onNextChapter} chapter={chapter} onLight={onLight} showOptionsSelect={showOptionsSelect}></TabControl>
                                </Container>
                            </Container>
                                :
                                null
                        }
                    </Container> :
                    <div style={{ height: '100vh', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                        <Loading></Loading>
                    </div>

            }
            <BackToTop></BackToTop>
        </>
    );
}
