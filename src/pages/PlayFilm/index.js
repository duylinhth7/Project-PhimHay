import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailFilm } from "../../services/getDetailFilm";
import { Collapse, Divider, Skeleton } from "antd"
import "./PlayFilm.scss";
import Hls from "hls.js";
import { Helmet } from "react-helmet";

function PlayFilm() {
  const [data, setData] = useState(null);
  const params = useParams();
  const id = params.id;
  const [selectedEpisodes, setSelectedEpisodes] = useState(0);
  const handleSelectedEpisodes = (value) => {
    setSelectedEpisodes(value);
  };
  // console.log(selectedEpisodes);

  // Hàm lấy dữ liệu phim
  const fetchApi = async () => {
    const res = await getDetailFilm(id);
    setData(res);
  };

  useEffect(() => {
    fetchApi();
  }, [id]);
  // console.log(data)
  // console.log(data.movie.poster_url)
  // Kiểm tra nếu có dữ liệu và link m3u8
  useEffect(() => {
    if (data && data.episodes && data.episodes.length > 0) {
      const videoLink = data.episodes[0].server_data[selectedEpisodes].link_m3u8; // Lấy link m3u8 từ server_data
      if (videoLink && Hls.isSupported()) {
        const video = document.getElementById("video");
        const hls = new Hls();
        hls.loadSource(videoLink); // Link m3u8 từ dữ liệu API
        hls.attachMedia(video);
        return () => hls.destroy(); // Dọn dẹp Hls instance khi đổi tập
      }
    }
  }, [data, selectedEpisodes]);

  if (!data) return <div className="row">
    <div className=" col-12">
      <div ><Skeleton active paragraph={{
        rows: 18,
      }} /></div>
    </div>
  </div>;

  return (
    <>
      <Helmet>
        <title>{data ? `${data.movie.name} | Hoàng Duy Linh` : "Đang tải..."} </title>
      </Helmet>
      {data ? (
        <div className="playFilm">
          <div className="playFilm__wairning">
            <span>-NẾU KHÔNG XEM ĐƯỢC PHIM, HÃY CHUYỂN SANG SERVER KHÁC HOẶC LOAD LẠI TRANG CÁC BẠN NHÉ. I LOVE YOU!-</span>
          </div>
          <div className="playFilm__main">
            <h1>{data.movie.title}</h1>
            <div className="playFilm__screen" >
              <video autoPlay id="video" muted width="100%" controls>
                Trình duyệt của bạn không hỗ trợ phát video.
              </video>
            </div>
          </div>
          <div className="playFilm__name">
            <span>{data.movie.name}: {data.episodes[0].server_data.length > 1 ? (<>Tập {selectedEpisodes + 1}</>) : (<>{data.episodes[0].server_data[0].name}</>)} </span>
            <Collapse
              items={[
                {
                  key: '1',
                  label: 'Nội dung chi tiết',
                  children: <p>{data.movie.content}</p>,
                },
              ]}
            />
          </div>
          <div className="playFilm__episodes">
            <div className="playFilm__episodes-name">{data.episodes[0].server_name}</div>
            <ul>
              {data.episodes[0].server_data.map((item, index) => (
                <li className={index === selectedEpisodes ? ("selected__episodes") : "no-selected__episodes"} onClick={() => handleSelectedEpisodes(index)} key={index}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default PlayFilm;
