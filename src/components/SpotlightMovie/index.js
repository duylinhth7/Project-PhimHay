import { useEffect, useState } from "react";
import { getListFilm } from "../../services/getListFilm";
import { Carousel, Skeleton } from 'antd';
import { useNavigate } from "react-router-dom";
import './SpotlightMovie.scss'
import { CaretRightOutlined, PlayCircleFilled, ReconciliationOutlined } from '@ant-design/icons';

function SpotlightMovie() {
    const [data, setData] = useState(null);
    const fetchApi = async () => {
        const response = await getListFilm();
        setData(response);
    }
    useEffect(() => {
        fetchApi();
    }, []);
    console.log(data);
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
            <div className="spotlightMovie container">{/*  */}
                <div className="row">
                    <Carousel dots={false} arrows infinite={false} autoplay >
                        {data ? (data.items.map((item, index) => (
                            <div style={contentStyle} key={index} className="spotlightMovie_2 col-12" onClick={() => handleClick(item.slug)}>
                                <img src={item.thumb_url} alt={item.name} />
                                <div className="playIcon"><CaretRightOutlined /></div>
                                <div className="spotlightMovie__light">
                                </div>
                                <div className="spotlightMovie__info">
                                    <div className="spotlightMovie__name">{item.name}</div>
                                    <div className="spotlightMovie__year">{ item.year}</div>
                                </div>
                                {/* <h6 className="spotlightMovie__year"> <ReconciliationOutlined /> {item.year}</h6> */}
                            </div>
                        ))) : (<><Skeleton loading /></>)}
                    </Carousel>
                </div>
            </div>
        </>
    )
}
export default SpotlightMovie;