const express = require('express');
const port = 4000;
const app = express();

// this global count will be the same for all browser 
let count = 0;

app.post('/api/increment', (req, res) =>{
    count++;
    res.json({ count });
});

app.get('/api/count', (req, res) => {
    res.json({ count: count });
});

app.listen(port, ()=> {
    console.log(`API available at http://localhost:${port}/api`);
});