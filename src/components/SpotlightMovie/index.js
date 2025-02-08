import { useEffect, useState } from "react";
import { getListFilm } from "../../services/getListFilm";
import { Carousel, Skeleton } from 'antd';
import { useNavigate } from "react-router-dom";
import './SpotlightMovie.scss'
import { PlayCircleFilled, ReconciliationOutlined } from '@ant-design/icons';

function SpotlightMovie() {
    const [data, setData] = useState(null);
    const fetchApi = async () => {
        const response = await getListFilm();
        setData(response);
    }
    useEffect(() => {
        fetchApi();
    }, []);
    const nav = useNavigate()
    const contentStyle = {
        height: '500px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    const handleClick = (value) => {
        // console.log(value);
        nav(`film-detail/${value}`);
    }
    return (
        <>
            <div className="spotlightMovie row">
                <Carousel dots={false} arrows infinite={false} autoplay >
                    {data ? (data.items.map((item, index) => (
                        <div style={contentStyle} key={index} className="spotlightMovie_2 col-12" onClick={() => handleClick(item.slug)}>
                            <img src={item.thumb_url} alt={item.name} />
                            <div className="playIcon"><PlayCircleFilled /></div>
                            <div className="spotlightMovie__content">
                                <h2>{item.name}</h2>
                                <h5>{item.origin_name}</h5>
                                <h6 className="spotlightMovie__year"> <ReconciliationOutlined /> {item.year}</h6>
                            </div>
                        </div>
                    ))) : (<><Skeleton loading /></>)}
                </Carousel>
            </div>
        </>
    )
}
export default SpotlightMovie;