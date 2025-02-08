import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { searchFilm } from "../../services/search";
import FilmMovies from "../FilmMovies";
import "./SearchFilmDetail.scss";
import { Skeleton } from "antd";
import { WarningFilled } from "@ant-design/icons";

function SearchFilmDetail() {
    const params = useParams();
    const value = params.id;
    const nav = useNavigate();
    const [data, setData] = useState(null);
    const fetchApi = async () => {
        const res = await searchFilm(value);
        setData(res);
    };
    useEffect(() => {
        fetchApi();
    }, [value]);
    const handleClick = (value) => {
        nav(`/film-detail/${value}`)
    }
    // console.log(data);
    return (
        <>
            <div className="searchFilm">
                <div className="searchFilm__result">
                    <div className="row">
                        <div className="col-md-8 col-12">
                            <div className=" col-12 searchFilm__caption">KẾT QUẢ TÌM KIẾM CHO TỪ KHÓA: {value}</div>
                            {data ? (
                                <>
                                    <div className="searchFilm__list row">
                                        {data.data.items.map((item, index) => (
                                            <div className="searchFilm__items col-md-3 col-6 col-sm-4 g-3" key={index} onClick={() => handleClick(item.slug)}>
                                                <div className="searchFilm__image">
                                                    <img src={`https://phimimg.com/${item.poster_url}`} />
                                                </div>
                                                <div className="searchFilm__year">{item.year}</div>
                                                <div className="searchFilm__name" title={item.name}>{item.name}</div>
                                            </div>
                                        ))}
                                        {data.data.items.length > 0 ? (<></>) : (<>
                                            <div className="col-12">
                                                <div className="searchFilm__noResult"><WarningFilled /> Không có kết quả nào với từ khóa bạn đã tìm kiếm!</div>
                                            </div></>)}
                                    </div>
                                </>
                            ) : (<><div className="row">
                                <div className=" col-12">
                                    <div ><Skeleton active paragraph={{
                                        rows: 12,
                                    }} /></div>
                                </div>
                            </div></>)}
                        </div>
                        <div className="col-md-4 col-12">
                            <FilmMovies />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchFilmDetail;