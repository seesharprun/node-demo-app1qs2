import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Site from './site.js';

const app = express();

let index = (req, res) => {
    const message = 'Hello, Everyone!';
    var html = ReactDOMServer.renderToString(<Site greeting={message} />);
    res.send(html);
};

app.get('/', index);
app.listen(3333);