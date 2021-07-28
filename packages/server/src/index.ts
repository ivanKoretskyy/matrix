const express = require( "express" );
var cors = require('cors');
import { multiply } from '@ivankoretskyy/matrix-utils'

const app = express();
app.use(cors())
app.get('/multiply', (req: any, res: any) => { // TODO: ADD TYPES
    const multiplied = multiply(+req.query.number)
    console.info(multiplied)
    res.send({data: multiplied});
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})
