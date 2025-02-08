
import FilmHoatHinh from "../../pages/FilmHoatHinh";
import FilmHot from "../FilmHot";
import FilmMovies from "../../pages/FilmMovies";
import FilmSeries from "../../pages/FIlmSeries";
import SpotlightMovie from "../SpotlightMovie";
import { Helmet } from "react-helmet";

function PageMain() {
    return (
        <>
            <Helmet>
                <title>Phim Hay | Hoàng Duy Linh</title>
            </Helmet>
            <div className="row">
                <div className="pageMain col-12">
                    <SpotlightMovie />
                    <FilmHot />
                    <div className="row">
                        <div className="col-md-8 col-12">
                            <FilmSeries />
                            <FilmHoatHinh />
                        </div>
                        <div className="col-md-4 col-12"><FilmMovies /></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PageMain;