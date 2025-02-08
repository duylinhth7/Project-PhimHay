export const searchFilm = async (value) => {
    const response = await fetch(`https://phimapi.com/v1/api/tim-kiem?keyword=${value}`)
    const result = await response.json();
    return result;
}