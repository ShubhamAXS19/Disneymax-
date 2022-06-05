import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const baseUrl = "https://ott-details.p.rapidapi.com/";

const MoviesApiHeaders = {
    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
    'X-RapidAPI-Key': 'b0a300d222msh4a959150243bd45p1907a5jsn9a490ea63316'
};

const options = {
    start_year: '1970',
    end_year: '2020',
    min_imdb: '6',
    max_imdb: '7.8',
    genre: 'action',
    language: 'english',
    type: 'movie',
    sort: 'latest',
    page: '1'
  }

const createRequest = (url) => ({
    url, headers: MoviesApiHeaders ,options
})

export const MoviesApi = createApi({
    reducerPath : 'MoviesApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints :(builder) => ({
        getMovies : builder.query ({
            query :() => createRequest('advancedsearch'),
            // query :() => '/advancedsearch'
        })
    })
})

// export default { useGetMoviesQuery }  = MoviesApi;
export const { useGetMoviesQuery }  = MoviesApi;