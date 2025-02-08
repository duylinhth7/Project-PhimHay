import { useEffect, useState } from "react";
import { getTvShow } from "../../services/getListFilm";
import FilmMovies from "../FilmMovies";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "antd";
import { Helmet } from "react-helmet";

function TvShowPage() {
    const [data, setData] = useState(null);
    const fetchApi = async () => {
        const res = await getTvShow();
        setData(res);
    };
    useEffect(() => {
        fetchApi();
    }, [])
    // console.log(data);
    const nav = useNavigate();
    const handleClick = (value) => {
        nav(`/film-detail/${value}`);
    }
    return (
        <>
            <Helmet>
                <title>TV Shows | Hoàng Duy Linh</title>
            </Helmet>
            <div className="tvShow">

                <div className="row">

                    {/* <div className="col-md-8 col-12"> */}
                    {data ? (<>
                        <div className="col-md-8 col-12">
                            <div className="caption__block">TV SHOW</div>

                            <div className="row">
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
                            <FilmMovies />
                        </div></>) : (<>
                            <div className="row">
                                <div className=" col-12">
                                    <div ><Skeleton active paragraph={{
                                        rows: 12,
                                    }} /></div>
                                </div>
                            </div>
                        </>)}
                </div>
            </div>
        </>
    );
}
export default TvShowPage;