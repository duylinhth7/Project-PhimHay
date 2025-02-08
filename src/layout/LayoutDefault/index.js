import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { MenuOutlined, HomeOutlined, VideoCameraOutlined, VideoCameraAddOutlined, YoutubeOutlined, RedditOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import "./layoutDefault.scss";
import { FacebookOutlined } from '@ant-design/icons';
import { Button, Drawer } from "antd";
import { useState } from "react";
import logo from '../../images/logo.webp';
import BreadCrumb from "../../components/BreadCrumb";
import Search from "../../components/Search";
import { Helmet } from "react-helmet";

function LayoutDefult() {
    const nav = useNavigate();
    const handleSearch = (e) => {
        setOpen(false);
        e.preventDefault();
        const value = e.target[0].value;
        if (value) {
            nav(`/search/${value}`);
        }
        e.target[0].value = '';
    };
    // console.log(data);
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const closeDrawer = () => {
        setOpen(false);
    }
    const [active, setActive] = useState("/");
    const handleNav = (path) => {
        setActive(path);
        nav(path);
    }
    return (
        <>
            
            <Helmet>
                <title>Phim Hay | Hoàng Duy Linh</title>
            </Helmet>
            <div className="layoutDefault">
                <header className="layoutDefault__header">
                    <div className="container fl-bg">
                        <div className="layoutDefault__header--left">
                            <div className="layoutDefault__header--logo" onClick={() => { nav(`/`) }}>
                                <img src={logo} />
                                <h4 className="logoText">PHIM <span>HAY</span></h4>
                            </div>
                        </div>
                        <div className="layoutDefault__header--right">
                            <Search />
                            {/* <div className="login">
                                <button>Đăng nhập</button>
                            </div> */}
                        </div>
                    </div>
                </header>
                <div className="shadow__custom">
                    <div className="container mgl-10">
                        <ul className="shadow__custom--list">
                            <div onClick={showDrawer} className="button__menu"><MenuOutlined /></div>
                            <li className={`shadow__custom--item ${active == "/" ? ("actived") : (" ")}`} onClick={() => { handleNav("/") }}>TRANG CHỦ</li>
                            <li className={`shadow__custom--item ${active == "/filmSeries" ? ("actived") : (" ")}`} onClick={() => { handleNav("/filmSeries") }}>PHIM BỘ</li>
                            <li className={`shadow__custom--item ${active == "/filmMovies" ? ("actived") : (" ")}`} onClick={() => { handleNav("filmMovies") }}>PHIM LẺ</li>
                            <li className={`shadow__custom--item ${active == "/tvShow" ? ("actived") : (" ")}`} onClick={() => { handleNav(`/tvShow`) }}>TV SHOWS</li>
                            <li className={`shadow__custom--item ${active == "/filmhoathinh" ? ("actived") : (" ")}`} onClick={() => { handleNav(`/filmhoathinh`) }}>HOẠT HÌNH</li>
                        </ul>
                    </div>
                </div>
                <Drawer style={{ backgroundColor: "#12171B" }} title="PHIM HAY" onClose={closeDrawer} placement="left" open={open}>
                    <form className="search__nav" onSubmit={handleSearch}>
                        <input type="text" placeholder="Tìm kiếm phim..." />
                        {/* <button type="submit"><SearchOutlined /></button> */}
                    </form>
                    <ul className="nav__list">
                        <li onClick={() => { nav(`/`); setOpen(false) }} className="nav__item"> <HomeOutlined /> TRANG CHỦ</li>
                        <li onClick={() => { nav(`filmSeries`); setOpen(false) }} className="nav__item"> <VideoCameraOutlined /> PHIM BỘ</li>
                        <li onClick={() => { nav(`/filmMovies`); setOpen(false) }} className="nav__item"> <VideoCameraAddOutlined /> PHIM LẺ</li>
                        <li onClick={() => { nav(`/tvShow`); setOpen(false) }} className="nav__item"> <YoutubeOutlined /> TV SHOWS</li>
                        <li onClick={() => { nav(`/filmhoathinh`); setOpen(false) }} className="nav__item"> <RedditOutlined /> HOẠT HÌNH</li>
                    </ul>
                </Drawer>
                <div className="container">
                    <div className="layoutDefault__main">
                        <BreadCrumb />
                        <Outlet />
                    </div>
                </div>
                <footer class="footer">
                    <div class="footer-container">
                        <div className="container">
                            <div className="row">
                                <div class="footer-section col-md-4 col-12">
                                    <h3>Về chúng tôi</h3>
                                    <p>Trang web tổng hợp và chia sẻ phim chất lượng cao, cập nhật nhanh nhất với đa dạng thể loại, từ hành động, kinh dị, tình cảm đến khoa học viễn tưởng, giúp bạn tận hưởng những bộ phim hấp dẫn mọi lúc, mọi nơi.</p>
                                </div>
                                <div class="footer-section footer-section-mid col-md-4 col-12">
                                    <h3>Liên kết nhanh</h3>
                                    <ul>
                                        <li><a href="/">Trang chủ</a></li>
                                        <li><a >Phim mới</a></li>
                                        <li><a >Thể loại</a></li>
                                    </ul>
                                </div>
                                <div class="footer-section col-md-4 col-12">
                                    <h3>Liên hệ chúng tôi</h3>
                                    <div class="social-links">
                                        <a target="blank" href="https://www.facebook.com/andrew31204"><i><FacebookOutlined /> Facebook</i></a><br />
                                        <div><PhoneOutlined /> +8429951626</div>
                                        <div><MailOutlined /> hoanglinhdz2k4@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2025 Duy Linh. All rights reserved.</p>
                    </div>
                </footer>

            </div>
        </>
    );
}
export default LayoutDefult;