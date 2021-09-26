<<<<<<< HEAD
const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const data = require('./data');

// configurar a pasta public
server.use(express.static('public'));

// configurar a template engine (njk, html...)
server.set("view engine", "njk");

// configurar a pasta views
nunjucks.configure("views", {
  express: server,
})

server.get('/', (request, response) => {
  response.redirect('/courses');
});

server.get('/courses', (request, response) => {
  response.render('courses', { courses: data });
});

server.get('/courses/:id', (request, resopnse) => {
 const id = request.params.id;

 course = data.find((course) => {
   return course.id == id;
 });

 if (!course) {
  return resopnse.render('not-found');
 }

 return resopnse.render('course', { course });
});

server.get('/about', (request, response) => {
  response.render('about');
});

server.use((request, response)=>{
  response.status(404).render('not-found');
})

server.listen(5000, () => {
  console.log('Server is running');
});
=======
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
>>>>>>> 71412f5285e2f47cdead986bae7c7b593e3b75ca
