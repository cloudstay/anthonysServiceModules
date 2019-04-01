const supertest = require('supertest');
const $ = require('jquery');

// describe('service test', function() {
//     var app = express();
//     var server;
//     beforeEach(function() {
//         server = app.listen(3001);
//     });
//     afterEach(function() {
//         server.close();
//     });
//     test('GET request outputs status code of 200', (error) => {
//         if (error){
//           console.log(error);
//         } else {
//           supertest(app).get('/some').expect(200);
//         }
//     });
// });

describe('testing data length with call to api', function() {
    test('this should pass everytime', (done) => {
        expect(typeof 'this is a string').toBe('string');
        done();
      });
      test('there should be 100 listings exactly', (done) => {
        $.ajax({
          url: 'http://localhost:3001/api/testing',
          type: 'GET',
          success: (data) => {
            expect(data.length).toBe(100);
            done();
          }
        });
      });
});