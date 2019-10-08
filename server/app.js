import express from 'express';
import router from './routes/entriesRoutes';
import user_router from './routes/userRoutes';


const app = express();
app.use(express.json());


app.use('/', router);
app.use('/', user_router);
app.get('/', (req, res) => {
    res.send({
      status: 200,
      message: 'Welcome to myDiary application ',
    });
  });

export default app;
 