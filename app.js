import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './server/routes/index';
import http from 'http';
const PORT = process.env.PORT || 4000;


// import https from 'https';
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/app/v1/', indexRouter);

const httpServer = http.createServer(app);


httpServer.listen(PORT, () => {
    console.log(`HTTP Server running on port ${PORT}`);
});

export default app;
