import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://ott-details.p.rapidapi.com/advancedsearch',
  params: {
    start_year: '1970',
    end_year: '2020',
    min_imdb: '6',
    max_imdb: '7.8',
    genre: 'action',
    language: 'english',
    type: 'movie',
    sort: 'latest',
    page: '1'
  },
  headers: {
    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
    'X-RapidAPI-Key': 'b0a300d222msh4a959150243bd45p1907a5jsn9a490ea63316'
  }
};

axios.request(options)
.then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

