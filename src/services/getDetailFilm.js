export const getDetailFilm = async (value) => {
    const res = await fetch(`https://phimapi.com/phim//${value}`)
    const result = res.json();
    return result
}