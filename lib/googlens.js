const axios = require("axios");

const goLens = async(url) => {
 return new Promise((resolve, reject) => {
   const options = {
     method: 'GET',
     url: 'https://google-reverse-image-search.p.rapidapi.com/imgSearch',
     params: { url },
     headers: {
      'X-RapidAPI-Host': 'google-reverse-image-search.p.rapidapi.com',
      'X-RapidAPI-Key': '53513471femsh11b7c46a7da0a85p119682jsncc66a4e30134'
     }
   };

   axios.request(options).then(function (response) {
      var result = {
         status: response.status,
         imgUrl: response.data.imgUrl,
         url: response.data.googleSearchResult
      }
      resolve(result)
   }).catch(function (error) {
      console.error(error);
      var tek = {
         status: 404,
         msg: 'Server Error!'
      }
      resolve(tek)
   });
 })
}

module.exports.goLens = goLens