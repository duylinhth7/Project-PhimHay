import { useEffect, useState } from "react";
import { getFilmMovies } from "../../services/getListFilm";
import { useNavigate } from "react-router-dom";
import FilmMovies from ".";
import FilmSeriesNav from "../FIlmSeries/FilmSeriesNav";
import { Skeleton } from "antd";
import { Helmet } from "react-helmet";

function FilmMoviesPage() {
    const [data, setData] = useState(null);
    const fetchApi = async () => {
        const res = await getFilmMovies();
        setData(res);
    };
    useEffect(() => {
        fetchApi();
    }, []);
    const nav = useNavigate();
    const handleClick = (value) => {
        nav(`/film-detail/${value}`);
    }
    return (
        <>
            <Helmet>
                <title>Phim Lẻ | Hoàng Duy Linh</title>
            </Helmet>
            <div className="blockMain row">
                {data ? (<>
                    <div className="filmSeries__list col-md-8 col-12">
                        <div className="row">
                            <div className="caption_block">PHIM LẺ</div>
                            {data.data.items.map((item, index) => (
                                <div className="filmSeries__items col-lg-4 col-xl-3 col-6 g-3" key={index} onClick={() => handleClick(item.slug)}>
                                    <div className="filmSeries__image">
                                        <img src={`https://phimimg.com/${item.poster_url}`} />
                                    </div>
                                    <div className="filmSeries__name" title={item.name}>{item.name}</div>
                                    <div className="filmSeries__year">{item.year}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <FilmSeriesNav />
                    </div>
                </>) : (<><div className="row">
                    <div className=" col-12">
                        <div ><Skeleton active paragraph={{
                            rows: 12,
                        }} /></div>
                    </div>
                </div></>)}
            </div>
        </>
    );
}
export default FilmMoviesPage;