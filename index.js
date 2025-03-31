const express = require("express")
const app = express()
const path = require("path")

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const port = 3000

const name = "Delique Allen"

app.get('/', (req, res) => {
    res.render('index', {
        name: name,
    })
})

app.get('/resume', (req, res) => {
    res.render('resume', {
        name: name,
    })
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})