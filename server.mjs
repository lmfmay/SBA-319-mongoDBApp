//imports
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './db/conn.mjs';
import { error } from './utilities/error.mjs';
import talentRoutes from "./routes/talentRoutes.mjs";
import clientRoutes from "./routes/clientRoutes.mjs";
import testimonialRoutes from "./routes/testimonialRoutes.mjs";

//setups
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3001

//db connection
connectDB()

//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));



//routes
app.get('/',async(req,res)=>{
    res.send('This server supports CRUD operations for 3 data collections: talent, client, and testimonial.')
})

app.use('/talent',talentRoutes)
app.use('/client',clientRoutes)
app.use('/testimonial',testimonialRoutes)

//Error Handling
app.use((req, res, next) => {
    next(error(404, "Resource Not Found"));
  });

app.use((err, req, res, next) => {//Err returned from previous error handling middleware
    res.status(err.status || 500);
    res.json({ error: err.message });
  });

//listen
app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`)
})