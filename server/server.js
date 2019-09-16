import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/entriesRoutes';


const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


const PORT = 3000;
app.use('/', router);
app.get('/', (req, res) => {
    res.send({
      status: 200,
      message: 'Welcome to myDiary application ',
    });
  });

app.listen(PORT, ()=>{
    console.log(`server is running on PORT ${PORT}`);
 });
export default app;
 