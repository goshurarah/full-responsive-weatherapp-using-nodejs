const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.set('view engine', 'ejs')

app.get('/', (req, resp) => {
    resp.render("home")
})
app.get('/home', (req, resp) => {
    resp.render("home")
})
app.get('/weather', (req, resp) => {
    resp.render("weather")
})
app.get('/about', (req, resp) => {
    resp.render("about")
})
app.get('*', (req, resp) => {
    let message = {
        span: "oops!",
        p: 'page not found'
    }
    resp.render("404error", { message })
})

//server is running on this port
app.listen(port, () => {
    console.log(`Server is listening to the port ${port}`);
})