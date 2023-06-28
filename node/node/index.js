const express = require('express')
const mysql = require('mysql')
const ejs = require('ejs');

const app = express()
const port = 3005

const config = {
  host: 'db',
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

  const queries = [`
    CREATE TABLE IF NOT EXISTS people (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )
    `, 
    `INSERT INTO people(name) values('${randomName}')`,
    'SELECT * FROM people'
  ]

  connection.connect(() => {
    queries.forEach(query => {
      connection.query(query, (error, results) => {
        if (Array.isArray(results)) callback(null, results);
      });
    })

    connection.end();
  });
}

app.get('/', (req, res) => {
  getPeopleList((error, people) => ejs.renderFile('people-list.ejs', { people }, (error, html) => res.send(html)));
});

app.listen(port, () => {
  console.log('Rodando na porta' + port)
})