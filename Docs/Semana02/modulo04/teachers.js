const fs = require('fs');
const data = require('./data.json');
const { age, date } = require('./utils');

// Show
exports.show = function(req, res) {
  const { id } = req.params;

  const foundTeacher = data.teachers.find(function(teacher) {
    return teacher.id == id;
  });

  if(!foundTeacher) return res.send('Teacher not found!');

  const teacher = {
    ...foundTeacher,
    age: age(foundTeacher.birth),
    matters: foundTeacher.matters.split(', '),
    created_at: Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at),
  }

  return res.render('teachers/show', { teacher });
}

// Create
exports.post = function(req, res) {
  const keys = Object.keys(req.body);

  for(let key of keys) {
    if (req.body[key] == '') {
      return res.send('Please, Fill all fields.');
    }
  }

  let { avatar_url, name, birth, schooling, classType, matters } = req.body;

  birth = Date.parse(birth);
  const id = Number(data.teachers.length + 1);
  const created_at = Date.now();

  data.teachers.push({
    id,
    avatar_url, 
    name,
    birth, 
    schooling, 
    classType, 
    matters,
    created_at,
  });

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if(err) {
      return res.send('Erro ao gravar dados');
    }
  })

  return res.redirect('/teachers');

}