const express = require('express');
const app = express();
app.use(express.json());

app.post('/', (req,res) => {
    const acceptHeader = req.get('accept');
    if(acceptHeader){
        res.setHeader('accept', acceptHeader)
    }
    const responseBody = {
        acceptHeader: acceptHeader,
        ...req.body
    }
    res.json(responseBody)

});
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log('server is running on port ${port}');


});

module.exports = server;