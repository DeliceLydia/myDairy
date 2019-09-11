import express from 'express';
import router from './routes/entriesRoutes';

const app = express();
app.use(express.json());

const PORT = 3000;

// app.use('/', (req, res) => {
//     res.send({
//       status: 200,
//       message: 'Welcome to myDiary application ',
//     });
//   });

app.use(router);
app.use('/', router);
app.listen(PORT, ()=>{
    console.log(`server is running on PORT ${PORT}`);
 });
export default app;
 