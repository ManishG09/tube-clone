import axios from 'axios'



const BASE_URL='https://youtube-v31.p.rapidapi.com'

const options = {
  url: BASE_URL,
  params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
  headers: {
    'X-RapidAPI-Key': '56a3c81860mshfff579030120d0ep194979jsnb2b0c2f8fdf6',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export const fetchFromAPI = async (url) => {
   const { data }= await axios.get(`${BASE_URL}/${url}`, options)
   return data
}