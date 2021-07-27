import * as axios from "axios"

const instance = axios.create({
    baseURL: `http://localhost:5000/`
})

export const requests = {
    getBooks(searchKeywords, genre, orderBy, startIndex) {
        return instance.get(`api/books?search=${searchKeywords}&genre=${genre}&orderBy=${orderBy}&startIndex=${startIndex}`)
    },
    getChoosenBook(id) {
        return instance.get(`api/book/${id}`)
    },
}
