const express = require( "express" );

const app = express();

app.get('/multiply', (req: any, res: any) => { // TODO: ADD TYPES
    console.log(req.query.number)
    res.send(req.query);
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})