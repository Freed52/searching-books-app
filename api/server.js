require('dotenv').config()

const express = require("express")
const cors = require("cors")
const helmet = require('helmet')

const booksRequestMiddleware = require('./middlewares/booksRequestMiddleware')
const choosenBookRequestMiddleware = require('./middlewares/choosenBookRequestMiddleware')

express.urlencoded({ extended: true })

const app = express()
const router = express.Router()

const port = process.env.PORT || 5000

app.use(cors({
    credentials: true,
    origin: process.env.NODE_ENV === 'production' ?
        `${HOST}:${port}` :
        'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}))
app.use(helmet())
app.use("/api", router)

if (process.env.NODE_ENV === 'production') {
    app.set('trust proxy', 1)
    const DIST_DIR = path.join(__dirname, '../client/build')
    app.use(express.static(DIST_DIR))
    app.get('*', (req, res) => {
        res.sendFile(path.join(DIST_DIR, 'index.html'))
    })
}

router.get('/books', booksRequestMiddleware, (req, res) => {
    const data = req.returnigBooksData
    res.json(data)
})

router.get('/book/:id', choosenBookRequestMiddleware, (req, res) => {
    const data = req.returnigChooseBookData
    res.json(data)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})