require('dotenv').config()

const axios = require('axios')

const key = process.env.API_KEY

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes/'
})

const choosenBookRequestMiddleware = function (req, res, next) {
    const { id } = req.params
    instance.get(`${id}?key=${key}`)
        .then(function (response) {
            req.returnigChooseBookData = response.data
            next()
        })
        .catch(function (error) {
            console.log(error)
            next()
        })
};

module.exports = choosenBookRequestMiddleware