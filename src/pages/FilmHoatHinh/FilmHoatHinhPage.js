import { useEffect, useState } from "react";
import { getFilmHoatHinh } from "../../services/getListFilm";
import { useNavigate } from "react-router-dom";
import FilmMovies from "../FilmMovies";
import { Skeleton } from "antd";
import { Helmet } from "react-helmet";

function FilmHoatHinhPage() {
    const [data, setData] = useState(null);
    const fetchApi = async () => {
        const res = await getFilmHoatHinh();
        setData(res);
    };
    useEffect(() => {
        fetchApi();
    }, []);
    // console.log(data);
    const nav = useNavigate();
    const handleClick = (value) => {
        nav(`/film-detail/${value}`);
    }
    return (
        <>
            <Helmet>
                <title>Phim Hoạt Hình | Hoàng Duy Linh</title>
            </Helmet>
            <div className="blockMain row">
                {data ? (<>
                    <div className="filmHoatHinh__list col-md-8 col-12">
                        <div className="row">
                            <div className="caption_block">PHIM HOẠT HÌNH</div>
                            {data.data.items.map((item, index) => (
                                <div className="filmHoatHinh__items col-md-3 col-6 col-sm-4 g-3" title={item.name} key={index} onClick={() => handleClick(item.slug)}>
                                    <div className="filmHoatHinh__image">
                                        <img src={`https://phimimg.com/${item.poster_url}`} />
                                    </div>
                                    <div className="filmHoatHinh__year">{item.year}</div>
                                    <div className="filmHoatHinh__name" >{item.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <FilmMovies />
                    </div>
                </>) : (<>
                    <div className="row">
                        <div className=" col-12">
                            <div ><Skeleton active paragraph={{
                                rows: 12,
                            }} /></div>
                        </div>
                    </div>
                </>)}
            </div>
        </>
    );
}
export default FilmHoatHinhPage;