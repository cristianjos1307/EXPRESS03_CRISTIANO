//criando uma quary(consulta) simples
const express = require('express');
const mysql = require('mysql2');

const app = express();

app.listem(3000, ()=>{
    console.log("Servidor em execução");
})

//criação da conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user_bd_tasks',
    password: 'QL0 P4TDcQGB2R97Djet7vXHggatTSZE4',
    database: 'nodejs_tasks'
})

//testar a conexão
connection.connect(error =>{
    if(error){
        console.log('Erro na conexão MySql'+error.message)
        return
    }
    console.log('Conexão realizada com sucesso!!')
})