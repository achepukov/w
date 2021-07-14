import express from "express";
import path from "path";
const app = express();
const port = 8080; // default port to listen

app.get( "/", ( req, res ) => {
    // render the index template
    res.send('wisdo test task');
} );

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );