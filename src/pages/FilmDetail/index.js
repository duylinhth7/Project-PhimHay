import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./FilmDetail.scss";
import { getDetailFilm } from "../../services/getDetailFilm";
import { useEffect, useState } from "react";
import { Rate, Skeleton, Tag } from "antd";
import { FieldTimeOutlined, PlayCircleFilled, SnippetsOutlined, YoutubeFilled } from '@ant-design/icons';
import { Helmet } from "react-helmet";

function FilmDetail() {
    const params = useParams();
    const name = params.id;
    const [data, setData] = useState(null);
    const fetchApi = async () => {
        const res = await getDetailFilm(name)
        setData(res);
    };
    useEffect(() => {
        fetchApi();
    }, []);
    const nav = useNavigate();
    // console.log(data);
    return (
        <>
            <Helmet>
                <title>{data ? `${data.movie.name} | Hoàng Duy Linh` : "Đang tải..."} </title>
            </Helmet>
            <div className="filmDetail">
                {data ? (<>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="filmDetail__poster">
                                <img src={data.movie.poster_url} />
                                <a target="blank" href={data.movie.trailer_url} className="filmDetail__trailer"><YoutubeFilled /> Trailer</a>
                                <div onClick={() => nav(`/play-film/${data.movie.slug}`)} className="filmDetail__play"><PlayCircleFilled /> Xem Phim</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="filmDetail__info">
                                <h3 className="filmDetail__name">{data.movie.name}</h3>
                                <i className="filmDetail__origin">{data.movie.origin_name}</i>
                                <div><b><SnippetsOutlined /> Năm phát hành:</b> <Tag color="success" bordered={false}>{data.movie.year}</Tag> <b><FieldTimeOutlined /> Thời lượng:</b> <Tag color="blue" bordered={false}>{data.movie.time}</Tag></div>
                                <div><b>Quốc gia:</b> {data.movie.country[0].name}</div>
                                <div><b>Chất lượng:</b> <Tag color="gold" bordered={false}>{data.movie.lang}</Tag></div>
                                <div><b>Đạo diễn:</b> {data.movie.director}</div>
                                <div><b>Diễn viên:</b> {data.movie.actor.join(", ")}</div>
                                <div><b>Thể loại:</b> {data.movie.category.map((item, i) => (item.name)).join(", ")}</div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="filmDetail__content">
                                <div className="filmDetail__caption">NỘI DUNG PHIM</div>
                                <p className="filmDetail__description">{data.movie.content}</p>
                            </div>
                        </div>
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
    )
}
export default FilmDetail;