const express = require ('express');
const mysql = require('mysql');
const server = express();
const cors = require ('cors');
const bodyParser = require('body-parser');
//

//middleware uma configuracao no servidor HTTP com Node.JS
server.use(express.json())
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors ())
server.use(bodyParser.json());

//definindo conexao com o banco de dados MYSQL
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "projetodbrecodeprosonia"
})

//Criar uma interface para retorno do dados de BD em formato JSON
//considerando dois métodos para tabela avisos (get e post)

server.get ("/produtos", (req, res)=> {

    const query = "SELECT * FROM produtos";
    connection.query(query, (error, result) =>{
        if (error){
            res.send(error)
        } else {
            res.json(result)
        }

    })
});

server.post("/mensagem", (req, res)=> {
    const {nome, mensagem} = req.body;

    connection.query(`INSERT INTO mensagens(nome, mensagem) values
    ('${nome}', '${mensagem}')`, (error, result) =>{
    
            if (error) {
                res.send(error)
            } else {
                res.status(201).send ("Mensagem Cadastrada")
            }
        
    })


})
  
//servidor cadastrado (8000)

server.listen(8000);

//localhost:8000/produtos
//localhost:8000/mensagem

//Sonia Ferreira Borges, projeto feito e customizado para atender requisitos de entrega
//de acordo com monitoria do Guilherme 21/1
// exercicio não considerando aplicações mais complexas como divisões em várias tabelas
// o que iria requisitar a divisao do arquivo index.js em vários modulos.

//nodemon atualiza automaticamente  o estado da aplicação, identifica que a mudança foi
//definida e faz o restart do servidor
//ambiente desenvolvimento não server para produção
//ambiente Producao
