const express = require('express')
const session = require('express-session')

const app = express()

app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

app.use(session({
    secret: 'q9T7vP4sX8eJ2mL1rB0zF6uK3nD5wHcY',
    resave: false,
    saveUninitialized: true,
}))


app.listen(4000, () => {
    console.log('Servidor rodando....')
})