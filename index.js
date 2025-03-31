const express = require("express")
const app = express()
const path = require("path")

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const port = 3000

app.get('/', (req, res) => {
    const name = "Delique Allen"
    res.render('home', {
        name: name,
    })
})

app.get('/resume', (req, res) => {
    res.render('resume', {

    })
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})