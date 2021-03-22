require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 3001
const knex = require('./knex/knex.js')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'handlebars')
app.engine(
  'handlebars',
  handlebars({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'index.handlebars',
    helpers: require('./src/handlebarHelpers.js'),
  })
)

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  knex('papers')
    .select()
    .orderBy('created_at', 'desc')
    .then((papers) => {
      res.render('home', {
        papers: papers,
      })
    })
})

app.post('/new', (req, res) => {
  knex('papers')
    .insert({ ...req.body })
    .then(() => {
      res.redirect(303, '/')
    })
    .catch((err) => console.log(err))
})

app.get('/delete', (req, res) => {
  const id = req.query.id
  knex('papers')
    .where({ id: id })
    .del()
    .then(() => res.redirect(303, '/'))
})

app.get('/edit', (req, res) => {
  const id = req.query.id
  knex('papers')
    .where({ id: id })
    .then((paper) => {
      console.log(paper[0])
      res.render('edit', { paper: paper[0] })
    })
})

app.post('/edit', (req, res) => {
  const { id, ...rest } = req.body
  knex('papers')
    .where({ id: id })
    .update(rest)
    .then(() => {
      res.redirect(303, '/')
    })
    .catch((err) => console.log(err))
})

app.use(function (req, res, next) {
  res.status(404)
  res.render('404')
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500)
  res.render('500')
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
