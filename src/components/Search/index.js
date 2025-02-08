import { useNavigate } from "react-router-dom";
import {SearchOutlined} from '@ant-design/icons';
function Search() {
     const nav = useNavigate();
        const handleSearch = (e) => {
            // setOpen(false);
            e.preventDefault();
            const value = e.target[0].value;
            if(value){
            nav(`/search/${value}`);
            }
            e.target[0].value = '';
        };
    return (
        
        <>
            <form className="search" onSubmit={handleSearch}>
                <input type="text" placeholder="Tìm kiếm phim..." />
                <button type="submit"><SearchOutlined /></button>
            </form>
        </>
    );
}
export default Search;