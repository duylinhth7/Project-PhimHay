import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";
import { HomeOutlined } from '@ant-design/icons'
import "./BreadCrumb.scss";

function BreadCrumb() {
    const location = useLocation(); // Lấy URL hiện tại
    const pathSnippets = location.pathname.split("/").filter((i) => i);

    // Mapping đường dẫn -> tên hiển thị
    const breadcrumbNameMap = {
        "/": "Trang Chủ",
        "/filmSeries": "Phim Bộ",
        "/filmMovies": "Phim Lẻ",
        "/tvShow": "TV SHOWS",
        "/filmhoathinh": "Phim Hoạt Hình",
        "/film-detail": "Chi Tiết",
        "/search" : "Tìm Kiếm",
        "/play-film": "Xem Phim"
    };

    // Tạo danh sách breadcrumbs
    const breadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
        const decodedTitle = decodeURIComponent(breadcrumbNameMap[url] || pathSnippets[index]);
        return {
            title: breadcrumbNameMap[url] ? <Link >{decodedTitle}</Link> : <span>{decodedTitle}</span>,
        };
    });

    return <Breadcrumb items={[{ title: <Link to="/">Trang Chủ</Link> }, ...breadcrumbItems]} />;
}

export default BreadCrumb;
