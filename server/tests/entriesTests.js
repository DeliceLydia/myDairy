import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app'


const { expect } = chai;

chai.use(chaiHttp);

const myTestEntry = {
    title: 'Lydia learns tests',
    entry: 'This is how I learned my tests'
}

describe('Entries tests', () => {
    it('Should get all entries', (done) => {
        chai.request(app)
        .get('/api/v1/entries')
        .end((err, res) => {
            expect(res.status).to.be.eql(200, 'Response status is wrong');
            done();
        });
    });

    it('Should add an entry', (done) => {
        chai.request(app)
        .post('/api/v1/entries')
        .send(myTestEntry)
        .end((err, res) => {
            expect(res.status).to.be.eql(201, 'Response status is not equal to created');
            done();
        });
    });
    it('should get one antry', (done) => {
       chai.request(app)
       .get('/api/v1/entries/1')
       .end((err, res)=> {
           expect(res.status).to.be.eql(200, 'response status is wrong');
           done();
       })
   });
   it('should not get an entry when id doesn\'t exist', (done) =>{
       chai.request(app)
       .get('/api/v1/entries/9')
       .end((err, res)=> {
           expect(res.status).to.be.eql(404, 'response status is wrong');
           done();
       })
   })
});