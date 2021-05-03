const express = require('express')
const nunjucks = require('nunjucks')

const server = express();
const courses = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server
})

server.get('/', function(req, res) {
  res.render('courses', {courses})
})

server.get('/about', function(req, res) {
  const about = {
    image_url: "https://pbs.twimg.com/profile_images/1291682473592659968/sEorc6oh.jpg",
    title: "Rocketseat",
    description: "Evolua rápido como a tecnologia.",
    subdescription: "Junte-se a milhares de devs e acelere na direção dos seus objetivos.",
    techs: [
      {name: "React"},
      {name: "React Native"},
      {name: "Node"},
      {name: "Elixir"},
      {name: "Flutter"}
    ],
    links: [
      {name: "Github", url: "https://github.com/Rocketseat"},
      {name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br"},
      {name: "Facebook", url: "https://pt-br.facebook.com/rocketseat/"}
    ]
  }

  res.render("about", {about})
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});


server.listen('5000', () => {
  console.log('Servidor tá on, pai!')
})