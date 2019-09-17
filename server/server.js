import express from 'express';
import router from './routes/entriesRoutes';


const app = express();
app.use(express.json());


const port = process.env.PORT || 3000;
app.use('/', router);
app.get('/', (req, res) => {
    res.send({
      status: 200,
      message: 'Welcome to myDiary application ',
    });
  });

app.listen(port, () => console.log(`server is running on PORT ${port}`));
export default app;
 