
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import router from './src/server/routes/routes';

const app = express();
const port = "9000";
global.appRoot = path.resolve(__dirname);

app.use( bodyParser() );

app.use('/api', router);
app.use ( '/', ( req, res, next ) => {
    res.sendFile(path.join(__dirname + '/src/client/index.html'));
});



app.listen(process.env.PORT || port, ()=> console.log("app started"));
