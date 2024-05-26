const {faker} = require('@faker-js/faker');
const mysql = require('mysql2');

let data= [];


let createRandomData = () => {
    return [
        faker.datatype.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password()
    ];
};

for(let i=1;i<=1;i++){
    data.push(createRandomData());
}

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test_app',
    password: '871449'
  });

try{
    connection.query("SHOW TABLES",(err,result)=>{
        if(err) throw err;
        console.log(result);
    })
    connection.query("SHOW DATABASES",(err,result)=>{
        if(err) throw err;
        console.log(result);
    })
}catch{
    console.log(err);
}
connection.end();


