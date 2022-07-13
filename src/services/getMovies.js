const MOVIES_LIST_URL = (date) => `https://jsonmock.hackerrank.com/api/movies?Year=${date}`;

async function getMovieList({ year }) {
    let movielist = await fetch(MOVIES_LIST_URL(year));

   return movielist;
}

  export default getMovieList;