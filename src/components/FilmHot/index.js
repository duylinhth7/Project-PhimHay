import { useEffect, useState } from "react";
import { getHotMovies } from "../../services/getListFilm";
import "./FilmHot.scss";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { useNavigate } from "react-router-dom";

function FilmHot() {
    const [data, SetData] = useState([]);

    const fetchApi = async () => {
        const res = await getHotMovies();
        SetData(res);
    }

    useEffect(() => {
        fetchApi();
    }, []);

    const nav = useNavigate();

    // console.log(data);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, // Hiển thị 5 phim trên desktop
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <div className="custom-next-arrow">➡</div>,
        prevArrow: <div className="custom-prev-arrow">⬅</div>,
        responsive: [
            {
                breakpoint: 1024, // Laptop & Tablet lớn hơn
                settings: {
                    slidesToShow: 3, // Hiển thị 4 phim
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768, // Tablet
                settings: {
                    slidesToShow: 2, // Hiển thị 2 phim trên màn nhỏ
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480, // Điện thoại nhỏ
                settings: {
                    slidesToShow: 2, // Hiển thị 1 phim trên điện thoại
                    slidesToScroll: 1,
                }
            }
        ]
    };
    
    
        


    const handleClick = (value) => {
        // console.log(e);
        nav(`film-detail/${value}`);
    }

    return (
        <>
            <h3 className="cap_title">PHIM HOT: </h3>
                <div className="filmHot">
                    <Slider {...settings}>
                        {
                            data.map((item, index) => (
                                <div key={index} className="filmHot__item" title={item.name} onClick={(() => handleClick(item.slug))}>
                                    <div className="filmHot__image"><img src={item.poster_url} /></div>
                                    <div className="filmHot__name">{item.name}</div>
                                    <div className="filmHot__year">{item.year}</div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
        </>
    );
}

export default FilmHot;
