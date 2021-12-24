

const client = require('./connection.js')
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})

client.connect();




const bodyParser = require("body-parser");
app.use(bodyParser.json());


/* expenses CRUD */

app.get('/expenses', (req, res)=>{
    client.query(`Select * from expenses`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/expenses/:token', (req, res)=>{
    console.log(req.params.token)
    client.query(`Select * from expenses where token = '${req.params.token}'`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.post('/expenses', (req, res)=> {
    const expense = req.body;
    let insertQuery = `insert into expenses( name, amount, category, token) 
                       values('${expense.name}', '${expense.amount}', '${expense.category}', '${expense.token}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.put('/expenses/:id', (req, res)=> {
    let expense = req.body;
    let updateQuery = `update expenses
                       set name = '${expense.name}',
                       amount = '${expense.amount}',
                       category = '${expense.category}'
                       where id = ${expense.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.delete('/expenses/:id', (req, res)=> {
    let insertQuery = `delete from expenses where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


/* investment CRUD */

app.get('/investments', (req, res)=>{
    client.query(`Select * from investments`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/investments/:token', (req, res)=>{
    client.query(`Select * from investments where token = '${req.params.token}'`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.post('/investments', (req, res)=> {
    const investment = req.body;
    let insertQuery = `insert into investments(name, ticker, amount, purchaseprice, token) 
                       values('${investment.name}', '${investment.ticker}', '${investment.amount}', '${investment.purchaseprice}', '${investment.token}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.put('/investments/:id', (req, res)=> {
    let investment = req.body;
    let updateQuery = `update investments
                       set name = '${investment.name}',
                       ticker = '${investment.ticker}',
                       amount = '${investment.amount}',
                       purchaseprice = '${investment.purchaseprice}'
                       where id = ${investment.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.delete('/investments/:id', (req, res)=> {
    let insertQuery = `delete from investments where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

/* alerts CRUD */

app.get('/alerts', (req, res)=>{
    client.query(`Select * from alerts`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/alerts/:id', (req, res)=>{
    client.query(`Select * from alerts where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.post('/alerts', (req, res)=> {
    const alert = req.body;
    let insertQuery = `insert into alerts(alerttext, condition, userid) 
                       values('${alert.alerttext}', '${alert.condition}', '${alert.userid}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.put('/alerts/:id', (req, res)=> {
    let alert = req.body;
    let updateQuery = `update alerts
                       set alerttext = '${alert.alerttext}',
                       condition = '${alert.condition}',
                       userid = '${alert.userid}'
                       where id = ${alert.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.delete('/alerts/:id', (req, res)=> {
    let insertQuery = `delete from alerts where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})
/* Balance CRUD */

app.get('/balance', (req, res)=>{
    client.query(`Select * from balance`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/balance/:token', (req, res)=>{
    client.query(`Select * from balance where token = '${req.params.token}'`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.post('/balance', (req, res)=> {
    const balance = req.body;
    let insertQuery = `insert into balance(name, amount, category, token) 
                       values('${balance.name}', '${balance.amount}', '${balance.category}', '${balance.token}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.put('/balance/:id', (req, res)=> {
    let balance = req.body;
    let updateQuery = `update balance
                       set name = '${balance.name}',
                       amount = '${balance.amount}',
                       category = '${balance.category}'
                       where id = ${balance.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.delete('/balance/:id', (req, res)=> {
    let insertQuery = `delete from balance where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})