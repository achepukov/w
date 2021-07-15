import express from "express";
import bodyParser from "body-parser";
import postsRouter from './routes/posts';

const app = express();
const { PORT } = process.env;

app.get( "/", ( req, res ) => {
    res.send('API');
});

app.use(bodyParser.json())
app.use('/posts', postsRouter);

const errorHandler = ({ statusCode = 400, ...err}, req: any, res: any, next: any)  => {
    if (res.headersSent) {
      return next(err)
    }
    res.status(statusCode);
    res.send(err);
  }

app.use(errorHandler);

app.listen( PORT, () => {
    console.log( `server started at http://localhost:${ PORT }` );
} );