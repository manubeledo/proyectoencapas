let express = require('express')
let path = require('path')
let cors = require('cors')
const serverRoutes = require('./routes')
let PORT = 8080
let app = express()

app.use('/', express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors('*'))

app.set('view engine', 'ejs')
app.set('views', './public')

app.get('/', (req, res) => {
res.send('Server root')
})



serverRoutes(app)

app.listen(PORT, () => {
console.log(`Server working on: http://localhost:PORT`)
})