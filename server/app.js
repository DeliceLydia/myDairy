import express from 'express';
import router from './routes/entriesRoutes';


const app = express();
app.use(express.json());


app.use('/', router);
app.get('/', (req, res) => {
    res.send({
      status: 200,
      message: 'Welcome to myDiary application ',
    });
  });

export default app;
 