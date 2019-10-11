// import dotenv from 'dotenv';
// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import app from '../app';


// dotenv.config();
// chai.use(chaiHttp);
// const { expect } = chai;

// describe ('users', ()=>{
//   it('user should be able to signup', (done)=>{
//     const user = {
//         firstName: 'uwase',
//         lastName: 'gisele',
//         email: 'gisele@gmail.com',
//         password: '123456'
//     };
//     chai.request(app)
//     .post('/api/v1/auth/signup')
//     .send(user)
//     .end((err, res)=>{
//         expect(res.status).to.be.eql(201, 'Response status is not equal to created');
//         done();
//     })

//     })
// })