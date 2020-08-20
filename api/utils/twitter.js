const { default: Axios } = require("axios");



const url = 'https://api.twitter.com/1.1/search/tweets.json';
    
class Twitter {
     get(query, count) {
        return (
            Axios.get(url, {
                params: {
                    q: query,
                    count: count,
                },
                headers: {
                    Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAABLSGQEAAAAA%2FKpYsBnpHFXbHVWKEOuq7rAc7u4%3DLN5xxzEEIXx2k5NQzKcSoY07Lfl8YMZJ0QKRHvtNaYtRiEmF9i",    
                },
            })
        )
     } 
        
       
}

module.exports = Twitter;