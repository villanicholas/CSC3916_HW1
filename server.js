const express = require('express');
const app = express();
app.use(express.json());

app.post('/', (req,res) => {
    const acceptHeader = req.get('Accept');
    if(acceptHeader){
        res.setHeader('Accept', acceptHeader)
    }
    const responseBody = {
        
        ...req.body
    }
    res.json(responseBody)

});
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log('server is running on port ${port}');
//not sure what is going on with git

});

module.exports = server;