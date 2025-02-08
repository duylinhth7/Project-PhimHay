import { useEffect, useState } from "react";
import { getFilmSeries } from "../../services/getListFilm";
import "./FilmSeries.scss";
import { useNavigate } from "react-router-dom";

function FilmSeries() {
    const [data, setData] = useState(null);
    const fetchApi = async () => {
        const res = await getFilmSeries();
        setData(res);
    }

    useEffect(() => {
        fetchApi();
    }, []);
    // console.log(data);
    const nav = useNavigate();
    const handleClick = (value) => {
        nav(`film-detail/${value}`);
    }
    return (
        <>
            <div className="filmSeries">
                <div className="filmSeries__header">
                    <div className="caption_block">
                        PHIM BỘ
                    </div>
                </div>
                {data && (<>
                    <div className="filmSeries__list col-12 row">
                        {data.data.items.map((item, index) => (
                            <div className="filmSeries__items col-3 col-lg-4 col-xl-3 col-6 g-3 " title={item.name} key={index} onClick={() => handleClick(item.slug)}>
                                <div className="filmSeries__image">
                                    <img src={`https://phimimg.com/${item.poster_url}`} />
                                </div>
                                <div className="filmSeries__name">{item.name}</div>
                                <div className="filmSeries__year">{item.year}</div>
                            </div>
                        ))}
                    </div>
                </>)}
            </div>
        </>
    )
}
export default FilmSeries;