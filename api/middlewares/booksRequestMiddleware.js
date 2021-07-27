require('dotenv').config()

const axios = require('axios')

const key = process.env.API_KEY

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes'
})

const booksRequestMiddleware = function (req, res, next) {
    const { search, genre, orderBy, startIndex } = req.query
    const encodedSearchParam = encodeURI(search)
    instance.get(`?q=${encodedSearchParam}+${genre}&orderBy=${orderBy}&projection=full&startIndex=${startIndex}&maxResults=30&key=${key}`)
        .then(function (response) {
            req.returnigBooksData = response.data
            next()
        })
        .catch(function (error) {
            console.log(error)
            next()
        })
};

module.exports = booksRequestMiddleware