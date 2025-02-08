import { useEffect, useState } from "react";
import { getFilmSeries } from "../../services/getListFilm";
import { Navigate, useNavigate } from "react-router-dom";

function FilmSeriesNav() {
    const [data, setData] = useState(null);
    const fetchApi = async () => {
        const res = await getFilmSeries();
        setData(res);
    }
    useEffect(() => {
        fetchApi();
    }, []);
    const nav = useNavigate();
    const handleClick = (value) => {
        nav(`/film-detail/${value}`);
    }
    return (
        <>
            <div className="filmMovies">
                <div className="filmMovies__header">
                    <div className="caption__block">PHIM BỘ</div>
                </div>
                <div className="filmMovies__list row">

                    {data ? (
                        <>
                            {data.data.items.map((item, index) => (
                                <div className="filmMovies__items col-12" key={index} onClick={() => handleClick(item.slug)}>
                                    <div className="filmMovies__image">
                                        <img src={`https://phimimg.com/${item.poster_url}`} alt={item.name} />
                                    </div>
                                    <div className="filmMovies__name">
                                        <div className="filmMovies__nameMain">{item.name}</div>
                                        <div className="filmMovies__nameSub">{item.origin_name}</div>
                                    </div>
                                </div>
                            ))}
                        </>) :
                        (<></>)}
                </div>
            </div>
        </>
    );
}
export default FilmSeriesNav;