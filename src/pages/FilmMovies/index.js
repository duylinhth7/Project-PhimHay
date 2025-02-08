import { useEffect, useState } from "react";
import "./FilmMovies.scss";
import { getFilmMovies } from "../../services/getListFilm";
import { useNavigate } from "react-router-dom";

function FilmMovies() {
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
    // console.log(data);
    return (
        <>
            <div className="filmMovies">
                <div className="filmMovies__header">
                    <div className="caption__block">PHIM LẺ</div>
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
    )
}
export default FilmMovies;