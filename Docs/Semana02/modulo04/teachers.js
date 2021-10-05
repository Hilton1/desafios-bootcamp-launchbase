const fs = require('fs');
const data = require('./data.json');

exports.post = function(req, res) {
  const keys = Object.keys(req.body);

  for(let key of keys) {
    if (req.body[key] == '') {
      return res.send('Please, Fill all fields.');
    }
  }

  let { avatar_url, name, birth, schooling, classType, matter } = req.body;

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
    matter,
    created_at,
  });

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if(err) {
      return res.send('Erro ao gravar dados');
    }
  })

  return res.redirect('/teachers');

}