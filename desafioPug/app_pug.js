const express = require('express')
const Products = require('./products/products')

const { Router } = express
const router = Router()
const products = new Products(__dirname + '/data/products.json')

const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))
app.set('views', './views/pug')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    let content = products
    return res.render('index.pug', {content})
})

app.post("/productos", (req, res) => {
    products.save(req.body)
    let content = products
    return res.render('productos.pug', {data: content});
});

app.get("/productos", (req, res) => {
    let content = products
    return res.render('productos.pug', {content});
});

app.listen(8080);