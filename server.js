  
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
})
const getUsers = (request, response) => {
  pool.query('SELECT * FROM hotel', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM hotel WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const {id, name  } = request.body

  pool.query('INSERT INTO hotel (item, name, price) VALUES ($1, $2,$3)', [item, name, price], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`item added with ID: ${results.insertId}`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name } = request.body

  pool.query(
    'UPDATE customer SET name = $1 WHERE item = $2',
    [name, item],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`customer modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM hotel WHERE item = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`item deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}

// const http = require('http');

// const portno=3000;

// const httpServer=http.createServer((request,response)=>{

//     switch(request.method){
//         case "GET":
//             if(request.url=="/employees"){
//                 response.writeHead(200);
//                 response.write(JSON.stringify({code:100,name:"Electronics",city:"chennai",phone:"9988998899"}));
//                 response.end();
//             }
//             case "POST":
//             case "DELETE":
//             case "PUT":
//     }
// });
// httpServer.listen(3000,(error)=>{
//  if(error)
//  console.log("Error connecting to server..");
//  console.log("Listening to incoming request");
// })