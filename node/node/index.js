const express = require('express')
const mysql = require('mysql')
const ejs = require('ejs');

const app = express()
const port = 3003

const config = {
  host: 'mysqldb',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

function generateNames() {
  const firstName = ['João', 'Maria', 'Pedro', 'Ana', 'José', 'Mariana', 'Carlos', 'Laura', 'Paulo', 'Camila'];
  const lastName = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Ferreira', 'Pereira', 'Rodrigues', 'Almeida'];

  const randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
  const randomLastName = lastName[Math.floor(Math.random() * lastName.length)];

  return `${randomFirstName} ${randomLastName}`;
}

function getPeopleList(callback) {
  const randomName = generateNames()
  const connection = mysql.createConnection(config)

  connection.connect(() => {
    const queryInsertPeople = `INSERT INTO people(name) values('${randomName}')`

    connection.query(queryInsertPeople)
    connection.query('SELECT * FROM people', (error, results) => {
      connection.end();
      callback(null, results);
    });
  });
}

app.get('/', (req, res) => {
  getPeopleList((error, people) => ejs.renderFile('people-list.ejs', { people }, (error, html) => res.send(html)));
});

app.listen(port, () => {
  console.log('Rodando na porta' + port)
})