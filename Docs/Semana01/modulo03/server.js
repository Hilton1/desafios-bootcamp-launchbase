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