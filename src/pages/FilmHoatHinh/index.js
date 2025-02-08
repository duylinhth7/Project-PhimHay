import { useEffect, useState } from "react";
import { getFilmHoatHinh } from "../../services/getListFilm";
import "./FilmHoatHinh.scss";
import { useNavigate } from "react-router-dom";

function FilmHoatHinh() {
    const nav = useNavigate();
    const [data, setData] = useState(null);
    const fetchApi = async () => {
        const res = await getFilmHoatHinh();
        setData(res);
    };
    useEffect(() => {
        fetchApi();
    }, []);
    const handleClick = (value) => {
        nav(`film-detail/${value}`);
    }
    // console.log(data);
    return (
        <>
            <div className="filmHoatHinh">
                <div className="filmHoatHinh__header">
                    <div className="caption_block">
                        PHIM HOẠT HÌNH
                    </div>
                </div>
                {data && (<>
                    <div className="filmHoatHinh__list col-12 row">
                        {data.data.items.map((item, index) => (
                            <div className="filmHoatHinh__items col-lg-4 col-xl-3 col-6 g-3" title={item.name} key={index} onClick={() => handleClick(item.slug)}>
                                <div className="filmHoatHinh__image">
                                    <img src={`https://phimimg.com/${item.poster_url}`} />
                                </div>
                                <div className="filmHoatHinh__year">{item.year}</div>
                                <div className="filmHoatHinh__name" >{item.name}</div>
                            </div>
                        ))}
                    </div>
                </>)}
            </div>
        </>
    );
}
export default FilmHoatHinh;