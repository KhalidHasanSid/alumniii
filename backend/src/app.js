// import express from 'express'
// import bodyParser from 'body-parser'
// import cookieParser from 'cookie-parser'
// import cors from 'cors'

// const app= express()

// app.use(cors({
//     origin:process.env.CORS_ORIGIN,
//     Credential: true
// }))

// app.use(bodyParser.json())

// app.use(express.urlencoded({extended:true,limit:'16kb'}))

// export {app}

// import router from './routes/Alumni.route.js'

// app.use('/api/v1/alumni', router)


import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

// Enable CORS


// app.use(cors({
//     origin: process.env.CORS_ORIGIN || '*', 
//     credentials: true 
// }));

app.use(cors());

// Middleware to parse JSON
app.use(bodyParser.json());

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true, limit: '16kb' }));

// Export the app
export { app };

// Import and use your routes
import router from './routes/Alumni.route.js';
app.use('/api/v1/alumni', router);
