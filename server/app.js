const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const token = '7Learn';

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.post('/login', (req, res) => {
    const {username, password} = req.body
    if(username === 'admin' && password === 'admin') {
        res.send({
            success: true,
            data: token
        })
    }
    res.send({
        success: false,
        error: 'username or password is wrong!'
    })
})


app.get('/users/me', (req, res) => {
    const {authorization} = req.headers

    if(token === authorization) {
        res.send({
            success : true,
            data : {
                id: 1,
                username: 'admin',
                email: 'hbberra@gmail.com',
                name: 'admin'
            }
        })
    }
    res.send({
        success : false,
        error: 'token is not valid'
    })
})



app.listen(5000, () => (
    console.log('Application is working...')
));

