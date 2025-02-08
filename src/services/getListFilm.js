export const getListFilm = async () => {
    const response = await fetch(`https://phimapi.com/danh-sach/phim-moi-cap-nhat`)
    const result = await response.json()
    return result;
};

export const getHotMovies = async () => {
    const response = await fetch("https://phimapi.com/danh-sach/phim-moi-cap-nhat");
    const movies = await response.json(); // Truy cập đúng mảng "items"
    const hotMovies = movies.items.filter(movie => movie.year >= 2024);
    return hotMovies;
};

export const getFilmSeries = async () => {
    const response = await fetch("https://phimapi.com/v1/api/danh-sach/phim-bo/?limit=12");
    const result = await response.json();
    return result;
};

export const getFilmMovies = async () => {
    const response = await fetch(`https://phimapi.com/v1/api/danh-sach/phim-le/?limit=12`);
    const result = await response.json();
    return result;
};

export const getFilmHoatHinh = async () => {
    const response = await fetch(`https://phimapi.com/v1/api/danh-sach/hoat-hinh/?limit=12`);
    const result = await response.json();
    return result;
};

export const getTvShow = async () => {
    const response = await fetch(`https://phimapi.com/v1/api/danh-sach/tv-shows`);
    const result = await response.json();
    return result;
}