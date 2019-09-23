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
    it('server should be able to run', (done)=>{
        chai.request(app)
        .get('/')
        .end((err, res)=> {
            expect(res.status).to.be.eql(200, 'Response status is wrong');
            expect(res.body).to.be.an('Object');
            expect(res.body.message).not.to.be.empty;
            expect(res.body.message).to.equals('Welcome to myDiary application ');
            done();
        })
    })
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
            expect(res.body).to.be.an('Object');
            expect(res.body.message).not.to.be.empty;
            expect(res.body.message).to.equals('diary entry successfully posted');
            done();
        });
    });
    it('should not post when there is a validation mistake', (done) =>{
        const myTestEntry = {
            title: 10,
            entry: 'This is how I learned my tests'
        } 
        chai.request(app)
        .post('/api/v1/entries')
        .send(myTestEntry)
        .end((err,res) => {
            expect(res.status).to.be.eql(400);
            done();
        })
   })
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
           expect(res.body.error).not.to.be.empty;
           expect(res.body.error).to.equals('entry not found');
           done();
       })
   })
   it('should be able to modify an entry', (done) => {
    const myTestEntry = {
        entry: 'Testing is abit easier'
    }
      chai.request(app)
      .put('/api/v1/entries/1')
      .send(myTestEntry)
      .end((err, res)=> {
          expect(res.status).to.be.eql(200, 'status is wrong');
          expect(res.body).to.be.an('object');
          expect(res.body.message).not.to.be.empty;
          expect(res.body.message).to.equals('entry updated successfully');
          expect(res.body.data).to.be.an('object');
          done();
      })
    })
    it('should not be able to modify an entry when id doesn\'t exist',(done) => {
        const myTestEntry = {
            entry: 'Testing is abit easier'
        }
        chai.request(app)
        .put('/api/v1/entries/9')
        .send(myTestEntry)
        .end((err,res)=> {
            expect(res.status).to.be.eql(404, 'status is wrong');
            expect(res.body).to.be.an('object');
            expect(res.body.error).not.to.be.empty;
            expect(res.body.error).to.equals('entry with that entryId not found');
            done();
        })
    })
    it('should not able to modify an entry when there is a validation mistake', (done)=> {
        const myTestEntry = {
            entry: 30
        }
        chai.request(app)
        .put('/api/v1/entries/1')
        .send(myTestEntry)
        .end((err,res)=> {
            expect(res.status).to.be.eql(400, 'status is wrong');
            expect(res.body).to.be.an('object');
            done();
        })
    })
    it('should be able to delete an entry', (done) => {
        chai.request(app)
        .delete('/api/v1/entries/1')
        .end((err,res)=> {
            expect(res.status).to.be.eql(200, 'status is wrong');
            expect(res.body).to.be.an('object');
            expect(res.body.message).not.to.be.empty;
            expect(res.body.message).to.equals('entry deleted successfully!');
            done();
        })
    })
    it('should not be able to delete when id doesn\'t exist', (done)=> {
        chai.request(app)
        .delete('/api/v1/entries/9')
        .end((err,res)=> {
            expect(res.status).to.be.eql(404, 'status is wrong');
            expect(res.body).to.be.an('object');
            expect(res.body.error).not.to.be.empty;
            expect(res.body.error).to.equals('entry with that ID is not found');
            done();
        })
    })
});