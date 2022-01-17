// const API_KEY = process.env.API_KEY

const API_KEY = '1e7430d8510930d6a10f67bcab5ba386'


export default {
    fetchTrending :{
        title: 'Trending',
        url : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    } , 
    fetchTopRated :{
        title: 'Top Rated',
        url : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchActionMovies :{
        title: 'Action',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    fetchHorrorMovies:{
        title: 'Horror',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchComedyMovies :{
        title: 'Comedy',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    fetchRomanceMovies :{
        title: 'Romannce',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    fetchMystery:{
        title: 'Mystry',
        url :`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchSciFi:{
        title: 'Sci-Fi',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
    fetchWestern:{
        title: 'Western',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    },
    fetchAnimation:{
        title: 'Animation',
        url :`/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    fetchTVMovies:{
        title: 'TVMovies',
        url : `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },

}

