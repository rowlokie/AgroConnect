import express, { application } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import connectdb from './dbconnect.js';
import router from './rot/user.route.js';
import shoprouter from './rot/Shop.route.js';
import contractrouter from './rot/Contract.route.js';
import approuter from './rot/apply.route.js';
const app =express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

const corsOptions ={

    origin:'http//localhost:5173',
    credentials:true
}

connectdb();

app.use('/api/f1/user',router)
//app.use('/api/f1/shop',shoprouter)
app.use('/api/f1/contract',contractrouter)
app.use('/api/f1/application',approuter);
app.use(cors(corsOptions));
app.listen(3000,()=>{
    console.log('server is running');
})